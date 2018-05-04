import React from 'react';
import PropTypes from 'prop-types';
import './TabPane.scss';

const TabPane = ({ children }) => (
  <div className="tabs-tab-pane">
    {children}
  </div>
);

TabPane.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabPane;
