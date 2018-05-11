import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Paginator from './Paginator.js';

class PaginatorDoc extends Component {

  constructor() {
    super();
    this.state = {
      currentPage: 1,
      totalPages: 5,
    };
  }

  pageHandler = (newPageValue) => {
    const value = +(newPageValue); // unary plus operator converts string to number
    if (value > 0 &&
        value <= this.state.totalPages &&
        value !== this.state.currentPage) {
      this.setState({
        currentPage: value,
      });
    }
  }

  emptyInputField = () => {
    this.setState({
      currentPage: '',
    });
  }

  render() {
    return (
      <Page>
        <h2>Paginator</h2>

        <p>Use this component for ...</p>

        <ReactSpecimen span={3}>
          <Paginator
            currentPage={this.state.currentPage}
            extraClass="some-class"
            pageHandler={this.pageHandler}
            totalPages={this.state.totalPages}
            translations={{
              prev: 'Prev',
              page: 'Page',
              preposition: 'of',
              next: 'Next',
            }}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>currentPage</strong>: number of current page, or an empty string if user is typing into input field</li>
          <li><strong>pageHandler</strong>: function to update the current page state</li>
          <li><strong>totalPages</strong>: number of total amount of pages</li>
          <li><strong>translations</strong>: an object that translates string text in the component depending on user language choice</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>
      </Page>
    );
  }

}

export default PaginatorDoc;
