---
title: Application Data Model
status:

---

## Feature Summary
<hr />

- Establish an Application database that contains only the objects necessary to support the Business View application
- Leverage stored procedures to control CRUD operations, accessed through web services
- Deploy the solution to the CloudSQL MySQL database platform
- Optimize as necessary to support application and website performance requirements with features like indexing and in-memory objects
- Develop a one-time migration plan to load data from the current Business View application

## Approach
<hr />

Using the data model underneath the current Business View application, we have broken down the objects into the following conceptual areas:
### Site Structures
Modules & Navigation
- These objects store the available areas in the application that users would be able to access and the navigational hierarchy on how they relate to each other.

Pages
- Metadata for each page would reside within these objects, along with any data that may need to be handed off to the application at the time of page rendering.  Our intention would not be to store the entire page definition within these objects, but it is reasonable to have dynamic page elements be sourced from this area

Content
- The objects needed to house the written content for each page in the application, including being able to support localized versions of each entry.

### User Structures
Organizations
- Both internal and external users will have an association to the merchant hierarchy at some level.  The Business View application will not be the source for this data, but will need to be able to store and access it regularly.  As users are authenticated and authorized, hierarchy data will be persisted here.

Users
- Similar to how Business View will be a consumer of hierarchy data, the application will also consume and persist user data.  Business View will not be the source of user profile or configuration data.  Application features and auditing requirements will determine what data elements will be required to be stored, but as users authenticate, authorize, and access Business View, this data will be updated or overwritten through the web services.

Attachments
- Any metadata about what content users may need to upload will be stored here.  Our intention would be to use the Google Storage service to house the actual files and create an association with the user to that file within these objects.

### Reporting Structures
Reports
- Looker is the reporting application we will be using inside Business View, however we will store the metadata about reports and visualizations within these objects.  Using web services, we will keep in sync with the deployed assets on the Looker platform spo that they can be referenced elsewhere within the application.

Report Schedules
- The Looker platform is able to handle report subscriptions and the configuration of scheduled report delivery, and this is data we will synchronize with the application database.  This also allows us to enable users to manage their subscriptions outside of Looker, or expand to another platform in the future.

Data Access & Models
- Objects for this area are likely the most important within the Business View application.  Here we will create the association of application roles to the data models they will use for reporting.  Discussed in more detail within the Looker section, the model will be how we provide only the necessary set of data elements for users to see along with the required set of data filters.  As new models are developed or new roles added to the application, the association between the two will be managed here.

### Additional Structures
Enrollment
- As new users are given access to the Business View application, they will be initially stored here.  Since this application will not be the primary repository for user data, we will keep minimally necessary data here so that when a new user logs in for the first time, these objects will provide the initial details required for them to complete the onboarding process.

Marketing
- Users of the Business View application will have the opportunity to use and/or purchase other products from Global Payments.  These objects will be designed to hold marketing opportunity data that users will be optionally shown throughout the application.

Auditing
- Any required auditing data will be stored within these structures.

History
- Any changes to application data will have the previous version stored within these structures.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/f0be6b14-4cf7-4a4c-b296-1791371a560f" id="C4eYQSuIRAHq"></iframe></div>

## Components
<hr />
Developing with SQL, we will leverage all available structures and features of the MySQL platform to meet the needs of the application.

## Success Criteria
<hr />

- Allow users to interact with the Business View application
- Meet the application performance requirements
- Provide sufficient auditing and historical data without negative impact to application performance


## Risks & Assumptions
<hr />

- While we will use the existing application architecture for perspective, the process to migrate existing data will be complex
- MySQL is the only production ready platform offering on the Google Cloud Platform and may have some feature distinctions which will make migrating to another SQL platform challenging.  We will aim to avoid creating dependencies on MySQL where ever possible, but may not be able to avoid in all areas.
- The conceptual areas are not intended to be an entity-relationship diagram, and will be adjusted as needed during the development process
- All database objects will conform to a standard naming convention to be defined
