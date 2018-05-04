---
title: Visualization Development Approach
status: 
---

## Feature Summary
<hr />
After completing an evaluation and demonstration of several products, Looker will be the reporting and visualization platform being integrated with the Business View application.  Specific to visualizations, we will be embedding both dashboard and individual visual as needed within the application.

## Approach
<hr />

A Look is a single perspective of data within a Looker model.  There are two approaches we intend to use to deliver visual content from this platform:

Look visuals
- Looks are not required to include a visualization, but is the where visual are developed.  Where the requirements allow, we will leverage a Looks that provide a single visual element (such as a chart, graph, or gauge).

Look data
- If it is determined that Looker does not have a visual which meets the requirements for a given page or application area, we will leverage a Look to return only data.

Dashboards within Looker are comprised of a collection of Look visuals.  The requirements for any dashboard within the Business View application can be distilled down to individual Looks and developed independently.

## Components
<hr />

These are the currently available visualizations on the Looker platform.

|Category|Type|
|-|-|
|Cartesian|Column, Bar, Scatter, Line, and Area|
|Pie and Donut|Pie, Donut Multiples|
|Progression|Funnel|
|Text and Tables|Single Value, Single Record, Table|
|Maps|Interactive, Regions, Points|


## Success Criteria
<hr />

- Correctly display the required chart
- Support all required data filter elements
- Meet application performance requirements

## Risks & Assumptions
<hr />

- In order to meet performance requirements, we will leverage persisted queries within Looker
