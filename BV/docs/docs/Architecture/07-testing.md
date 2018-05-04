---
status:
---
## Unit / Functional / Integration Tests

Each Service API and common library module will include a robust set of unit tests that will be executed as part of compilation on the developer&#39;s machine as well as part of the automated build process through Jenkins.  We plan to also implement a pre-commit hook in git that forces code to be compiled and tested prior to a git push to mitigate bad code making it into the repository

## Load Testing

Cardinal will create and automate load testing, but we&#39;ll rely on Global Payments to provide metrics to be used as part of the test. Tests will be setup to run on demand or on schedule but will not happen on each check-in or build since scaling, even for a short amount of time repeatedly, would prove to be costly.

## Vulnerability Testing

Cardinal will test the services for any vulnerabilities as far as accessing endpoints or data without the proper authorization. The Cardinal team will stop short of doing a full penetration and network vulnerability tests as Global Payments has an internal team that will have to verify that it meets their guidelines.

## Risks and Assumptions

- Global Payments will be responsible for penetration and vulnerability testing
- Global Payments will provide baseline numbers for load tests
