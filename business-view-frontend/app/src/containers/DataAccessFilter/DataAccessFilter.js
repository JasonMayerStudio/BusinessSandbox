import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import counterpart from 'counterpart';

import PrimaryButton from 'Components/Button/PrimaryButton';
import CloseIcon from 'Components/icons/CloseIcon';

import { initCommonTranslate } from 'Utils/languages';

import OrgSelectorWidget from '../OrgSelectorWidget';

import './DataAccessFilter.scss';

class DataAccessFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: this.props.isActive,
    };

    initCommonTranslate();
    registerTranslations();
  }

  render() {
    const chainClass = classNames({
      'data-access-filter-chain-horizontal': this.props.direction === 'horizontal',
      'data-access-filter-chain-vertical': this.props.direction !== 'horizontal',
      'hide-all-but-first': this.props.showFirstOnly,
    });

    let globalSelectorString = '';
    let parseGlobalSelectorString;
    const widgets = this.props.filterChain.map((column) => {
      let selectedTerm;
      if (column.currentSelectedItem) {
        if (Array.isArray(column.currentSelectedItem)) {
          const numExtraMerchants = column.currentSelectedItem.length - 1;
          selectedTerm = column.currentSelectedItem[0].label;

          if (numExtraMerchants) {
            selectedTerm += ` + ${numExtraMerchants} ${counterpart('dataAccessFilter.more')}`;
          }
        } else {
          selectedTerm = column.currentSelectedItem.label;
        }
      }
      selectedTerm = selectedTerm || `${counterpart('dataAccessFilter.all')}`;

      globalSelectorString += `${selectedTerm} > `;

      return (
        <OrgSelectorWidget
          key={column.pluralName}
          forceClose={column.forceClose}
          dataList={column.currentData}
          handleSelect={column.currentHandleSelect}
          onChange={column.currentOnChange}
          placeholder={`${counterpart('globalTranslate.forms.search')} ${counterpart(`globalTranslate.common.${column.singularName.toLowerCase()}`)}s`}
          searchTerm={column.currentSearchTerm}
          selectedTerm={selectedTerm}
          labelText={column.singularName}
        />
      );
    });

    if (globalSelectorString.indexOf('All') >= 0) {
      parseGlobalSelectorString = globalSelectorString.substring(0, globalSelectorString.indexOf('All'));
    } else {
      parseGlobalSelectorString = globalSelectorString;
    }

    return (
      <div className={`${chainClass} global-selector-accordion`}>
        <div
          role="button"
          tabIndex="0"
          className="global-selector-accordion-header"
          onClick={() => this.props.selectActive(this.props.indexId)}
        >
          <span className="global-selector-string">
            {parseGlobalSelectorString.slice(0, -3)}
          </span>
          {this.state.expanded
            ? <div>
              {this.props.onDelete && <div className="delete-access show-l">
                <PrimaryButton
                  action={this.props.onDelete}
                  icon={CloseIcon}
                  iconDirection="left"
                >
                  <div className="show-l hidden-xs">
                    Remove Filter
                  </div>
                </PrimaryButton>
              </div>}
            </div>
            : ''
          }
        </div>
        {this.state.expanded
          ? <div className="global-selector-widgets show-l" id="global-selector-widgets-desktop">
            {widgets}
          </div>
          : ''
        }

        <div className="global-selector-widgets hidden-l" id="global-selector-widgets-mobile">
          {widgets}
        </div>

        {this.props.onDelete && <div className="delete-access hidden-l">
          <PrimaryButton
            action={this.props.onDelete}
          >
            <CloseIcon />
          </PrimaryButton>
        </div>}
      </div>
    );
  }
}

DataAccessFilter.propTypes = {
  filterChain: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
  direction: PropTypes.string,
  showFirstOnly: PropTypes.bool,
  indexId: PropTypes.number,
  isActive: PropTypes.bool,
  selectActive: PropTypes.func,
};

DataAccessFilter.defaultProps = {
  onDelete: null,
  direction: 'vertical',
  showFirstOnly: false,
  indexId: 0,
  isActive: false,
  selectActive: () => {},
};

function registerTranslations() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

export default DataAccessFilter;
