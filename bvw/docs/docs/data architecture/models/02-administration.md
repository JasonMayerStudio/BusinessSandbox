---
title: Administration Data Model
status:

---

## Feature Summary
<hr />

In order to separate the Business View application from the process of administering and managing users, we are developing a stand-alone application and database.  The administration database will service only the Business View application once completed, but the intention will be to allow central management of users for use in another other application in the Global Payments ecosystem.

A key point of clarity for this administration application and supporting database is that it is not intended to handle Authentication, and instead provide the context for user Authorization.  This is illustrated and explained further here.

## Approach
<hr />

Using the data model underneath the current Business View application, we have broken down the objects into the following conceptual areas:

### User Structures
Users
- As users, both internal and external, are being enabled to access different applications, they will reside in these structures.  This database will serve as the primary repository for user profile data, including global preferences and settings.

Organizations
- The merchant hierarchy is created in another system, but it is within these structures that we allow the association of users to a hierarchy.  Since this is a near ubiquitous concept at Global Payments, we believe it will be heavily utilized in this project and future applications.

### Application Structures
Application Roles
- For each application, we will have a set of permissions that can be bundled into a role.  Then, through these structures, we will associate users to roles and make that available to be sent to the destination application.  These structures will be kept sync with application permissions and configuration.

Application Preferences
- Objects and data here will enable administrators and support staff to be able to make near real-time adjustments to how users see and interact with the application.  It is an extension of the Application Roles and these structures will also be kept sync with application features.

Restrictions
- To create functionality similar to the current Business View application, data in this area will define any unique constraints not already covered by application preferences.  These could be time-based restrictions or allowed/blocked locations.

### Data Access Structures
Hierarchy
- Expanding on Organizations, this data will associate users to other organizations that they will have access to view.  The intention is to allow for a user to be able to be associated to a single organization, yet have visibility to many if necessary.

Data Access Roles
- The implementation of how we are controlling Data Access is explained further, but the data we will store here will allow us to synchronize the association of Application Roles to Data Access Roles so that we can get a single view of what users are able to see across applications

Data Filters
- One of the more critical areas of the application database will be this set of structures.  We need to be able to provide the ability for administrators and support staff to apply granular filtering rules, and potentially setup data masking on columns.  This data will be stored here and sent along or synchronized as required.



<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/00e8352c-19c0-4648-b219-fbf5a476f917" id="64eYw-8VLOGE"></iframe></div>

## Components
<hr />
Developing with SQL, we will leverage all available structures and features of the MySQL platform to meet the needs of the application.

## Success Criteria
<hr />

- Ability to successfully administer user profiles and attributes as defined by the application requirements
- Synchronize and store Business View and Looker Model information to allow for selection and association to a user
- Validate that changes made in the application and data are propagated as changes are made or users are authenticated into Business View
- Meet the application performance requirements

## Risks & Assumptions
<hr />

- While we will use the existing application architecture for perspective, the process to migrate existing data will be complex
- MySQL is the only production ready platform offering on the Google Cloud Platform and may have some feature distinctions which will make migrating to another SQL platform challenging.  We will aim to avoid creating dependencies on MySQL where ever possible, but may not be able to avoid in all areas.
- The conceptual areas are not intended to be an entity-relationship diagram, and will be adjusted as needed during the development process
- All database objects will conform to a standard naming convention to be defined
