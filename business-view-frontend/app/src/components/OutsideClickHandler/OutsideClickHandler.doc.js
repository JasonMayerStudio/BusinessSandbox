import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import classnames from 'classnames';
import InformationIcon from 'Components/icons/information-icon/InformationIcon.js';
import OutsideClickHandler from './OutsideClickHandler.js';

class OutsideClickHandlerDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeFilters: [{
        id: '1234',
        name: 'Test Filter',
        value: 'ABCD 1234',
      },
      ],
      dropdownToggled: {
        active: false,
        inactive: false,
      },
      translations: {
        filters: 'Filters',
        active: 'Active',
        inactive: 'Inactive',
      },
    };
  }

  onClickOutside = () => {
    const infoButtonWrapper = this.infoBubbleWrapper;
    infoButtonWrapper.click();
  };

  toggleDropdown = (event) => {
    event.persist();
    const id = event.currentTarget.id;

    const dropdownToggled = this.state.dropdownToggled;

    dropdownToggled[`${id}`] = !dropdownToggled[`${id}`];

    this.setState({ dropdownToggled });
  };

  render() {
    const {
      activeFilters,
      dropdownToggled,
      extraClass,
      translations,
    } = this.state;

    const wrapperClass = classnames('gd-active-filters-dropdown', {
      [extraClass]: extraClass,
    });

    const filterStatus = (activeFilters.length > 0)
      ? translations.active
      : translations.inactive;

    const id = (activeFilters.length > 0)
      ? 'active'
      : 'inactive';

    const contentClass = classnames('gd-active-filters-dropdown__wrapper', {
      'gd-active-filters-dropdown__inactive': !activeFilters.length,
      'gd-active-filters-dropdown__active': activeFilters.length > 0,
    });

    const mapActiveFilters = activeFilters.map((filter) => {
      return (
        <li className="gd-active-filters-dropdown__item" key={filter.id}>
          <span className="column-name">{filter.name}</span>
          {filter.value && <div>
            <span className="value">{filter.value}</span>
          </div>}
          {filter.values && <div>
            <span className="value">{filter.values.v1}-</span>
            <span className="value">{filter.values.v2}</span>
          </div>}
        </li>
      );
    });

    return (
      <Page>
        <h2>OutsideClickHandler</h2>

        <p>Use this component to handle when the user clicks outside of the child component.</p>

        <ReactSpecimen span={6} >
          <div className={wrapperClass}>
            <span className="gd-active-filters-dropdown__trigger">{translations.filters}: <strong>{filterStatus}</strong></span>
            <div
              className="information-bubble__wrapper"
              id={id}
              onClick={(event) => this.toggleDropdown(event)}
              role="button"
              tabIndex={0}
              ref={(input) => { this.infoBubbleWrapper = input; }}
            >
              <InformationIcon />
            </div>
            {dropdownToggled[`${id}`] &&
              <OutsideClickHandler
                onClickOutside={this.onClickOutside}
              >
                <div className={contentClass}>
                  <h1 className="gd-active-filters-dropdown__header">
                    {translations.active} {translations.filters}
                  </h1>
                  <ul className="gd-active-filters-dropdown__content gd-active-filters-dropdown__content--has-filters">
                    {mapActiveFilters}
                  </ul>
                </div>
              </OutsideClickHandler>}
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>children</strong>: the content that will appear in the popup</li>
          <li><strong>onClickOutside</strong>: function that triggers when the user clicks outside of component</li>
        </ul>

        <h4>Optional Parameters</h4>
      </Page>
    );
  }
}

export default OutsideClickHandlerDoc;
