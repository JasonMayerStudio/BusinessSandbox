import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import StarIcon from 'Components/icons/StarIcon';

export default () => (
  <Page>
    <h2>Icon</h2>

    <p>Use this component to display an inline SVG icon. The icon name should be passed in as a prop to its respected component.</p>

    <ReactSpecimen span={3}>
      <div>
        <h3>Star Icon</h3>
        <StarIcon />
        <h3>Star Icon Filled</h3>
        <StarIcon filled />
        <h3>Star Icon Inline</h3>
        <StarIcon inline />
      </div>
    </ReactSpecimen>
  </Page>
);
