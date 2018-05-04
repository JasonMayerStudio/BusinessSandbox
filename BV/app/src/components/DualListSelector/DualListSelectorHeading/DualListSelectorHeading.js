import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './DualListSelectorHeading.scss';

class DualListSelectorHeading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: true,
    };
  }

  render() {
    const { children, extraClass, tagline, title } = this.props;
    const wrapperClass = classnames('dual-list-selector__heading', {
      [extraClass]: extraClass,
    });
    return (
      <div className={wrapperClass}>
        <h2>{title}</h2>
        {children}
        {
          tagline &&
          <div className="meta">
            {tagline}
          </div>
        }
      </div>
    );
  }
}

DualListSelectorHeading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  extraClass: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string.isRequired,
};

DualListSelectorHeading.defaultProps = {
  children: null,
  extraClass: '',
  tagline: '',
};

export default DualListSelectorHeading;
