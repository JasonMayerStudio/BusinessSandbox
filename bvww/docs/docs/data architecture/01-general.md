---
title: Data Architecture
status: 
---

As part of the Business View application, we will be breaking new ground on how data will be stored, aggregated, accessed, and analyzed at Global Payments.  The following documentation outlines our recommended approach on a cloud-first architecture, leveraging the Google Cloud Platform service offerings to modernize the way Global Payments interacts with their customers.

Each section of this documentation will contain the following sections:
- Feature Summary
- Approach
- Components
- Success Criteria
- Risks & Assumptions

During the discovery process, several cloud platforms and related technologies were evaluated for their feature sets, overall viability, cost, and maintainability.  Global Payments has selected the following set of services as the future of their application and data ecosystem.

|Use   |Selection|Key Factors|
|:------:|:-------:|-----------|
|Overall Platform|Google Cloud Platform|Conclusion after working through a set evaluation criteria from Ali, Mark, and team.|
|Data Lake|BigQuery|Massively Parallel Processing engine that can handle the relational data that GP will need to analyze, aggregate and present.|
|Relational Database|CloudSQL|MySQL as a service will provide standard relational databases without the need to manage infrastructure.|
|Reporting & Visualizations|Looker|Of the applications considered, Looker is able to provide the most flexibility in how data is presented and embedded.  It is also able to natively connect and query against BigQuery.|
|Data Sematic Layer|Looker|Since Looker will be used for reporting and visualizations, we will also be using the application as a primary sematic layer.  This means that the models will provide business definitions to help users understand data that is available|

In addition to the technology selections, we sought to incorporate the following principles into our proposed solution:
- Where ever possible, design the solution to be platform or system agnostic
- Provide a set of flexible and reusable services that could be leveraged elsewhere in the GP environment
- Create a minimum number of entry points to data, consolidating attribute definitions, metrics, and key performance indicators
