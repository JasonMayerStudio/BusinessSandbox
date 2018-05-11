import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Card from './card.js';

function sampleClickHandler() {
  alert('You clicked the primary button.'); // eslint-disable-line no-alert
}

export default () => (
  <Page>
    <h2>Card</h2>

    <p>Use this component for a card.</p>

    <ReactSpecimen span={3}>
      <Card
        title="Authorization Reports"
        description="Contains information on authorized transactions from a specified period of time."
        primaryAction={sampleClickHandler}
        primaryActionText="View Report"
      />
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>title</strong>: the text displayed in the header of the card</li>
      <li><strong>description</strong>: the text displayed in the body of the card</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>buttonText</strong>: the text to use in the primary button of the card</li>
    </ul>
  </Page>
);
