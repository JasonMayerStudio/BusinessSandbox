---
title: Short Codes
status: depreciated
context:
  changelog:
    - item:
      - 08/23/2017
      - GP and Cardinal
      - After discussions and user research, realized that global search is not a valuable feature for BV.
---

<font style="color:#ff0000">
<b>Attn:</b><br/><br/>

This story has not been completely discovered and still needs to be reviewed and updated once it is identified as in scope. As it currently stands, this is expected to be handled within the Global Payments Statements API.
</font>

---

## Description
Search codes allow users to quickly toggle the "Search By" field by typing the search code in the search bar before the item the want to search for.

###Who:
All authenticated users have access to use search codes.

###Why:
Provide the users with shorthand codes to quickly toggle and search the approproate fields without having to click on the interface and search with only the keyboard.

<hr />

## Acceptance Criteria:

1. A user can type a search code in the search bar and then follow it with the information they would like to search for.
2. Search codes can be upper or lower case.
3. The search code that's been entered will automatically toggle the "Search By" dropdown to match.
4. Invalid search codes will display an error to the user and provide options with the available search codes.

### Search Code Options

- trid: Transaction ID
- auth: Authorization Number
- cc: Credit Card Number
- ta: Transaction Amount
- date: Transaction Date
- mid: Merchant ID
- dba: Merchant Name
- ck: Check Number

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
