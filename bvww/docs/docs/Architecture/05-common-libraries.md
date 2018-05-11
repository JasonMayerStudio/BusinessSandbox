---
status:
---
## Overview

In addition to compartmentalizing the services we will also create a core set of common libraries that can be maintained in a private artifactory instance. Abstracting common functionality reduces the amount of repeated code which limits places a defect can occur and provides consistency across service modules.

## Details

The list of common libraries will grow as we begin to write code, but examples of common libraries could include items such as:

- Caching
- Currency Conversion
- Session lookup
- Permissions / Authorization

Much like the API / Services libraries, each common library will contain its own suite of unit tests that will automatically execute when built on the developer laptop as well as part of the automated build process [5.1.1].

## Risks and Assumptions

- All common libraries will be built for the Business View application primarily with generic reuse by external applications in mind but not directly supported
