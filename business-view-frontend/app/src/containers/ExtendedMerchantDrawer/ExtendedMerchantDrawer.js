import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon.js';

import ViewUserList from '../ViewUserList';
import { formatPhoneNumber } from '../../utils/formatting';

const ExtendedMerchantDrawer = (props) => {
  const merch = props.currentMerchant;
  let userListByMerchant = [];
  userListByMerchant = props.userList;

  function showUserList() {
    return (
      <ViewUserList users={userListByMerchant} />
    );
  }

  return (
    <section className="drawer-content">
      <div className="drawer-heading">
        <Button
          type="button"
          iconDirection="left"
          icon={LeftPointerIcon}
          action={props.closeDrawer}
        >
          {props.backPromptText}
        </Button>
      </div>
      <div className="drawer-hero">
        <div className="drawerTitles">
          <h1 className="drawer-title">{props.drawerTitle}</h1>
          <h4 className="drawer-subtitle">{props.drawerSubtitle}</h4>
          <div className="drawer-merchant-info">
            <h4 className="drawer-subtitle phone-numbers">
              Tel: {formatPhoneNumber(merch.phoneNumber)}<br />
              Fax: {formatPhoneNumber(merch.fax)}<br />
              {merch.email}
            </h4>
            <h4 className="drawer-subtitle">
              {merch.address1} {merch.address2}<br />
              {merch.city}, {merch.state} {merch.postalCode} {merch.country}
            </h4>
          </div>
        </div>
        {props.heroButton}
      </div>
      {props.statusBar && <div>{ props.statusBar }</div>}
      <div className="drawer-data">
        <div className="extended-merchant-drawer__user-list">
          {showUserList()}
        </div>
      </div>
    </section>
  );
};

ExtendedMerchantDrawer.propTypes = {
  backPromptText: PropTypes.string.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  drawerTitle: PropTypes.string.isRequired,
  drawerSubtitle: PropTypes.string.isRequired,
  heroButton: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.bool,
  ]),
  statusBar: PropTypes.element,
  currentMerchant: PropTypes.object,
  userList: PropTypes.array,
};

ExtendedMerchantDrawer.defaultProps = {
  statusBar: null,
  checkCount: [],
  content: [],
  columnsToSearch: [],
  filterText: '',
  perPage: 5,
  paginator: null,
  heroButton: null,
  checkboxTouched: false,
  loading: false,
  searchBarHeadline: 'Locations',
  searchBarPlaceholder: 'Search Locations',
  isMerchant: false,
  currentMerchant: {},
  userList: [],
};

export default ExtendedMerchantDrawer;
