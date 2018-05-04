import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import NoResults from './NoResults.js';

export default () => (
  <Page>
    <h2>NoResults</h2>

    <p>Use this component to display any styled message that means the current operation returned no results.</p>

    <ReactSpecimen span={3}>
      <NoResults
        messageText="Your search returned no data"
      />
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <NoResults
        messageText="Aucun résultat trouvé"
        extraClass="warning"
      />
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>messageText</strong>: the translated message to be displayed</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>extraClass</strong>:
        an extra style class that will go on the component root element
      </li>
    </ul>

  </Page>
);
