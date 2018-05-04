import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Badge from './Badge.js';

export default () => (
  <Page>
    <h2>Badge</h2>

    <p>Use this component for badges describing a data type in a table row or type of data in a drawer component.</p>

    <p>Badges have no inherent width, and take on the width of their container.</p>

    <ReactSpecimen span={3}>
      <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Badge
          badgeType="reports"
        >
          Chargebacks
        </Badge>
        &nbsp;
        <Badge
          badgeType="funded"
        >
          Funded
        </Badge>
        &nbsp;
        <Badge
          badgeType="authorized"
        >
          Authorized
        </Badge>
        &nbsp;
        <Badge
          badgeType="declined"
        >
          Declined
        </Badge>
        &nbsp;
        <Badge
          badgeType="settled"
        >
          Settled
        </Badge>
        &nbsp;
        <Badge
          badgeType="active"
        >
          Active
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
