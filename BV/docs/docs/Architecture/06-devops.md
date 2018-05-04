---
status: 
---
## Overview

Cardinal will build a devops pipeline that can be used within the google cloud project that controls versioning, automated testing, and deployments to multiple environments. While Cardinal will follow industry standards and best practices by making the process as flexible as possible we will only focus on building a process that best fits the Business View project. We are not attempting to build a one size fits all solution for Global Payments. Should another project outside of Business View be able to fit into the designed process with no change it can do so. Furthermore, should Global Payments develop a dev ops workflow separate from the proposed solutions it will change the estimation.

## Description

For the success of this project we will create a single stand-alone Google Cloud Project to control all aspects of versioning, testing, build and deployment.  This standalone project would contain the following standalone Google Compute Engine services used to facilitate a devops pipeline:

- git
- Jenkins
- Jfrog Artifactory

### Source Control

Through the course of many projects Cardinal has settled on a git branching model [Figure 5] that is easy enough for novices, yet robust enough to handle the extreme conditions of a large-scale enterprise application.  This paradigm can be easily extended to as many branches / environments as needed.

The following git workflow would apply to both front-end code/resources, shared common libraries, and service API&#39;s.
<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/0994cec3-9967-4dc6-889a-f0ab02d301bd" id="EEiY8XGJ60F0"></iframe></div>

_Figure 5: Git Branching Model_

The git flow is as follows:

1. Each feature / story is a new branch off the develop branch
  1. Periodically the development branch should be merged into the feature branch to minimize future merge conflicts and keep the code up to date with the most recent accepted code.
2. As a story is completed a merge request is created
  1. Dev manager / team reviews code prior to merge
3. Feature is merged into the develop branch \*
4. When a feature(s) is ready for QA the development branch is merged into the QA branch \*
5. As the QA process progresses all bugs are fixed against a &quot;bug fix&quot; branch allowing for new concurrent development of new features and bug fixes
6. Once again bug fix branch is merged into Dev
7. Code is again merged into QA \*
8. Code is Merged to UAT \*
9. Code is merged to the Master branch \* where another new branch is created and tagged with a version number

If at any point a critical production bug is found we can:

1. Make the fix on the master branch \*
  1. Create a new branch from master and tag with version number
2. Merge code back through environments sequentially:
  1. UAT\*
  2. QA\*
  3. Dev\*
  4. Feature branch(es) \*

\* Denotes a trigger of the automated build and deploy process to the appropriate environment

### Automated Build and Deploy Process

Part of developing quality code is having a good continuous integration process with automated testing and code coverage checks. A simple, yet robust, approach to this is to use a Jenkins service running in a Google Cloud compute engine (VM) to monitor distinct branches in git.  When a new commit arrives, the automated process will execute all unit tests [5.3], code coverage checks, and build the project.  Upon successful passing of all the quality gates a combination of Jenkins plugins and _gcloud_ scripts will execute to promote the code to the correct environment.  [4.4, 4.5]

To prevent developers from deploying code manually to any environment we&#39;ll utilize GCPs Identity and Access Management (IAM) to lock down most aspects of deployments and the platform as a whole. [4.3] The Jenkins server will have a service account associated to allow artifact releases and file copying while preventing developers direct access to change deployed code in any environment. [4.2]

Especially important for shared common libraries is a repository that can handle all versions so that dependent code can quickly access them. An industry standard for managing artifacts is artifactory – this tool creates a centralized, yet private, repository for all versions of libraries used.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/41460e9a-0597-487f-9da8-c6184e4e6059" id="dIiYoY2HaBCj"></iframe></div>

_Figure 6: Overview of automated deploy process_



### Service Versioning

Thanks to GAE&#39;s service versioning capabilities we can deploy a new service version to a hidden staging area that can only be accessed via _hidden_ URL that follows the patterniii:
**https://** &lt;&lt;_version&gt;&gt;_- **dot** -&lt;&lt;_service&gt;&gt;_- **dot-&lt;&lt;** _app-id&gt;_. **appspot.com**

With a Google cloud load balancer utilizing layer 7 routing, coupled with the google cloud traffic manager we should be able to redirect requests in a manner that is seamless to the front end.  This allows the deployment / devops team to manage traffic to the new endpoints prior to making them fully consumable to the outside world.

Migrating traffic from one version to another can be done through the Google Cloud Console or through a series of commands using the gcloud SDK. This traffic manager allows us to _hide_ an API endpoint until a desired time, split traffic between multiple versions to facilitate blue/green testing, and allow for zero downtime deployments [4.8].  This versioning and traffic routing pattern also allows for easy rollback [4.7] to a previous version in real-time should something go wrong.  Figure 7 below shows this environmental segregation as well as how the traffic manager can be used to route users between versions of each individual service.
<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/a8b0c922-dca5-4e77-ab21-cf72e1e49498" id="4JiY5TERLxQS"></iframe></div>

_Figure 7: Environment segregation and traffic management_

The traffic manager serves traffic to the live service through HTTPS [2.4] by default and can be switched to route traffic to multiple versions to provide a slow, well managed, rollout.

## Risks and Assumptions

- The build and deploy pipeline will be built specifically for the Business view project. Any reuse by other teams is allowed but will not be managed by Cardinal
