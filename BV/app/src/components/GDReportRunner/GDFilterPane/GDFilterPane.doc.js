import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import classnames from 'classnames';
import translate from 'counterpart';

import {
  getSingleReportv2,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';

import GDFilterPane from './GDFilterPane.js';

const filters = getSingleReportv2().filters.slice(0, 10);

class GDFilterPaneDoc extends Component {
  constructor(props) {
    super(props);

    translate.setLocale('en-US'); // for translations purposes
    this.state = {
      isVisible: true,
      currentlyAppliedFilters: [],
    };
  }

  toggleFilterPane = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  closeFilterPane = () => {
    this.setState({ isVisible: false });
  }

  applyFilters = (newValues) => {
    this.setState({
      currentlyAppliedFilters: Object.keys(newValues).map((key) => {
        return Object.assign({}, newValues[key], { id: key });
      }),
    });
  }

  render() {
    const filterPaneTriggerClasses = classnames('filter-pane-trigger', {
      'is-disabled': false, // @todo, add state to disable filter pane trigger
    });

    return (
      <Page>
        <h2>GDFilterPane</h2>

        <p>Use this component to filter GD Table</p>

        <ReactSpecimen span={6}>
          <div>
            <div
              role="button"
              tabIndex={0}
              className={filterPaneTriggerClasses}
              onClick={this.toggleFilterPane}
              aria-expanded={this.state.isVisible}
            >
              <span className="gd-report-runner__filter-toggle">Toggle Filters Pane</span>
            </div>
            <br />
            <GDFilterPane
              applyFilters={this.applyFilters}
              closeFilterPane={this.closeFilterPane}
              extraClass="some-class"
              filterList={filters}
              isVisible={this.state.isVisible}
            />
            <br />
            {
              this.state.currentlyAppliedFilters.length > 0 &&
              <div>
                <h2>Last applied filters:</h2>
                <ol>
                  {
                  this.state.currentlyAppliedFilters.map((filter) => {
                    return (
                      <li key={filter.id}>
                        <pre>{JSON.stringify(filter)}</pre>
                      </li>
                    );
                  })
                }
                </ol>
              </div>
            }
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>isVisible</strong>: prop whether pane is already visible or not</li>
          <li><strong>isOverlay</strong>: style class prop that determines whether pane overlays or pushes content down, <code>false</code> on default</li>
          <li><strong>onCancel</strong>: function prop that&apos;s called on Cancel Action</li>
          <li><strong>onSubmit</strong>: function prop that&apos;s called on Apply/Search Action</li>
          <li><strong>translate</strong>: &apos;translations&apos; object prop with keys for Cancel Button, Apply/Search text, and More/Less toggle text</li>
          <li><strong>listFilters</strong>: prop of list of available filters</li>
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
  }
}

export default GDFilterPaneDoc;
