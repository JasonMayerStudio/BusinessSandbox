import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Accordion from './accordion.js';

export default () => (
  <Page>
    <p>Use this component for an accordion.</p>

    <ReactSpecimen span={3}>
      <Accordion
        title="LITE"
        subtitle="Additional Products & Services"
        current
      >
        <span>Accordion content.</span>
      </Accordion>
    </ReactSpecimen>

    <h2>Parameters</h2>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>children</strong>: must include content {'< .../>'}</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>title</strong>: the text to use as the primary title of the accordion</li>
      <li><strong>subtitle</strong>{': empty string returns: "{title} includes: "'}</li>
      <li><strong>isOpen</strong>: toggles the Accordion open</li>
      <li><strong>isAddons</strong>: provides specific stylings for Add-Ons Accordions</li>
    </ul>
  </Page>
);
