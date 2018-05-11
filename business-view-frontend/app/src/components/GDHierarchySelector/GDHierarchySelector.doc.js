import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import {
  getRecentSearchesData,
  getMerchantsData,
  getFavoritesData,
  getActiveMerchantsData,
} from 'Helpers/testHelpers/testHierarchyMocks';
import GDHierarchySelector from './GDHierarchySelector';

import '../../containers/Main/Main.scss';

const mockedRecentSearches = getRecentSearchesData();
const mockedFavorites = getFavoritesData();
const mockedAvailableItems = getMerchantsData();
const mockedActiveItems = getActiveMerchantsData();

export default () => (
  <Page>
    <h2>GD Hierarchy Selector</h2>

    <p>Use this component for testing the Hierarchy Selector component. Currently, the component is used to select items. Eventually, it will allow users to select corporations, regions, principals, associates, chains, and merchants.</p>

    <ReactSpecimen span={6}>
      <div className="global-filter-bar">
        <GDHierarchySelector
          extraClass="some-class"
          recentSearches={mockedRecentSearches}
          availableItems={mockedAvailableItems}
          savedSelections={mockedFavorites}
          itemNumberColumnName="merchantNumber"
          itemNameColumnName="businessName"
        />
      </div>
    </ReactSpecimen>

    {/* <ReactSpecimen span={6}>
      <div className="global-filter-bar">
        <GDHierarchySelector
          extraClass="some-class"
          recentSearches={mockedRecentSearches}
          availableItems={mockedAvailableItems}
          itemNumberColumnName="merchantNumber"
          itemNameColumnName="businessName"
        />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={6}>
      <div className="global-filter-bar">
        <GDHierarchySelector
          extraClass="some-class"
          recentSearches={mockedRecentSearches}
          availableItems={mockedAvailableItems}
          savedSelections={mockedFavorites}
          activeItems={mockedActiveItems}
          itemNumberColumnName="merchantNumber"
          itemNameColumnName="businessName"
        />
      </div>
    </ReactSpecimen> */}

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>availableItems</strong>: A list of items pulled from the backend.</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>extraClass</strong>:
        An extra style class that will go on the component root element.
      </li>
      <li><strong>activeItems</strong>: A list of selected items.</li>
      <li><strong>recentSearches</strong>: A list of recent searches the user previously searched on.</li>
      <li><strong>savedSelections</strong>: A list of previously saved selections.</li>
      <li><strong>translations</strong>: A list of translated words.</li>
    </ul>

  </Page>
);
