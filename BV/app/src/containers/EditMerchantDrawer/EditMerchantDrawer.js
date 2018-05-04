import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import MerchantDrawer from '../CreateMerchantDrawer';

export class EditMerchantDrawer extends Component {
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
      <MerchantDrawer
        isEditLocation
        toggleDrawer={this.toggleDrawer}
      />
    );
  }
}

EditMerchantDrawer.propTypes = {
  toggleSecondaryDrawer: PropTypes.func.isRequired,
};

export default withRouter(EditMerchantDrawer);
