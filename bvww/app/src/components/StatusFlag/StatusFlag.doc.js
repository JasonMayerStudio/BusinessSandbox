import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import StatusFlag from './StatusFlag.js';

const translations = {
  status: 'Status',
  good: 'Published',
  warn: 'Draft',
  bad: 'Error',
};

export default () => (
  <Page>
    <h2>StatusFlag</h2>

    <p>Use this component to display a status flag with text and a color-coded dot.</p>

    <ReactSpecimen span={3}>
      <div>
        <StatusFlag
          type="good"
          translations={translations}
        />
        <StatusFlag
          type="warn"
          translations={translations}
        />
        <StatusFlag
          type="bad"
          translations={translations}
        />
      </div>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>type</strong>: the type of flag: good, warn, bad</li>
      <li><strong>translations</strong>: the strings to use for the label, and each of the different types</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>extraClass</strong>:
        an extra style class that will go on the component root element
      </li>
    </ul>

  </Page>
);
