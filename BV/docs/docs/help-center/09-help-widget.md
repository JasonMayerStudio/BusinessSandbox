---
title: Help Widget
status: in testing
context:
  changelog:
    - item:
      - 09/08/2017
      - GP Team
      - Story Approved
    - item:
      - 10/13/2017
      - Jonathan S.
      - Updated requirements to identify non mvp items.
---

## Description

As an extension of the Help Center, there is a collapsible Help Widget on each page that offers contextual help by linking to relevant articles in the Help Center.

## Acceptance Criteria

1.  The Help Widget Button appears on each page (and drawer) in the bottom right.
2.  The Help Widget Body is expandable and collapsible.
3.  The Help Widget expands upon clicking the icon.
4.  <font style="color:#bcbcbc">The content in the Help Widget offers contextual help by linking to the first three relevant articles in the Help Center.</font><font style="color:#ff0000;font-size:12px"> - not mvp. filler text only</font>
5.  <font style="color:#bcbcbc">
Top three topics are titled “Relevant Topics”</font><font style="color:#ff0000;font-size:12px"> - not mvp. filler text only</font>
6.  <font style="color:#bcbcbc">There is a link to the Help Center in the Help Widget labeled "Go To Help Center" after relevant topics.</font><font style="color:#ff0000;font-size:12px"> - not mvp. filler text only</font>
7.  The Help Widget button should reside 45px from both the bottom edge and 15px from the right edge of the window when scrolling.
8.  The Help widget must display the context of the page in the top section of widget window.


## Assumptions
- SiteCore will have an API to populate the Help Widget.
- Users are not able to move the widget by clicking and  dragging.

## Prototype


[Link](https://cardinalsolutions.invisionapp.com/share/9XCIRY0VU#/screens/249854744)

<iframe width="100%" height="500" src="https://cardinalsolutions.invisionapp.com/share/9XCIRY0VU#/screens/249854744"></iframe>

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
