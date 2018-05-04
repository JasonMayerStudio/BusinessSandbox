import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Pagination from './Pagination.js';

class PaginationDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageCount: 10,
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(data) {
    this.setState({
      currentPage: data.selected + 1,
    });
  }

  render() {
    return (
      <Page>
        <h2>Pagination</h2>

        <p>Use this component for pagination of large data sets.</p>

        <ReactSpecimen span={3}>
          <Pagination
            pageCount={this.state.pageCount}
            currentPage={this.state.currentPage}
            handlePageClick={this.handlePageClick}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>currentPage</strong>: starting page for paginated content</li>
          <li><strong>pageCount</strong>: total amount of pages for paginated content. Should be determined by calculating total amount of rows divided by how many rows should be shown at once, returning the smallest integer greater than or equal to the result of such.</li>
          <li><strong>handlePageClick</strong>: a function that will shift the data set to the next page of content, as well as update the current page in markup</li>
        </ul>

      </Page>
    );
  }
}

export default PaginationDoc;
