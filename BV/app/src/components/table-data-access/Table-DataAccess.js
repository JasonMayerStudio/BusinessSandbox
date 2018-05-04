/* eslint-disable no-param-reassign, class-methods-use-this */
import counterpart from 'counterpart';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SmallButton from 'Components/Button/SmallButton';
import BallSyncLoader from 'Components/loaders/BallSyncLoader';

import { initCommonTranslate } from 'Utils/languages';

import { getUserPreferences } from '../../actions/preferenceActions';

import './Table-DataAccess.scss';

class TableDataAccess extends Component {
  constructor(props) {
    super(props);

    this.attachBindings();
  }

  attachBindings() {
    this.editAccess = this.editAccess.bind(this);
    this.deleteAccess = this.deleteAccess.bind(this);
  }

  editAccess(row) {
    return () => {
      this.props.editButtonHandler(row);
    };
  }

  deleteAccess(row) {
    return () => {
      this.props.deleteButtonHandler(row);
    };
  }

  get tableRows() {
    if (this.props.dataAccessChains.length) {
      const tableRows = this.props.dataAccessChains.map((accessChain, index) => {
        const accessChainKey = Object.values(accessChain).map((org) => { return org.label; }).join('');

        return (
          <tr key={accessChainKey} className="data-access-row">
            <td className={classnames('data-access-cell', { 'end-of-chain': accessChain.corp.endOfChain })}>
              {accessChain.corp.label}
            </td>
            <td className={classnames('data-access-cell', { 'end-of-chain': accessChain.region.endOfChain })}>
              {accessChain.region.label}
            </td>
            <td className={classnames('data-access-cell', { 'end-of-chain': accessChain.principal.endOfChain })}>
              {accessChain.principal.label}
            </td>
            <td className={classnames('data-access-cell', { 'end-of-chain': accessChain.associate.endOfChain })}>
              {accessChain.associate.label}
            </td>
            <td className={classnames('data-access-cell', { 'end-of-chain': accessChain.chain.endOfChain })}>
              {accessChain.chain.label}
            </td>
            <td className={classnames('data-access-cell', { 'end-of-chain': accessChain.merchant.endOfChain })}>
              {accessChain.merchant.label}
            </td>
            <td className="data-access-cell">
              <div className="data-access-actions" data-chain-index={index}>
                <SmallButton
                  disabled={this.props.dataAccessProhibited}
                  action={this.editAccess(accessChain)}
                >
                  {counterpart('globalTranslate.drawer.editAccess')}
                </SmallButton>
                <SmallButton
                  disabled={this.props.dataAccessProhibited}
                  action={this.deleteAccess(accessChain)}
                >
                  {counterpart('globalTranslate.drawer.delete')}
                </SmallButton>
              </div>
            </td>
          </tr>
        );
      });
      return tableRows;
    }

    return null;
  }

  render() {
    initCommonTranslate();

    return (
      <section className="data-access-table-container">
        <table className="pure-table data-access-table" id="data-access-table">
          <thead className="pure-table__header">
            <tr className="data-access-header-row">
              <th className="data-access-header">
                {counterpart('globalTranslate.forms.corp')}
              </th>
              <th className="data-access-header">
                {counterpart('globalTranslate.forms.region')}
              </th>
              <th className="data-access-header">
                {counterpart('globalTranslate.forms.principal')}
              </th>
              <th className="data-access-header">
                {counterpart('globalTranslate.forms.associate')}
              </th>
              <th className="data-access-header">
                {counterpart('globalTranslate.forms.chain')}
              </th>
              <th className="data-access-header">
                {counterpart('globalTranslate.forms.merchant')} ID
              </th>
              <th className="data-access-header">
                {counterpart('globalTranslate.forms.actions')}
              </th>
            </tr>
          </thead>
          <tbody className={this.props.loading ? 'pure-table__body loading' : 'pure-table__body'}>
            {this.props.loading && <tr className="ball-sync-loader"><td colSpan={7} className="ball-sync-loader"><BallSyncLoader /></td></tr>}
            {!this.props.loading && this.tableRows}
          </tbody>
        </table>
      </section>
    );
  }
}

TableDataAccess.propTypes = {
  dataAccessChains: PropTypes.array.isRequired,
  editButtonHandler: PropTypes.func.isRequired,
  deleteButtonHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  dataAccessProhibited: PropTypes.bool.isRequired,
};

TableDataAccess.defaultProps = {
  loading: false,
};

function mapStateToProps(state) {
  return {
    preferences: state.preferences,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPreferences: (userId) => dispatch(getUserPreferences(userId)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableDataAccess));
/* eslint-enable no-param-reassign, class-methods-use-this */
