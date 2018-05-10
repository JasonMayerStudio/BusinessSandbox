import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { MemoryRouter } from 'react-router-dom';

import MessageIcon from 'Components/icons/MessageIcon';
import NavItem from './NavItem.js';
import '../../containers/Navigation/Navigation.scss';

export default () => (
  <Page>
    <h2>NavItem</h2>

    <p>Use this component for ...</p>

    <ReactSpecimen span={3}>
      <MemoryRouter>
        <ul className="vertical-nav">
          <NavItem
            to="/#/NavItem"
            icon={<MessageIcon />}
            navLabel="Messages"
            hasNotification
            returnNotificationCount={<span className="message-count">4</span>}
          />
        </ul>
      </MemoryRouter>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>route</strong>: page route that NavItem directs to on click</li>
      <li><strong>icon</strong>: icon component that accompanies nav label and provides context to page</li>
      <li><strong>navLabel</strong>: string that describes where the NavItem will direct to upon click</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>triggerSubNav</strong>: if there is a secondary navigation, a function to trigger transition to this view</li>
      <li><strong>exact</strong>: when true, the active class/style will only be applied if the location is matched exactly</li>
      <li><strong>navActionClasses</strong>: class name for navigation anchor tag</li>
      <li><strong>activeClassName</strong>: class name for the currently active NavItem</li>
      <li><strong>iconClasses</strong>: class name for wrapper of NavItem icon</li>
      <li><strong>labelClasses</strong>: class name for label of NavItem</li>
      <li><strong>hasNotification</strong>: when true, an icon is shown with a count of notifications</li>
      <li><strong>returnNotificationCount</strong>: when true, an element is returned on an expanded NavItem including a count of notifications</li>
      <li><strong>returnCollapsedNotification</strong>: when true, an element is returned on a collapsed NavItem without a count of notifications</li>
      <li><strong>navItemKey</strong>: used if an array of items are mapped into NavItem components</li>
    </ul>

  </Page>
);
