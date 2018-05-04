---
title: Manage Logo
status: depreciated
context:
  changelog:
    - item:
      - 06/15/2017
      - Susan Ripley
      - Logos will only appear in the statements and will be handled by JD's team. There will be no UI to change the acquirer name under the Business View logo; handled on the backend. See Display Acquirer Name story.

---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope.
</font>

---

## Description

Acquirer versions of BusinessView can be co-branded with the Business View logo and the Acquirer. The Acquirer branding will appear in two places:


* The Acquirer name (text) will appear beneath the global Business View logo
* The Acquirer logo (image file) will appear on the statements -- Whether this will happen in BV

Permissioned users need the ability to edit the ISO text.

### Who:
- GP Admin (this permission is available but optional to this role)
- Acquirer User (this permission is available but optional to this role)
- Acquirer Admin (this permission is available but optional to this role)

## Acceptance Criteria

1. Users are able to upload a logo.
2. Users are able to delete a logo.


## Business Logic
- Acquirer logo is not required.
	- When a logo is not available, display text instead (need to confirm)
	- If user deletes the logo and does not replace it, then display text instead (need to confirm)
- When a user uploads a new logo:
	- If there is no existing logo, then add this new logo
	- If there is an existing logo, then replace it with this logo
- When a user deletes a logo and does not replace it with another one, display text instead
- Acquirer logo will appear in two places:
	- Globally, next to the BusinessView logo
	- In billing statements (is this the downloadable file?)
- The system should keep record of Who uploaded the last logo, but not a history of all logos. User should not be able to browse through old logos
- Client-provided specs (we need to review):
	- Accepted file formats: GIF, JPG, PNG, BPM, TIFF
	- The size of the logo should be 200px wide (MAX) with a flexible height to maintain logo ratio.
	- System should display an error message if user tries to upload an image that does not fit within the predefined specs

- Logo Hierarchy:

![Logo Hierarchy](https://www.lucidchart.com/publicSegments/view/6f0661a7-c916-4992-91bf-3acf3c96bafc/image.jpeg)

To determine which logo to display to the User, we want to start at the level closest to the User and then work our way up to the Corporate (BusinessView) level. Examples:
* If there are two levels of Acquirers, then display the Acquirer-2 logo.
* If there is no logo at Acquirer-2, then display the Acquirer-1 logo.
* If there is no logo at Acquirer-1, then display only the Business View logo + Acquirer name (no text) -- need to confirm


## Questions
See above.

## Artifacts
![Logo taskflow](https://www.lucidchart.com/publicSegments/view/d39d6eab-127c-4f1f-b871-27d2609756ba/image.jpeg)


---

## Changelog

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
