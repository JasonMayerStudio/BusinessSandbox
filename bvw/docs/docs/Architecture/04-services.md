---
status:
---
## Overview

While we won&#39;t be implementing a microservices architecture in the truest sense – we will be breaking our APIs into groups of smaller functional units, or bounded contexts.  This approach allows us the flexibility to make a change in one module then test and deploy it separate from the rest of the application greatly reducing the amount of time spent fixing bugs and regression testing before a deployment can be initiated.  In addition, this allows a more granular scaling model as each service can scale up and down based on its own load and resource usage which will reduce overall cost [1.5].

## Details

Each distinct service will reside in a Google App Engine Standard java project - Googles out of the box implementation of its web traffic serving java runtime.  While this environment has some restrictions (Java 7, Java Servlet 2.5, only certain libraries whitelisted) it should be adequate for most purposes.  Should the need arise to break out of this environment we&#39;ll step up to a Google App Engine flexible environment that allows for greater customization of the runtime container.

As mentioned above we will be breaking down and grouping our services into related functionality. The services listed below are not meant to be exhaustive, but to demonstrate the level of granularity in which our services will be implemented.


<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/9ffe65f5-8d49-4bde-a22c-1d6980ec78bf" id="FziY4cGZwciz"></iframe></div>

_Figure 4:  Example Services_

- **Authorization –** Given an authenticated user (session id) lookup roles and permissions
- **Data** – The services will be used for returning raw data to the front end to display as it needs. This service will interact with variety of data storage mechanisms including Google Cloud SQL, Spanner, BigQuery, and Looker Query.
- **Visualization** – This service will be used to interact with the looker visualization tool.  It will be used as a pass through to embed looks/dashboards into the front-end iframe as well as run LookML queries to return raw data utilizing the built-in caching strategies of Looker.
- **Preferences** – Used for user specific preferences (language, table / column layout)
- **Registration –** Endpoints for registration process
- **Admin –** Group of APIs used to administer the application as well as users.

Each service will be designed to serve the needs of the Business View application, but they could be exposed publicly through an API gateway such as Apigee for general enterprise consumption.  Regardless of whether an API will be exposed externally or used only for Business View it will be documented using the Swagger standard which allows for documentation that is easily readable by API consumers it also provides a quick framework to manually validate and test endpoints [3.3, 3.4]. To facilitate quick adoption all APIs will be RESTful [3.1], follow the Microsoft REST API guidelines [3.5], and be CORS enabled by default [3.4].

All java assets will utilize the built in GCP Stackdriver tools to facilitate logging. [6] With minimal configuration Stackdriver provides error reporting, uptime monitoring, alerts, logging and dashboards all available through the Google Cloud Platform console and third party tools such as Splunk [6.1.1, 6.1.2, 6.1.3, 6.3].

As environment variables are stored within the deployment description of an App Engine project, changing these values takes a complete redeploy of the application.  Overcoming this limitation can be addressed a couple different ways including storing dynamic configurations in files storage and providing a way to force a refresh of the services should they change.   The application should also have a default set of values to ensure that if the file storage goes down the application can rollback to service level defaults.

## Development Environment Setup

All services and common libraries will be developed and deployed as separate modules on each individual developer&#39;s machine.  Each module will be able to be run independently on a locally simulated GAE sandbox using the Google App Engine maven plugin.

To keep code standardized across services and common libraries we will create Maven archetypes to assist in scaffolding out new code [7.1]. By creating these archetypes, or project templates, we will be able to easily create a new service and common libraries with all the necessary configuration, libraries, and frameworks built in allowing us to quickly implement new functionality.  In addition to allowing for quicker code creation this keeps the format of each module similar so that developers can immediately be familiar with the structure of the code.

## Risks and Assumptions

- Changing the log level through an environment variable cannot be done easily at runtime as environment variable are deployed with the application
- Global Payments will provide any necessary penetration and vulnerability testing
- All API&#39;s will be developed with the primary purpose of servicing the Business View Application only. Should they be needed to support other applications further development may be required
- All services will target the Google Cloud Platform specifically.  Moving them to another cloud provider will take some rewriting.
