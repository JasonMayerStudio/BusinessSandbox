import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import HelpWidget from './HelpWidget.js';

export default () => (
  <Page>
    <h2>HelpWidget</h2>

    <p>Use this component for ...</p>

    <ReactSpecimen span={3}>
      <HelpWidget
        extraClass="some-class"
      />
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>someProp</strong>: some description</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>extraClass</strong>:
        an extra style class that will go on the component root element
      </li>
      <li><strong>otherProp</strong>: some other description</li>
    </ul>

  </Page>
);
