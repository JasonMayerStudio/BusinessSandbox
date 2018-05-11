import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Badge from './Badge.js';

export default () => (
  <Page>
    <h2>InfoBadge</h2>

    <p>
      Use this component for badges describing a data type in a table row or type of data.

      Example usage inside Report Rows as indicators to status of the reports.
    </p>

    <ReactSpecimen span={3}>
      <div>
        <Badge
          badgeType="success"
          info
        >
          New
        </Badge>
        &nbsp;
        <Badge
          badgeType="warning"
          info
        >
          Draft
        </Badge>
      </div>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>badgeType</strong>: type of badge that designates what class type to apply to the badge</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li>none</li>
    </ul>

  </Page>
);
