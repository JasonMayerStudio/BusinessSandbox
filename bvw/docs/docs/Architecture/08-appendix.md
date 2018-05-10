---
status:
---
# A.Business View Non-Functional Requirements #

1. 1.General Cloud Architectural Requirements
  1. 1.High Availability with a 99.999% Uptime Target (or maximum available via cloud provider)
  2. 2.Prefer Managed PaaS over IaaS
  3. 3.Deployed to multiple Regions/Datacenters
  4. 4.Load Balancing based on Geographic location for minimum latency
  5. 5.Should leverage elastic auto-scale to minimize cloud cost and maximize availability and response time
  6. 6.All dependent services (caching, messaging, etc.) should also be deployed with the same HA guidelines
  7. 7.Configuration items (Service Endpoints, Connection Strings, App Settings) should be configurable by operations without the need to deploy code changes.
  8. 8.Solution should not be coupled to a specific cloud vendor
    1. 8.1.Should be able to deploy to any vendor or potentially all of them without coding changes
2. 2.Website Requirements
  1. 1.Initial Page Response time &lt; 500ms
    1. 1.1.All resources (css,js, images) optimized for speed and minimum latency
    2. 1.2.Utilize CDNs when appropriate
    3. 1.3.Minify and Bundle css and js when appropriate
  2. 2.Content that requires &gt; 500 MS should be loading via AJAX calls
    1. 2.1.All content to load in &lt;5000 MS
  3. 3.Friendly URLS (i.e. no .jsp or .html)
  4. 4.HTTPS via TLS 1.2
  5. 5.Should work on all Modern Browsers (including phone, tablet)
    1. 5.1.Specific Browser Versions TBD
3. 3.API Requirements
  1. 1.API design should be RESTful
  2. 2.API should be transmitted over a secure protocol (TLS 1.2)
  3. 3.API should have online documentation (i.e. Swagger)
  4. 4.API should be CORS enabled
  5. 5.Although exceptions can be made, APIs should follow the Microsoft REST API Guidelines ( [https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md)](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md))
4. 4.DevOps Requirements
  1. 1.Dev/QA/Staging/Prod Environments
  2. 2.All Code Deployments must be automated from a Build Server or Release Pipeline Deployment Tool
  3. 3.No Manual FTP or Command Line Deployments
  4. 4.CI in the lower Environment if possible.
  5. 5.Artifact Based Deployment throughout the Environments
  6. 6.Build Once deploy many
  7. 7.All Builds should be versioned and be able to rollback to a specific version on demand throughout the environments
  8. 8.Production Deployments should be &quot;Zero Down Time&quot;
  9. 9.Cloud Resources should be scriptable and deployable via the same automation tools (i.e. Azure ARM Templates or equivalent)
5. 5.QA/Testing Requirements
  1. 5.1.Automated Testing is required at multiple levels
    1. 5.1.1.Unit Tests for compiled Business Logic
    2. 5.1.2.JavaScript automated Tests for UI/UX Logic
    3. 5.1.3.API Test Automation
  2. 2.Automated Load Testing (Specific Throughput targets TBD)
  3. 3.Automatic Testing should be part of the automated release process
6. 6.Logging Requirements
  1. 1.Application should log at several levels
    1. 1.1. Security Events
    2. 1.2.Applications Errors/Warnings
    3. 1.3.Debug/Trace Events
  2. 2.Logging Level should be configurable at runtime
  3. 3.Custom Metrics as applicable should be created to monitor system performance and utilization (Metrics to be determined in the Design Phase)
7. 7.High Level Coding Guidelines
  1. 1.Code should be structured in a way to maximize maintainability
    1. 1.1.Utilization of SOLID Design Principles
    2. 1.2.Custom Javascript written in Typescript if possible



i

#
 [https://cloud.google.com/appengine/sla](https://cloud.google.com/appengine/sla)

ii

#
 [https://cloud.google.com/appengine/docs/standard/java/runtime](https://cloud.google.com/appengine/docs/standard/java/runtime)

iii

#
 [https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
