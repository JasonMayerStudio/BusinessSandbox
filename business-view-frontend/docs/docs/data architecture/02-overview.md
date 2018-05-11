---
title: Overview
status:
---

## Feature Summary

We have two primary needs pertaining to data within Business View.  First, there are the relational databases that are required to support the applications.  While we're using a new technology platform, our methodology and approach are standardized and will be outlined in more detail in the next section.  The second is that we need to determine how best to leverage the data lake technology being made available in Google's BigQuery.  This part of the Business View implementation will require collaboration and iterative feedback between the Cardinal team and the Global Payments team responsible for the data lake.

Relative to the Looker platform, the team at Looker will be responsible for the initial environment setup and configuration.  As we build out models, reports, and visualizations, their team will be available to provide support and recommendations.

## Approach
<hr />

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://www.lucidchart.com/documents/embeddedchart/3556a628-fda8-49e9-ab76-9909ac1e99fb" id="_dfYeCAd2C2V"></iframe></div>

## Components
<hr />

At present, MySQL is the only production-ready database system available on CloudSQL.

## Success Criteria
<hr />

- Ensure that middle tier services are able to successfully access necessary data through stored procedures
- Ensure that the relational data structures are appropriately tuned to support performance requirements (determined by page load times, etc.)

## Risks & Assumptions
<hr />

- CloudSQL has a Service Level Objective (SLO) of 99.95%, which is below GP standards
- BigQuery has a Service Level Objective (SLO) of >= 99.9% (based on Monthly Update Percentage), which is below GP standards
- Required data elements are being derived from the fields and metrics used Business View reports and dashboards
- As it pertains to reporting, the GP data lake team will be responsible for developing BigQuery structures, while Cardinal will be responsible for Looker models based on those structures
