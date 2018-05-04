import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ChangePlan from '../ProductSelection/ChangePlan';

class ChangeProductSelection extends Component {
  constructor(props) {
    super(props);

    this.attachBindings();
  }

  componentDidMount() {
    this.toggleDrawer();
  }

  componentWillUnmount() {
    this.toggleDrawer();
  }

  keyDown(e) {
    if (e.keyCode === 27) { // Escape
      this.props.history.goBack();
    }
  }

  attachBindings() {
    this.toggleDrawer = this.props.toggleSecondaryDrawer.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  render() {
    return (
      <ChangePlan
        isEditDrawer
        toggleDrawer={this.toggleDrawer}
        onKeyDown={this.keyDown}
      />
    );
  }
}

ChangeProductSelection.propTypes = {
  toggleSecondaryDrawer: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    goBack: PropTypes.func,
  }),
};

ChangeProductSelection.defaultProps = {
  history: {},
};

export default withRouter(ChangeProductSelection);
