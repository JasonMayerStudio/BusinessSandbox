---
title: Message Center
status: UAT
context:
  changelog:
    - item:
      - 07/27/2017
      - Srikar and Rob
      - General story broken out to Export, Delete, Print, Pin stories.
    - item:
      - 10/03/2017
      - GP Team
      - Approved user story


---

- [Overview](#overview)
- [User Story](#user-story)
- [Questions](#questions)
- [Assumptions](#assumptions)
- [Assets](#assets)
- [Changelog](#changelog)

---
## Overview <a name="overview"></a>

Global Payments need the ability to provide BusinessView specific notifications and messages to users of the BusinessView application. These will be provided through what will be called the Message Center. The messages in the message center are specific to individual users and are not necessarily considered public in nature.

The message center will contain functionality that aligns with what could be considered standard to a messaging platform. Some of this functionality may include but is not limited to marking message read or unread and deleting messages.

This specific page of the Message Center contains the requirements for the Inbox of the Message Center. For individual message requirements see the [View Message](view-message) page.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. Users have the ability to see all read and unread messages.
1. Users can only see their messages.
1. Users can receive new messages in the message center.
1. Messages are sorted by received date in descending order by default. The most recent message appears first in the message list.
1. Messages should appear differently when they are read or unread.
1. User can select individual, multiple, or all messages.
1. Select All link/button should select all messages currently in the table view.
1. Status and Received Date are sortable columns in both ascending or descending order.
1. Messages can be individually selected as one or many and then be marked as read or unread.
1. Messages can be deleted both individually or in bulk by selecting multiple rows.
1. Message table shows five messages at a time.
1. Message table has pagination both forward and backward.
1. User can see the total number of messages in their inbox.
1. User can click on a row to view the message. (See [View Message](view-message) page).
1. User can view the total number of messages selected.
1. User can deselect individual or all messages.
1. Message body summary is visible in message column.
1. Unread message count is visible on left navigation.
1. Unread message count changes in real time as messages are read or marked unread.
1. Clear link/button exists when selecting rows to clear all selections.

### Message Center table columns

| Column Description | Column Name/Label | Sortable |
| -------------| ------------ | ------------ |
| Select Message | <i>none</i> | No |
| Message Type | TYPE  | No |
| Message Subject | MESSAGE  | No |
| Message Read/Unread Status | READ STATUS  | Yes |
| Message Received Date | RECEIVED | Yes |

### Business Logic

- Date received appears in the user's preferred date format from profile settings
- The Global Selector is not utilized in the Message Center; user cannot manipulate global selector to change the scope of the messages displayed.
- Select All would only select the visible items (ex: only 500 of 1200 items are visible on the page. Select All would only select the 500 visible items.)

### Actions

For better clarity, here is a list of specific actions a user can take within the Message Center.

1. Select Individual rows (one or all)
1. Clear selection from rows
1. Mark Messages as Read and Unread
1. Delete one or all messages
1. Sort by Status
1. Sort by Received Date
1. Page forward and backward through message pages
1. Click on message to view full message
1. Navigate away from message center

---

## Questions <a name="questions"></a>

---

## Assumptions <a name="assumptions"></a>

1. User will not be able to compose, send, print, export, search, filter, or pin messages for MVP.
1. Attachments are not in scope for MVP.
1. Messages can not be forwarded to other recipients.
1. Message center implements translation framework.

---

## Assets <a name="assets"></a>

[Message Center:](https://cardinalsolutions.invisionapp.com/share/45D9WAB9F#/249469090_Message_Center)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/45D9WAB9F#/249469090_Message_Center"></iframe>

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
