---
title: Non-Functional Requirements
status: 
---

## General Cloud Architectural Requirements

- High Availability with a 99.999% Uptime Target ( or maximum available via cloud provider)
- Prefer Managed PaaS over IaaS
- Deployed to multiple Regions/Datacenters
- Load Balancing based on Geographic location for minimum latency
- Should leverage elastic auto-scale to minimize cloud cost and maximize availability and response time
- All dependent services (caching, messaging, etc.) should also be deployed with the same HA guidelines
- Configuration items (Service Endpoints, Connection Strings, App Settings) should be configurable by operations without the need to deploy code changes.
- Solution should not be coupled to a specific cloud vendor
  - Should be able to deploy to any vendor or potentially all of them without coding changes

## WebSite Requirements

- Initial Page Response time &lt; 500ms
  - All resources (css,js, images) optimized for speed and minimum latency
  - Utilize CDNs when appropriate
  - Minify and Bundle css and js when appropriate
- Content that requires &gt; 500 ms should be loading via AJAX calls
  - All content to load in &lt;5000 ms
- Friendly URLS (ie no .jsp or .html)
- HTTPS via TLS 1.2
- Should work on all Modern Browsers (including phone, tablet)
  - Specific Browser Versions TBD

## API Requirements

- API design should be RESTful
- API should be transmitted over a secure protocol (TLS 1.2)
- API should have online documentation (i.e Swagger)
- API should be CORS enabled
- Although exceptions can be made, APIs should follow the Microsoft REST API Guidelines ( [https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md](https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md))

## DevOps Requirements

- Dev/QA/Staging/Prod Environments

- All Code Deployments must be automated from a Build Server or Release Pipeline Deployment Tool
  - No Manual FTP or Command Line Deployments

- CI in the lower Environment if possible.
- Artifact Based Deployment throughout the Environments
  - Build Once deploy many
- All Builds should be versioned and be able to rollback to a specific version on demand throughout the environments
- Production Deployments should be &quot;Zero Down Time&quot;
- Cloud Resources should be scriptable and deployable via the same automation tools (i.e. Azure ARM Templates or equivalent)

## QA/Testing Requirements

- Automated Testing is required at multiple levels
  - Unit Tests for compiled Business Logic
  - Javascript automated Tests for UI/UX Logic
  - API Test Automation
- Automated Load Testing (Specific Throughput targets TBD)
- Automatic Testing should be part of the automated release process

## Logging Requirements

- Application should log at several levels
  - Security Events
  - Applications Errors/Warnings
  - Debug/Trace Events
- Logging Level should be configurable at runtime
- Custom Metrics as applicable should be created to monitor system performance and utilization (Metrics to be determined in the Design Phase)

## High Level Coding Guidelines

- Code should be structured in a way to maximize maintainability
  - Utilization of SOLID Design Principles
- Custom Javascript written in Typescript if possible
