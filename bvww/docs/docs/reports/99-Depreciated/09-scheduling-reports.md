---
title: Scheduling Reports
status: depreciated
context:
  changelog:
    - item:

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions & Assumptions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>
### Description
When viewing a report, a user can schedule a notification that would direct them to that report at regular intervals. For example, a user may want to see a funding report and a settlement report at the end of every month to reconcile transactions. That user could use the scheduling feature to specify what filters and report setup they would like to see and the recurring date they would like to recceive the notification.

### Who:
All users.

---

## User Story <a name="user-story"></a>
### Acceptance Criteria

1. Users can set a date on which they would like to receive a monthly notification for the report they currently have up.
2. The scheduling feature might remember the format of the report (see open question).
3. When the scheduled date arrives, the user receives a message informing them that their report is ready to view.

---

## Questions <a name="questions"></a>
- Given that there is no longer a concept of a time-lag in report generation as data is presented in a live view, is this still a useful feature?
- Is 'scheduling' the correct term for this feature?
- Should the scheduling feature remember the filters and formats consistent with what the report looked like when it was scheduled? Or should it keep the most recent filters and formats? Or is there a 'Save' feature?
- How much granularity is needed for when users can schedule reports? Once a month, once a week, every other Tuesday?

### Dan:

1. When scheduling a report can a user set parameters?
2. The saved reports will be the data only and not the visual?  (correct?)
3. Can a report be scheduled to run on multiple intervals (daily & monthly on a single report)
4. I’d caution against getting too granular with the times to run – especially with the “monthly” unless you’re prepared to answer a lot of question:
  - Can I run on the first Monday of every month? (last Friday, etc)
  - If I select to run on the 31 and we’re in Feb does it ever actually run?
  - Just know that there will be a bunch of discussion when this comes up – not that we shouldn’t do it
  - For an example of how complex scheduling CAN be set up a recurring meeting in outlook and see what is available.  I don’t think we need to go that in depth, but we will eventually need to have a firm set of available options and how to handle the extra cases
5. The granularity of “time” shouldn’t be too small as we don’t want to promise delivery at 2:00 every time. Depending on system load, length of time to generate reports etc, a report scheduled to run may not be available for some time after the scheduled start
6. How long will scheduled reports live for?  Will they be available indefinitely?
7. We haven’t talked much (at all?) about notifications  - so I have a few questions in here around that as it seems like  we’re proposing the scheduled reports show up in the notifications bar:
  - Can notification be cleared / deleted.  If so can the report be deleted?  (I’m trying to not have a bunch of files saved taking up storage / money when there is no way to get back to them)


## Assumptions
- The scheduling feature doesn't actually generate reports, it just periodically directs users to a saved view of a report.

---

## Assets <a name="assets"></a>
[Scheduling:](https://cardinalsolutions.invisionapp.com/share/M5CVPD32V#/246551933_Authorizations_Report_Schedule_Day)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/M5CVPD32V#/246551933_Authorizations_Report_Schedule_Day"></iframe>

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
