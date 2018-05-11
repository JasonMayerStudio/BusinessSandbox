import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Alert from './Alert.js';

export default () => (
  <Page>
    <h2>Alert</h2>

    <p>Use this component for alerts describing displaying content in an alert box.</p>

    <p>Alerts have no inherent width, and take on the width of their container.</p>

    <ReactSpecimen span={3}>
      <div style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Alert
          alertType="success"
        >
          Chargebacks
        </Alert>
        &nbsp;
        <Alert
          alertType="warning"
        >
          Funded
        </Alert>
        &nbsp;
        <Alert
          alertType="danger"
        >
          Authorized
        </Alert>
        &nbsp;
        <Alert
          alertType="info"
        >
          Declined
        </Alert>
      </div>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>alertType</strong>: type of alert that designates what class type to apply to the alert</li>
      <li><strong>children</strong>: display children in the alert</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li>none</li>
    </ul>

  </Page>
);
