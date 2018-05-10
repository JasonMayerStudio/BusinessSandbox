---
title: Compose Message
status: depreciated
context:
  changelog:
    - item:
      - 08/17/2017
      - Susan and JD
      - Depriotized for MVP

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Desscription

Both the Global Payments Regional Product Manager and the Global Payments World-Wide Product Manager can compose messages intended for all the users attached to certain hierarchy levels.

When either one of these users compose messages, they need to select which users are going to receive the message. They do this by specifying a hierarchy level they intend the message to be sent to. For example, if either one of these users wanted to send a message to everyone in Canada, they would have to specify a Corp hierarchy level of 56.

### Who:
- Global Payments Employee (permission is available but optional to this role)

## Acceptance Criteria

1. Both the GP RPM and the GP WWPM should be able to compose a message.
2. There should be a character limit restriction on the length of a message.
3. When either user composes a message, they should have the option to select a hierarchy level to determine the recipients of the message.

## Questions
- Should the recipients be at the hierarchy level or at the hierarchy level and all levels below? For example, if the message was sent to a chain level, should it also be sent to all of the users associated only to the MIDs under that chain?
- Should they be allowed to send messages to specific people in the system?
- Is there a need to send messages to people based on their permissioned role instead of their hierarchy level?
- Should the sender of the message be the person's name or something more generic like "Headquarters"?

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
