---
title: Internationalization
status: UAT
context:
  changelog:
    - item:
      - 08/09/2017
      - GP Team
      - Approved user story
---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

### Description
Users need the ability to select the language that they wish to view Business View.

### Who:
All users.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. If user has manually selected their language, then that is the language the user should see in BusinessView.

2. If user has not manually selected their language, then:
  - Either browser detection OR inherited by user that created them (ex: If Merchant Admin's selected language is French Canadian, then the user that they create will see French Canadian by default) -- (to be confirmed)
  - English as fallback

3. Once signed in, the user should be able to go to Profile > Settings and change the language from the following list: Simplified Chinese, Traditional Chinese, Queen's English, English, French Canadian.


## Business logic

1. Examples of text in Business View that should be internationalized:

  - Table columns
  - Form labels
  - Error messages
  - Navigation
  - permissions
  - Terms & Conditions (user story removed from MVP)

2. Examples of text in Business View that should NOT be internationalized:
  - Data pulled in via Data Lake
  - URLs (per 3/31 meeting notes)


3. Cardinal is responsible for creating the framework to switch and display the languages listed above for MVP. Global Payments is responsible for translating and maintaining the text. Likely post MVP.

---

## Assumptions <a name="assumptions"></a>
1. The strategy around right-left languages:
  - UI should be the same across all languages
  - Each region has some of their own nuances, but look and feel should look and feel consistent.

2. Language on the login screen will be controlled by the IDP.

3. Language in the registration screens are controlled by the language selection in the registration process.


---

## Questions <a name="questions"></a>



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
