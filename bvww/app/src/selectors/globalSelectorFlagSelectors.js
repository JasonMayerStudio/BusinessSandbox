import React from 'react';
import { initCommonTranslate } from 'Utils/languages';
import counterpart from 'counterpart';

import Badge from 'Components/badge/Badge.js';

export function getGlobalSelectorString(filterArray) {
  initCommonTranslate();
  if (filterArray.length > 1) {
    return counterpart('globalTranslate.globalSelectorFlag.multipleCorps');
  } else if (filterArray.length === 1) {
    const levels = getFilterStructure();

    const stringParts = [];
    const singleFilter = filterArray[0];
    for (let i = 0; i < levels.length; i += 1) {
      if (singleFilter[levels[i].objName]) {
        let name;
        if (singleFilter[levels[i].objName].length) {
          if (singleFilter[levels[i].objName].length > 1) {
            stringParts.push(counterpart('globalTranslate.globalSelectorFlag.multipleMerchants'));
          } else {
            name = singleFilter[levels[i].objName][0].label;
            const displayName = `${counterpart(`globalTranslate.globalSelectorFlag.${[levels[i].displayName]}`)} ${name}`;
            stringParts.push(displayName);
          }
        } else {
          name = singleFilter[levels[i].objName].label;
          const displayName = `${counterpart(`globalTranslate.globalSelectorFlag.${[levels[i].displayName]}`)} ${name}`;
          stringParts.push(displayName);
        }
      } else {
        break;
      }
    }

    if (stringParts.length < 6) {
      stringParts.push(counterpart('globalTranslate.globalSelectorFlag.all'));
    }

    const finalString = stringParts.join(' > ');
    return finalString;
  } else {
    return counterpart('globalTranslate.globalSelectorFlag.allMerchants');
  }
}
export function getGlobalSelectorElements(filterArray) {
  /* eslint-disable react.js-filename-extension */
  initCommonTranslate();
  if (filterArray.length > 1) {
    const stringPart = counterpart('globalTranslate.globalSelectorFlag.multipleCorps');
    const badges = filterArray.map((filter) => {
      return (
        <Badge
          badgeType="org"
          key={filter.selectedCorp.label}
        >
          {filter.selectedCorp.label}
        </Badge>
      );
    });

    return (
      <span className="selectors-with-badges">
        <span className="global-selector-flag-result">{stringPart}</span>
        <span className="selector-badges">{badges}</span>
      </span>
    );
  } else if (filterArray.length === 1) {
    const levels = getFilterStructure();

    const stringParts = [];
    const singleFilter = filterArray[0];
    for (let i = 0; i < levels.length; i += 1) {
      if (singleFilter[levels[i].objName]) {
        let name;
        if (singleFilter[levels[i].objName].length) {
          if (singleFilter[levels[i].objName].length > 1) {
            stringParts.push(counterpart('globalTranslate.globalSelectorFlag.multipleMerchants'));
          } else {
            name = singleFilter[levels[i].objName][0].label;
            const displayName = `${counterpart(`globalTranslate.globalSelectorFlag.${[levels[i].displayName]}`)} ${name}`;
            stringParts.push(displayName);
          }
        } else {
          name = singleFilter[levels[i].objName].label;
          const displayName = `${counterpart(`globalTranslate.globalSelectorFlag.${[levels[i].displayName]}`)} ${name}`;
          stringParts.push(displayName);
        }
      } else {
        break;
      }
    }

    if (stringParts.length < 6) {
      stringParts.push(counterpart('globalTranslate.globalSelectorFlag.all'));
    }

    const finalString = stringParts.join(' > ');
    return (
      <span className="global-selector-flag-result">{finalString}</span>
    );
  } else {
    return (
      <span className="global-selector-flag-result">{counterpart('globalTranslate.globalSelectorFlag.allMerchants')}</span>
    );
  }
  /* eslint-enable react.js-filename-extension */
}

function getFilterStructure() {
  const filterStructure = [
    {
      displayName: 'Corp',
      pluralDisplayName: 'Corps',
      objName: 'selectedCorp',
    },
    {
      displayName: 'Region',
      pluralDisplayName: 'Regions',
      objName: 'selectedRegion',
    },
    {
      displayName: 'Principal',
      pluralDisplayName: 'Principals',
      objName: 'selectedPrincipal',
    },
    {
      displayName: 'Associate',
      pluralDisplayName: 'Associates',
      objName: 'selectedAssociate',
    },
    {
      displayName: 'Chain',
      pluralDisplayName: 'Chains',
      objName: 'selectedChain',
    },
    {
      displayName: 'Merchant',
      pluralDisplayName: 'Merchants',
      objName: 'selectedMerchants',
      isArray: true,
    },
  ];

  return filterStructure;
}
export default {
  getGlobalSelectorString,
  getGlobalSelectorElements,
};
