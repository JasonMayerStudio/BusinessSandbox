import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HollowButton from 'Components/Button/HollowButton';

import './ContentTabs.scss';

class ContentTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: this.props.tabs,
    };
  }

  displayTabs = () => {
    return this.state.tabs.map((contentTab) => {
      const extraClass = (contentTab.active ? 'current' : '');

      return (
        <HollowButton
          key={`${contentTab.name}`}
          extraClass={extraClass}
          action={() => { this.activeTabs(contentTab.name); }}
        >
          {contentTab.name}
        </HollowButton>
      );
    });
  }

  activeTabs = (name) => {
    const initTabs = this.state.tabs.map((contentTab) => {
      if (contentTab.name === name) {
        return {
          name: contentTab.name,
          active: true,
          badge: contentTab.badge,
        };
      } else {
        return {
          name: contentTab.name,
          active: false,
          badge: contentTab.badge,
        };
      }
    });
    this.props.getTabs(initTabs);
    this.setState({ tabs: initTabs });
  }

  render() {
    return (
      <div className="content-tabs">
        {this.displayTabs()}
      </div>
    );
  }
}

ContentTabs.propTypes = {
  tabs: PropTypes.array,
  getTabs: PropTypes.func,
};

ContentTabs.defaultProps = {
  getTabs: () => {},
  tabs: [
    {
      name: 'Default Reports',
      active: true,
      badge: '',
    },
    {
      name: 'Custom Reports',
      active: false,
      badge: 'new',
    },
  ],
};

export default ContentTabs;
