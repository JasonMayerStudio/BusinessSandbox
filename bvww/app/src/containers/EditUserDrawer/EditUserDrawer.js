import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import UserDrawer from '../CreateUserDrawer';

class EditUserDrawer extends Component {
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

  attachBindings() {
    this.toggleDrawer = this.props.toggleSecondaryDrawer.bind(this);
  }

  render() {
    return (
      <UserDrawer
        isEditDrawer
        toggleDrawer={this.toggleDrawer}
      />
    );
  }
}

EditUserDrawer.propTypes = {
  toggleSecondaryDrawer: PropTypes.func.isRequired,
};

export default withRouter(EditUserDrawer);
