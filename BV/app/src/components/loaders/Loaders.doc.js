import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import BallSyncLoader from 'Components/loaders/BallSyncLoader';

export default () => (
  <Page>
    <h2>Loaders</h2>

    <p>Use these components to signify that data is still loading in a given page or component.</p>

    <ReactSpecimen span={3}>
      <div>
        <BallSyncLoader />
      </div>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <h4>Optional Parameters</h4>
  </Page>
);
