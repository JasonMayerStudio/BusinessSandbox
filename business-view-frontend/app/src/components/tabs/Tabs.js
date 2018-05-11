import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

class Tabs extends Component {
  constructor(props) {
    super(props);

    const lastTabIndex = props.children.length - 1;
    let initialTab = props.selectedTab;

    if (initialTab < 0) {
      initialTab = 0;
    } else if (initialTab > lastTabIndex) {
      initialTab = lastTabIndex;
    }

    this.state = {
      selectedTab: initialTab,
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedTab !== this.state.selectedTab) {
      this.setState({
        selectedTab: newProps.selectedTab,
      });
    }
  }

  render() {
    let wrapperClass = 'tabs';
    if (this.props.extraClass && this.props.extraClass.length > 0) {
      wrapperClass += ` ${this.props.extraClass}`;
    }

    return (
      <div className={wrapperClass}>
        <div className="tabs__content">
          {this.props.children[this.state.selectedTab]}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  selectedTab: PropTypes.number,
  extraClass: PropTypes.string,
};

Tabs.defaultProps = {
  selectedTab: 0,
  extraClass: '',
};

export default Tabs;
