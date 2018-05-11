import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import {
  getRecentSearchesData,
  getMerchantsData,
} from 'Helpers/testHelpers/testHierarchyMocks';
import GDHierarchySelector from './GDHierarchySelector';

import '../../containers/Main/Main.scss';

const mockedRecentSearchs = getRecentSearchesData();
const emptyMockedFavorites = [];
const mockedAvailableItems = getMerchantsData();

export default () => (
  <Page>
    <h2>GD Hierarchy Structure with Empty Saved Selections Scenario</h2>

    <ReactSpecimen span={6}>
      <div className="global-filter-bar">
        <GDHierarchySelector
          extraClass="some-class"
          recentSearches={mockedRecentSearchs}
          availableItems={mockedAvailableItems}
          savedSelections={emptyMockedFavorites}
          itemNumberColumnName="merchantNumber"
          itemNameColumnName="businessName"
        />
      </div>
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
