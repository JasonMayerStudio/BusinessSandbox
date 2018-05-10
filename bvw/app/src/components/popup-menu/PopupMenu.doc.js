import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import LockIcon from 'Components/icons/LockIcon';
import PopupMenu from './PopupMenu.js';

const popupContent = [
  {
    id: 0,
    name: 'Create Merchant Employee',
  },
  {
    id: 1,
    name: 'Edit Merchant User Data Access',
  },
  {
    id: 2,
    name: 'View Locations',
  },
];

export default () => (
  <Page>
    <h2>PopupMenu</h2>

    <p>Use this component for a hidden contextual menu</p>

    <ReactSpecimen span={3}>
      <div>
        <PopupMenu
          lock
          icon={<LockIcon />}
          position="bottom"
          popupTitle="Permissions"
          popupContent={popupContent}
          trailingText="Permissions"
        />
      </div>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>position</strong>: a string that designates which direction the menu should open to</li>
      <li><strong>popupContent</strong>: an array of objects that will be injected into list items</li>
      <li><strong>trailingText</strong>: text following the icon</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>lock</strong>: a boolean describing the type of icon shown</li>
      <li><strong>icon</strong>: the icon component</li>
      <li><strong>popupTitle</strong>: a string of header text</li>
    </ul>

  </Page>
);
