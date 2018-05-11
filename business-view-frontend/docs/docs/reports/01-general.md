---
title: Reports
status:
context:
  changelog:
    - item:
      - 10/12/2017
      - Jonathan S.
      - Updated requirements to identify non mvp items.

---

### Description

Merchant users run reports to answer high-level questions about the state of their business. For example, a user might run a chargebacks report to find out how much money they could potentially get back from chargebacks, or what the typical reason codes are for the chargebacks they receive. Some merchants might want to reconcile thier funding with transctions, or with their inventory quantities. In more complex scenarios, merchant might try to use reports to make larger business decisions, such as continuing to carry a particular card line.  


Some merchants, especially owners of small businesses, are not always familiar with payments processing terminology, or what each report might be for. For example, if they sold $400 worth of goods, but only received $390 in funding, it would be possible to run a funding report to figure out why they weren't funded for the $10 transaction. However, if the merchant is not familiar with the reports set up or terminology, they might call into the Customer Service center to ask about the missing transaction.


In this scenario, a Global Payments Customer Service employee might pick up the phone and talk to the merchant. To answer the merchant's question, they would run a funding report for the merchant's data set (using the merchant's MID). They would interpret the report and let the merchant know what happened with that transaction and when they should expect to see the transaction get processed. The easier the reports are to understand and interpret, the fewer calls Customer Service will receive.


So, to summarize, merchants use the reports tool to extract transactions described by pre-defined data fields to get a snapshot of what's going on with the business. Global Payments or ISO employees might run reports on behalf of the merchants they serve to help answer questions when the merchant does not have enough knowledge to interpret the report themselves.

### Who:

All users.

---

## User Story
### Acceptance Criteria:

- Users can user the report tool to generate the following set of 10 pre-defined reports:
1. Authorization
1. Batch
1. Settlements
1. Chargebacks
1. <font style="color:#bcbcbc">EU Transactions (if applicable)</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. <font style="color:#bcbcbc">Funding</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. <font style="color:#bcbcbc">Payment Advices (if applicable)</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. <font style="color:#bcbcbc">Resolution Summary</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. <font style="color:#bcbcbc">Retrievals</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
1. <font style="color:#bcbcbc">Exception Cases</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
- Users have the ability to export any of the reports. (See **Exporting Reports** story)
- <font style="color:#bcbcbc">Users have the ability to schedule reports. (See **Scheduling Reports** story)</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>


### Business Logic
- The data shown in all of the reports **is driven by the global selector**
- The user has the ability to customize the table. Customizations include:
	- <font style="color:#bcbcbc">Drag/drop columns to rearrange</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
	- Hide/show columns
	- Save column views (settings must persist throughout login sessions)
- <font style="color:#bcbcbc">Certain reports are only applicable to certain regions (ex. EU Transactions Report)</font><font style="color:#ff0000;font-size:12px"> - not mvp</font>
---

## Technical Requirements
### Dan:
-  Would be better to have a "Run" or "Apply" button for filter criteria. Otherwise data could be overwhelming.
- Need to know which product (Lite vs. Pro) the user has in order to determine how far back the data will go.
- **Prioritize for MVP:** Width (number of reports) or Depth (filter criteria and column view for 1 report)??
 	- Would be easier to prioritize the reports/filter/columns that are shared across multiple reports

---
## Questions
- What is the shortest period of time that can be defined for a report? The longest?
	- Shortest: the day
	- Longest: up to 2 years
- Is it possible to do a transaction detail on the report, to include more information on a specific transaction? Or is it better to direct users to Search/Transactions?
  - Transaction can include details summary of read-only information.
- Payment Advices

## Assumptions


- These 10 reports will be enough to cover merchants' immediate reporting needs.
- All 10 reports can be generated at all hierarchy levels.

---

## Assets <a name="assets"></a>

[Reports:](https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736477)
<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9VCIIA3UN#/screens/249736477"></iframe>

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
