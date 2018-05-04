import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LockIcon extends Component {
  constructor(props) {
    super(props);

    this.attachBindings();
  }

  attachBindings() {
    this.onMouseOver = this.props.onMouseOver.bind(this);
  }

  render() {
    return (
      <svg onMouseOver={this.onMouseOver} className="lock-icon" width="13" height="16" viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg">
        <title>Lock Icon</title>
        <g transform="translate(2 5)" fill="none">
          <rect stroke="currentColor" x=".5" y="2.5" width="8" height="7" rx="2" />
          <path fill="currentColor" d="M4 5h1v2H4z" />
          <path d="M7 2.5a2.5 2.5 0 0 0-5 0" stroke="currentColor" />
        </g>
      </svg>
    );
  }
}

LockIcon.propTypes = {
  onMouseOver: PropTypes.func,
};

LockIcon.defaultProps = {
  onMouseOver: () => {},
};

export default LockIcon;
