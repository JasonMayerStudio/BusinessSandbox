---
title: Global Search Bar
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
Search is a global component on every page of the application with the exception of the Help Center. Search does not search all data across the entire Business View application. Instead search will only return existing transaction information in a data table.

### Who:
All authenticated users have access to search.

### Why:
Search exists to provide authenticated users with quick access to transaction data.


## Acceptance Criteria:

1. The default state of search is to only show the search icon in the top navigation.
2. When the search bar gains focus either through tabbing or clicking on the search icon the search bar expands to the entire width of the top navigation.
3. Data being searched can be scoped to focus on specific points of data from the "Search By" dropdown.
4. Search can be set back to it's default state by clicking the "Close Icon".
5. Closing the search will return the user to the page the initiated the search from.

### Default State:

1. The search field placeholder text should say "Search Transactions"
2. The "Search by" dropdown will default to "Transaction ID"

### "Search By" Dropdown Options

The user can select which type of data they wish to search. The available options are:

- Transaction ID (default)
- Authorization Number
- Credit Card Number (ALERT: may be depreciated to avoid PCI non-compliance)
	- Still in, need to collaborate on how exactly to do this.
- Transation Amount
- Transaction Date
- Merchant ID
- Merchant Name
- Check Number
- Terminal ID
- Acquirer Reference Number (ARN)

<hr />

## Assumptions

- A transactions service will be provided to return transaction results.
- Only basic search functionality will be provided.
- Users won't be able to search by Credit Card Number. What about last 4 digits? If not, what other options are there that'll allow us to be compliant?

## Questions
- What are people searching for? Transactions? Will need to test and validate this.

## Notes

- Want to be able to include a wildcard to search by the first four digits or last four digits of the credit card number

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
