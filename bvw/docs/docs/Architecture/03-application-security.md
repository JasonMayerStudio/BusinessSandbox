---
status: 
---
## Overview

Authentication and authorization will be distinct functions in the Business View application.  Authentication will be done through a yet to be determined Identity Provider that will adhere to the OpenId Connect specification, while authorization, roles, and permissions will be managed within the application databases.  The process for both authentication and authorization are described below.

## Authentication

Currently, Global payments is unsure of who will be the identity provider, but by building to the OpenId Connect specification we will be able to build a generic process that will be able to be adapted to whichever provider is selected. [Figure 2: Authentication process below shows the process of how the front-end client will authenticate and receive a JSON Web Token (JWT) to be used as a bearer token in subsequent requests.
<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/0033d5db-0030-4037-950d-2b7600d216b2" id="2tiYW_dR.luX"></iframe></div>

_Figure 2:  Authentication process _


## Authorization

Once a front-end client has received a JWT, they will need to pass it as an _Authentication_ header to each request where it will be immediately intercepted and validated.  From here any number of processes can take place.  One flow can be to look roles for the user in a memcache instance inside of the same GCP.  If the key is found we&#39;ll use the roles found in cache, otherwise we&#39;ll look up the roles and permissions and cache them for the next call.  This approach allows a user&#39;s roles to change and the cache to be flushed by a different service as well as quick access to the roles without hitting a database on every request.  Figure 3 shows this process as well as error codes returned at each step.
<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/f39bf0c1-db2c-4a97-a154-48bd6e0772af" id="IuiYSFFA3m4g"></iframe></div>

_Figure 3:  Authorization process flow_

## Risks and Assumptions

- Identity provider not chosen
- User roles / permissions will be stored and managed in an application database external from the selected identity provider
