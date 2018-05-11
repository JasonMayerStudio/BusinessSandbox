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
const mockedMerchants = getMerchantsData();
const mockedActiveMerchants = getActiveMerchantsData();

export default () => (
  <Page>
    <h2 className="catalog-h2">GD Hierarchy Selector</h2>

    <p className="catalog-p">Use this component for testing the Hierarchy Selector component. Currently, the component is used to select merchants. Eventually, it will allow users to select corporations, regions, principals, associates, chains, and merchants.</p>

    <ReactSpecimen span={6}>
      <div className="global-filter-bar">
        <GDHierarchySelector
          extraClass="some-class"
          recentSearches={mockedRecentSearches}
          availableMerchants={mockedMerchants}
          savedSelections={mockedFavorites}
        />
      </div>
    </ReactSpecimen>

    {/* <ReactSpecimen span={6}>
      <div className="global-filter-bar">
        <GDHierarchySelector
          extraClass="some-class"
          recentSearches={mockedRecentSearches}
          availableMerchants={mockedMerchants}
        />
      </div>
    </ReactSpecimen>

    <ReactSpecimen span={6}>
      <div className="global-filter-bar">
        <GDHierarchySelector
          extraClass="some-class"
          recentSearches={mockedRecentSearches}
          availableMerchants={mockedMerchants}
          savedSelections={mockedFavorites}
          activeMerchants={mockedActiveMerchants}
        />
      </div>
    </ReactSpecimen> */}

    <h3 className="catalog-h3">Parameters</h3>

    <h4 className="catalog-h4">Required Parameters</h4>
    <ul>
      <li><strong>availableMerchants</strong>: a list of merchants pulled from the backend.</li>
    </ul>

    <h4 className="catalog-h4">Optional Parameters</h4>
    <ul>
      <li><strong>extraClass</strong>:
        an extra style class that will go on the component root element
      </li>
      <li><strong>activeMerchants</strong>: a list of selected merchants.</li>
      <li><strong>recentSearches</strong>: a list of recent searches the user previously searched on.</li>
      <li><strong>savedSelections</strong>: a list of previously saved selections.</li>
    </ul>

  </Page>
);
