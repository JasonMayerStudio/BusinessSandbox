---
title: System Architecture Overview
status: 
---
# System Architecture Overview

Global Payments has chosen Google Cloud Platform (GCP) for this project and any references to _the cloud_ below are a direct reference to the Google Cloud Platform.  The decisions in this document are based technology available in GCP, coupled with the Non-Functional requirements [Appendix A], discussions had during the discovery phase of the project, and industry standards and best practices.

Cardinal Solutions has broken down the work into distinct development teams which facilitates quicker delivery by allowing multiple concurrent development streams, smaller testable units, and releases that can be done independent of other components.  These major development streams include:

- Front-end application
  - Built using ReactJS and contain the nothing but the visual framework (html, css, JavaScript, etc.) to present a responsive application to the end user regardless of the device they are using.
- Services
  - RESTful set of CORS enabled [3.4] APIs built using Java 7 compartmentalized into bounded contexts and running on a series Google App Engine (GAE) standard instance, a platform as a service (PaaS) [1.2] [3.5] [3.1]
- Data
  - Stored in a variety of data stores based on volatility, security, caching and access speed requirements

Each environment in the hierarchy (Dev, QA, UAT, Prod, etc) will live in its own Google Cloud Project [4.1].  This approach helps reduce risk of cross-contaminating API versions, allows for different data to be stored thus protecting any confidential data, and provides for a more cost-effective design as entire environments can be added and removed at all.  This also facilitates a more simplistic approach to billing as costs can be managed at the environment level.

Being that Google App Engine (GAE) has an uptime SLA of 99.95i and Global Payments has an uptime requirement of 99.999 [1.1] it is suggested that multiple production environments be implemented fronted by an external third-party load balancer that can manage traffic and handle failures of one region.  Otherwise, Figure 1 below identifies high level components that have been identified for each environment.

## System Context Diagram

The System Context diagram shows the interactions between the primary components comprising the Business View (BV) system.
<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/1079213b-4e78-4b14-969a-f6c8d27f8420" id="p8hYIA1I5jxg"></iframe></div>

_Figure 1: System Context Diagram_



## Technology Overview

The following technology decisions were made based on a combination of guidelines put forth by Global Payments [Appendix A], industry standards, and constraints within the GAE.

