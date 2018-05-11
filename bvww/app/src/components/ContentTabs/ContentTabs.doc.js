import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import PrimaryButton from 'Components/Button/PrimaryButton';
import ContentTabs from './ContentTabs';

function sampleClickHandler() {
  alert('You clicked the primary button.'); // eslint-disable-line no-alert
}

export default () => (
  <Page>
    <h2>ContentTabs</h2>

    <p>Use this component for a ContentTab.</p>

    <ReactSpecimen span={6}>
      <div className="main-content--header reports-container--header">
        <h1>Reports</h1>
        <ContentTabs />
        <PrimaryButton
          action={sampleClickHandler}
        >
          Create Custom Report
        </PrimaryButton>
      </div>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>title</strong>: the text displayed in the header of the ContentTab</li>
      <li><strong>description</strong>: the text displayed in the body of the ContentTab</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>buttonText</strong>: the text to use in the primary button of the ContentTab</li>
    </ul>
  </Page>
);
