---
title: Notification Widget
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
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---
## Overview <a name="overview"></a>

To ensure users are very well aware of when message arrive, a constant notification needs to be present from every view of BusinessView that informs the user that they have unread messages in the message center.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. User can open the notification widget from the main navigation that resides at the top of the page.
1. User can view a list of the five most recent, unread messages in the widget.
1. For each message, user can view Message Type, Message Body summary, and received date.
1. User can select an individual message to go to that message in the message center.
1. User can go to the Message Center from this widget by clicking the "View All" link.
1. User can see a total count of unread messages.


### Business Logic

- Unread messages should appear with the most recent message at the top.
- Users should only be able to see messages that reside in their inbox.
- Notification Widget is not sortable.

### Actions

- Click on Notification Widget for details
- Click on single message
- Navigate to Message Center

---

## Questions
1. How many messages appear in the widget?
  - Five most recent, unread message.
1. Do read messages appear in the widget?
  - Only unread messages will appear in the widget.

---

## Assumptions

1. Internationalization of messages will be handled same as system emails. Assumption that GP / message composer will write in the intended language
1. Attachments are not in scope for MVP.
1. Global selector does not apply to Notification Widget

---

## Assets <a name="assets"></a>

[Notification Widget:](https://cardinalsolutions.invisionapp.com/share/N8D9W9LCJ#/249469091_Merchant_-_Admin_Home_-_Notifications_Open)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/N8D9W9LCJ#/249469091_Merchant_-_Admin_Home_-_Notifications_Open"></iframe>

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
