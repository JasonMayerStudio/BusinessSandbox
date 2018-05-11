---
title: View Message
status: UAT
context:
  changelog:
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

Since the Message Center inbox only contains a summary of the message content. A detail view needs to be provided to display the full text of the message body. The view message requirements outline what is expected when displaying messages and the behavior of message management for BusinessView users.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria
1. User can view the following information:
  - Date received
  - Message Type
  - Full Message body content
1. User can return to the Message Center.
1. Users can delete message from detail view.
1. Messages can be marked as unread from detail view.
1. User can mark messages as read.
1. Messages are read-only.
1. Deleting message from detail view immediately closes message view and returns to the message center inbox.
1. If deleting a message from within detail view, the return to the message center should not display the recently deleted message.
1. Marking message as unread does not automatically return to message center inbox.
1. If marking a message as unread from within detail view, the return to the message center should  still display current message as unread. Unread count should accurately reflect this unread message as well.

### Business Logic

- Delete is a soft delete. This means the message is hidden from view but still resides in the database.
- When viewing a message, mark message as read unless the user selects the "Mark As Unread" button/link.

### Actions

1. Mark message a unread
1. Delete message
1. Return to message center.

---

## Questions <a name="questions"></a>

---

## Assumptions <a name="assumptions"></a>

1. Internationalization of messages will be handled same as system emails. Assumption that GP / message composer will write in the intended language
1. Attachments are not in scope for MVP.
1. User will not be able to print or export messages for MVP.
1. Messages can not be forwarded to other recipients.

---

## Assets <a name="assets"></a>

[View Message:](https://cardinalsolutions.invisionapp.com/share/BAD9WM88Q#/screens/249469086)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/BAD9WM88Q#/screens/249469086"></iframe>

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
