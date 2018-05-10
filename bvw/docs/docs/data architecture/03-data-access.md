---
title: Data Access Approach
status: 
---

The ability to have granular control over what data users can access is a crucial need for Global Payments.  This is true for the Business View application, but as we build out the future analytics platform in conjunction with the GP data lake team, we need to establish a flexible yet standardized approach.  In current day Business View, several methods are used to ensure users see only relevant data.  Our intention is to translate the rules and logic to this new solution, and provide a way to abstract the hierarchy and filter criteria out into the administration application.  Then an application like Business View, or others in the future, can be a consumer of the rules rather than the primary repository.

## Feature Summary
<hr />

- Associate a user to an application role, which then correlates to a Model in Looker
- Use the merchant hierarchy to create an initial set of filter criteria to be passed to the Model
- Create attributes within the administration application that can be passed to filters in the Model, further constraining data if required
- We will also have the ability to selectively apply data masking using rules defined as part of the user profile

## Approach
<hr />

At the highest level in the controls over data access, we will correlate an application role to a Looker model.  The intention is that with this first pass, we will limit the overall set of fields available based on the role a user is assigned.  Since this will also facilitate what areas and functionality a user is in granted in the Business View application, we consider it appropriate to determine the set of fields they can see.

Users are associated to some level within the merchant hierarchy, which we can then translate into filter criteria to limit the data users are able to see.  In addition to the hierarchy, we will also provide the ability to create more granular filters as part of the user profile.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/1463af50-2fda-4f73-b7db-41e307e0f5c0" id="GExYlv.x2Boy"></iframe></div>

## Components
<hr />

- We will leverage a combination of the user preferences, Looker models and filter features, and web services in developing this solution

## Success Criteria
<hr />

- Controls over the set of columns users are able to access
- The ability granular controls through the use of filters, managed in the administration application
- Meet the application performance requirements

## Risks & Assumptions
<hr />

- We are building dependencies on the Looker platform to be able to facilitate applying the appropriate restrictions on models and data
- While we've analyzed the structures and objects that are supporting Data Access in the current Business View application, we have not done an exhaustive review of the actual data.  There is a possibility that we need to adjust our approach to account for unique or usual rules for data restrictions
- There are techniques we are able to employ which help with performance, however we reach a point of diminishing returns on the number of filters being applied.  The Google BigQuery engine works very well over large data sets, but since it does not support indexing on specific columns, we may be forced to adjust our approach.
