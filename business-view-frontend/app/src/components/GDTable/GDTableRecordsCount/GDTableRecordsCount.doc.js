import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import GDTableRecordsCount from './GDTableRecordsCount.js';

class GDTableRecordsCountDoc extends Component {
  constructor() {
    super();

    this.state = {
      recordsShown: 25,
      currentPage: 1,
      totalRecords: 96,
    };
  }

  getNextRange = () => {
    const { currentPage } = this.state;

    if (this.state.currentPage * this.state.recordsShown < this.state.totalRecords) {
      this.setState({
        currentPage: currentPage + 1,
      });
    }
  }

  getPreviousRange = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  }

  render() {
    const { totalRecords, currentPage, recordsShown } = this.state;

    const text = {
      showingRecords: 'Showing records',
      preposition: 'of',
    };

    return (
      <Page>
        <h2>GDTableRecordsCount</h2>

        <p>Use this component for displaying the subset range of data shown within a larger data set.</p>
        <p>The range is displayed in the form <strong>Showing records x-y of z</strong> where <strong><em>x</em></strong> is the first record shown, <strong><em>y</em></strong> is the last record shown, and <strong><em>z</em></strong> is the total number of records in the data set.</p>

        <ReactSpecimen span={3}>
          <div>
            <GDTableRecordsCount
              totalRecords={totalRecords}
              text={text}
              currentPage={currentPage}
              recordsShown={recordsShown}
            />
            <a
              role="button"
              tabIndex={0}
              onClick={this.getPreviousRange}
            >
              Prev Page&nbsp;
            </a>
            <a
              role="button"
              tabIndex={0}
              onClick={this.getNextRange}
            >
              Next Page
            </a>
          </div>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>currentPage</strong>: the page of the data set currently being viewed</li>
          <li><strong>text</strong>: an object with translated strings for <em>showingRecords</em> and the preposition <em>of</em> to use in displaying the count</li>
          <li><strong>totalRecords</strong>: the total number of records found by the current query</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>recordsShown</strong>: the number of records to show per page, defaults to 25</li>
        </ul>

      </Page>
    );
  }
}

export default GDTableRecordsCountDoc;
