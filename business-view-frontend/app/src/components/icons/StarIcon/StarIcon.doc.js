import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import StarIcon from 'Components/icons/StarIcon';
import AnimatedStarIcon from 'Components/icons/StarIcon/Animate';

import './StarIcon.scss';

const styles = {
  color: '#f5a623',
};

export default () => (
  <Page>
    <h2 className="catalog-h2">Icon</h2>

    <p>Use this component to display an inline SVG icon. The icon name should be passed in as a prop to its respected component.</p>

    <ReactSpecimen span={3}>
      <div style={styles}>
        <h3>Star Icon</h3>
        <StarIcon />
        <h3>Star Icon Filled</h3>
        <StarIcon filled />
        <h3>Star Icon Inline</h3>
        <StarIcon inline />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <div style={styles}>
        <h3>Animate Loading Star Icon</h3>
        <div className="animatedStarIcon-wrapper">
          <AnimatedStarIcon animate />
        </div>
      </div>
    </ReactSpecimen>
  </Page>
);
