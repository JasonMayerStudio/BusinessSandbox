---
title: Language Selection
status: ready for development
context:
  changelog:
    - item:
      - 10/03/2017
      - GP Team
      - Approved user story

---

- [Overview](#overview)
- [User Story](#user-story)
- [Assumptions](#assumptions)
- [Questions](#questions)
- [Assets](#assets)
- [Changelog](#changelog)

---

## Overview <a name="overview"></a>

During the registration process, we need to obtain the preferred language for a registering user to provide a better registration experience. Localized language selection is not the most completely accurate method to obtain these languages. Also, since the user profile has not been created in BusinessView, we have not yet established a preferred language. To fulfill this need, a user is prompted to select a language immediately after they have authenticated their login credentials. If the user selects a different language, the BusinessView application should be rendered in that translation.

---

## User Story <a name="user-story"></a>

### Acceptance Criteria

1. Language selector displays each language in it's specific translation. For Example, English appears as <b>English</b> and Simplified Chinese appears as <b>简体中文</b>.
1. Users can select any available language of their choosing.
1. Users are only allowed to select one language.
1. Users must confirm their selection before continuing the process and saving changes.
1. Upon saving changes, the remainder of the process and site text should be displayed in the chosen language.

### Business logic

- The available languages will be determined by the availability of translated text.

---

## Questions <a name="questions"></a>

---

## Assumptions <a name="assumptions"></a>

- Page text is English by default.
- Language will not be localized by regions.
- BusinessView User Profile has not been created at this point in the process.

---

## Assets <a name="assets"></a>

[Link](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/250660275)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/250660275"></iframe>

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
