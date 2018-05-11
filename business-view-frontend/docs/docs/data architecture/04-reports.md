---
title: Report Development Approach
status: 
---

## Feature Summary
<hr />

Standardized reports will be delivered to users through the Looker platform.  To be consistent with the way data is delivered to Business View users today, most reports will be formatted as export-ready tabular tables.  Inside Looker, we will leverage Looks to couple filters and required columns, along with features that allow us to meet performance standards.

## Approach
<hr />

Technically, a standardized report will be sourced from a Look that uses a table visual.  The process to build a Look will be relatively similar regardless of whether or not the results are going to be used in a chart or a table.  [Report requirements](/docs/reporting/general) will be used to determine necessary data elements.

At a high level, Looks which will be used for Standardized Reports are developed in the following way:
1. Develop a model that contains all necessary data elements
2. Create an Explore using available Dimensions and Measures from the model
    <img src="../../images/InitialLook.png" width="640" height="480" alt="Initial Look">
3. Select the required set of fields for the report and arrange or group as needed to generate the necessary output.
    <img src="../../images/ConfiguredLook.png" width="640" height="480" alt="Configured Look">
4. Select the Table visualize and define any additional filters needed for the report, whether optional or required
5. Validate, and determine whether or not further performance tuning is required
    <img src="../../images/LookerReport.png" width="640" height="480" alt="Looker Report">

## Components
<hr />

The chart below describes the essential building blocks of the Looker platform:

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/9e205b5e-d1cd-47ad-86cb-eead6869cfe3" id="HVeY~aT4pp5Y"></iframe></div>


## Success Criteria
<hr />

- Developed reports deliver the necessary data as defined in the requirements
- Performance of the reports meet any performance standards defined by Global Payments
- Necessary parameters are made available as part of the report

## Risks & Assumptions
<hr />

- Pre-configured reports will be designed to meet performance standards, however performance will vary as users select less restrictive values.
- In the first phase of the project, users will not be able to build their own reports or customize an existing report beyond parameter selection.  Looker's self-service capabilities are being evaluated.
- Personally Identifiable data will be shown and/or secured as outlined by the Data Dictionary, to be provided by Global Payments
- Fields that are not fully visible to users or tokenized will not be searchable or available as parameters
- Data required for reports are what will determine the data that is needed from structures in BigQuery
- In order to meet performance requirements, we will leverage persisted queries within Looker
