import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { checkForMerchantUser } from 'Selectors/userSelectors';

import ProductSelection from '../ProductSelection';
import ViewUsers from '../ViewUsers';

export class Admin extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="padded">
        {
          this.props.parsedPermissions.users.canView &&
          <ViewUsers {...this.props} />
        }
        <span>&nbsp;</span>
        {
          this.props.parsedPermissions.merchants.canViewProductSelection &&
          this.props.isMerchantRole &&
          <ProductSelection />
        }
      </section>
    );
  }
}

Admin.propTypes = {
  parsedPermissions: PropTypes.object.isRequired,
  isMerchantRole: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    parsedPermissions: state.auth.session.user.parsedPermissions,
    isMerchantRole: checkForMerchantUser(state.auth.session.user.role),
  };
}

export default connect(mapStateToProps)(Admin);
