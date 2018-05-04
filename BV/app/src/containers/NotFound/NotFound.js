import React, { Component } from 'react';

class NotFound extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section>
        <h1>Not Found</h1>
        <p>What you were looking for was not found. Please select a section from the navigation menu.</p>
      </section>
    );
  }
}

export default NotFound;
