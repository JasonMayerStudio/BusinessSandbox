---
title: Date Ranges
status: in testing
context:
  changelog:
    - item:
      - 08/22/2017
      - Susan
      - Email approval
    - item:
      - 08/28/2017
      - Leilani
      - Clarified business logic around custom date ranges

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

In the Reports section, users can adjust date ranges in order to view data based on ranges of time.

All users have ability to adjust date ranges, but how far back they can access the data is dependent upon the version of BusinessView they have.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria:

- Interacting with the date ranges will scope the data on a given page.
- Time ranges:
	- Yesterday
	- Last 7 days
	- Last 30 days
	- Custom date range: MM/DD/YYYY-MM/DD/YYYY


### Business Logic

- Will need to factor in whether user has access to BV Lite or BV Pro.
	- BV Pro users have access to 25 months worth of data.
	- BV Lite users only have access to 3 months worth of data.
- If it is a BV Lite user and they try to run a report beyond the 3 months' data access through the custom date range, then display error message / link to upgrade
- The default time range is "Yesterday".
- The "date" is contextual to the report. For example, the "date" in the Chargeback report pertains to the date the chargeback was received ("Date Received"). The "date" in the Authorized report pertains to the date the transaction was authorized. See individual report stories for more information.
- "Yesterday" is calculated from the system date - 1 day.
- "Last 7 Days" is calculated from the system date - 8 days.
- "Last 30 Days" is calculated from the system date - 31 days.
- Date/time is based on UTC. Utilize javascript timezone offset for dates and time.
- For the custom date range, reference the preferred date format from the user's Profile > Settings
- If user enters only start date for custom date range, then only run a report for that exact date. For ex: if user enters 8/20/2017, report shows data for only 8/20/2017, not 8/20/2017-present.

---

## Assumptions <a name="assumptions"></a>

- No data will be provided for the current day (i.e. today).

---

## Assets <a name="assets"></a>

Refer to top of page (Date Received).

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736476"></iframe>
Link: (https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736476)



---

## Changelog <a name="changelog"></a>

<table>
	<thead>
		<th>Date</th>
		<th>Name</th>
		<th>Note</th>
	</thead>

	<tbody>
	{{#each changelog as |value key|}}
		{{#each value as |childValue childKey|}}
			<tr>
			{{#each childValue as |grandchildValue grandchildKey|}}
				<td>{{grandchildValue}}</td>
			{{/each}}		
			</tr>
		{{/each}}
	{{/each}}
	</tbody>
</table>
