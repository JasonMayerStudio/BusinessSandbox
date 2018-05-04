---
title: BigQuery Model
status:

---

On the Google Cloud Platform, Global Payments will be leveraging the BigQuery platform offering.  A team at Global Payments is already working on populating and developing the necessary structures and loading processes, and we will be interfacing with them throughout this project.

## Feature Summary
<hr />
BigQuery is a massively parallel processing engine that provides consistent performance over extremely large data sets.  Currently, we are not planning on directly accessing BigQuery from within the application.  Looker's platform has the ability to natively communicate with the BigQuery service, and we will use this as the primary method of interacting with data for Business View.

## Approach
<hr />

- The requirements, as documented in the reports and visualizations sections, will determine the necessary fields we will need visibility to in BigQuery
- We will be attempting to let BigQuery also define calculations or metrics.  The intention with this is to not have multiple and distinct sematic layers over the available data.

## Components
<hr />

- BigQuery
- Looker platform

## Success Criteria
<hr />

- Develop all required reports within the Looker platform
- Meet the application performance requirements

## Risks & Assumptions
<hr />

- Since we have influence, but not control, over the structures within BigQuery, it will be a key dependency for the Business View application
- At the time of compiling this document, the base structure of BigQuery is still unknown.
- As noted in the Data Access section, it is possible for us to submit highly filtered queries that perform poorly.  We will use as much of the persisted query feature in Looker to achieve necessary performance, but may need to evaluate landing pre-aggregated data sets in BigQuery or into a CloudSQL instance.