### Platform
| Technology | Description |
| -- | -- |
| Google App Engine Standard (GAE, App Engine)  | A [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing) platform with a uptime SLA of 99.95% [1.1, 1.2] used for hosting  [web applications](https://en.wikipedia.org/wiki/Web_application) in Google-managed data centers. App Engine offers automatic scaling for web applications as the number of requests increases or resource usage rise beyond customer defined thresholds |
| Google Cloud Content Delivery Network (CDN)  | Globally distributed network of proxy servers to serve content to end-users with high availability and high performance.  |
| Google Cloud Load Balancer  | Layer 7 load balancer to direct traffic based on URL patterns
| StackDriver  | Monitoring, logging, and diagnostics of GAE instances with metrics, dashboards, alerting, log management, reporting, and tracing capabilities. |
| Google PubSub | Fully-managed real-time messaging service that allows you to send and receive messages between independent applications |


### Languages, Libraries, and Frameworks

| Technology | Description |
| -- | -- |
| Java 7 |  All RESTful APIs will be written in Java 7 with the Java Servlet 2.5 standard ii  |
| Spring / Spring MVC 3.2.18.RELEASE | An industry standard library that provides an MVC framework for quickly creating RESTful API&#39;s while providing inversion of control (IoC), dependency injection, and a harness for a robust testing framework.  |
| Swagger (springfox-swagger2)  | An annotation driven library that assists in creating both human and machine readable documentation while providing a human usable test harness for RESTful endpoints |
| Project Lombock | Lombok is used to reduce boilerplate code (primarily in a domain model) by automatically generating accessor methods, as well as implementations for the toString, equals, and hashCode methods |
| ReactJS  | A structural framework by Google, built for dynamic web apps that uses HTML as the core template language and extends HTML&#39;s syntax to express application components clearly and succinctly. Additionally, ReactJS&#39;s data binding and dependency injection eliminate much of the code one would otherwise have to write |
| Other front end technologies   | **ES2015** – ES2015 is a significant update to the language, and the first major update to the language since ES5 was standardized in 2009. Implementation of these features in major JavaScript engines is underway now. **SCSS** – A powerful, feature rich preprocessor for CSS that adds improved syntax, functions, variables, and many other features **Karma** – A powerful, framework agnostic environment for JavaScript unit tests that allows for easy debugging **Webpack** – A module bundler that turns modular source code into efficient web-ready production code |

### Front-End UI Framework

| Technology | Description |
| -- | -- |
| Flux Architecture |  [Quick summary](http://fluxxor.com/what-is-flux.html) of what Flux is with details of it versus MVC<br>[Detailed overview](https://facebook.github.io/flux/docs/overview.html) of FLUX architecture |
| UI - [ReactJS](https://facebook.github.io/react/)  | - Works great for teams, strongly enforcing UI and workflow patterns<br>- UI code is readable and maintainable<br>- Componentized UI is the future of web development, and you need to start doing it now. |
| Flux Implementation - [Redux](http://redux.js.org/) | - Server Side Rendering (if required)<br>- One Store / Multiple Reducers<br>- Excellent Documentation<br>- Developer Friendly |
| ReactJS  | A structural framework by Google, built for dynamic web apps that uses HTML as the core template language and extends HTML&#39;s syntax to express application components clearly and succinctly. Additionally, ReactJS&#39;s data binding and dependency injection eliminate much of the code one would otherwise have to write |
| Rest Client - [Axios](https://github.com/mzabriskie/axios) | - Isomorphic<br>- Promise based<br>- Transformers: allow performing transforms on data before request is made or after response is received<br>- Interceptors: allow you to alter the request or response entirely (headers as well). also perform sync operations before request is made or before Promise settles<br>- Built-in XSRF protection |
| Build tool - [Webpack](https://github.com/webpack/webpack) | - Powerful build tool for single-page applications (SPAs).<br>- Webpack is good for figuring out module dependencies, making it easier for developers to organize code structure and reuse modules/components among multiple entry points. |
| Transpiler - [Babel](https://github.com/babel/babel) | - Greatest level of compatibility with the ES6 spec, compared to other transpilers<br>- Use next generation JavaScript, today, without sacrificing backwards compatibility for older browsers.<br>- First class support for dozens of different build & test systems which makes integration with our current toolchain very simple. |
| Linter - [ESlint](http://eslint.org/) | - Robust set of default rules covering all of the rules that exist in JSLint and JSHint, making a migration to this tool fairly easy.<br>- Configurable rules - including error levels, allowing you to decide what is a warning, error, or imply disabled.<br>- Rules for style checking, which can help keep the code format consistent across teams.<br>- Customisable plugins and rules. |

### Tooling

| Technology | Description |
| -- | -- |
| Maven | A build automation tool that makes building the application uniform as well as managing the dependencies used in a project |
| Git | A distributed revision control system aimed at speed, data integrity, and support for distributed, non-linear workflows |
| Jenkins | Continuous integration tool used for automated build, testing, and deployment |
| Artifactory | Software repository for hosting shared dependencies |
| gcloud SDK | A set of command line tools to facilitate scripting of google cloud tasks such as deployments, traffic management, and managing cloud storage buckets |

### Data
| Technology | Description |
| -- | -- |
| Cloud SQL | Fully managed MySQL instance for application data |
| Google BigQuery | Enables interactive analysis of massively large datasets |
| Memcache | Caching mechanism to be used for volatile data that can be recreated easily but is able to be cached for faster retrieval |
| Looker | Visualization engine and sematic layer to wrap BigQuery |

## Risks and Assumptions

- All Cardinal developers will have access to Global Payments Business View development cloud project
- Each environment (dev, qa, stage, prod, etc) will live in a distinct Google Cloud Project
- All domains, certificates, and infrastructure beyond a development environment will be managed by Global Payments
