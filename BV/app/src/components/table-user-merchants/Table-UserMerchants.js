/* eslint-disable no-param-reassign, global-require, array-callback-return  */
import counterpart from 'counterpart';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import SmallButton from 'Components/Button/SmallButton';
import Checkbox from 'Components/forms/checkbox/Checkbox.js';
import ConfirmationModal from 'Components/confirmation-modal/ConfirmationModal.js';
import BallSyncLoader from 'Components/loaders/BallSyncLoader';

import { swapElements } from 'Utils/swapArrayElemsUtil';
import { initCommonTranslate } from 'Utils/languages';
import { getUserPreferences } from '../../actions/preferenceActions';

import './Table-UserMerchants.scss';

export class TableUserMerchants extends Component {
  constructor(props) {
    super(props);

    initCommonTranslate();
    initContainerTranslate();

    this.templateObj = this.props.content[0];

    this.state = {
      clearAllDataAccessModalToggled: false,
    };
    this.attachBindings();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.checkCount &&
      newProps.filterText &&
      newProps.filterText.length > 0 &&
      (newProps.checkCount !== this.props.checkCount ||
      newProps.filterText !== this.props.filterText)) {
      this.props.filterRows(newProps.filterText);
    }
  }

  attachBindings() {
    this.dangerAction = this.dangerAction.bind(this);
    this.toggleClearAllDataAccessModal = this.toggleClearAllDataAccessModal.bind(this);
  }

  dangerAction() {
    this.toggleClearAllDataAccessModal();
    this.props.clearAccess();
  }

  toggleClearAllDataAccessModal() {
    this.setState({
      clearAllDataAccessModalToggled: !this.state.clearAllDataAccessModalToggled,
    });
  }

  get columns() {
    const ACCESS_COLUMN = 0;
    const MERCHANT_COLUMN = 1;
    const DBA_COLUMN = 2;
    const ADDRESS_COLUMN = 3;

    const templateObj = this.props.content[0];
    const keys = Object.keys(templateObj);
    const uniqKeys = keys.filter((elem) => {
      return this.props.columnsToSearch.indexOf(elem) !== -1;
    }).sort();

    swapElements(uniqKeys, ACCESS_COLUMN, DBA_COLUMN);
    swapElements(uniqKeys, MERCHANT_COLUMN, ADDRESS_COLUMN);

    return uniqKeys;
  }

  get mapColumnsAndRows() {
    if (this.props.content.length) {
      return (
      [<thead key="header" className="pure-table__header">
        <tr>
          {this.columns.map((row) => {
            /* remove underscores and add spaces to row names */
            row = row.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
            switch (row) {
              case 'has access':
                return (
                  <th key={row}>{counterpart('columns.hasAccess')}</th>
                );
              case 'merchant id':
                return (
                  <th
                    key={row}
                    className="sort"
                    onClick={() => this.props.handleSort(row)}
                  >
                    {counterpart('columns.merchantNumber')}
                  </th>
                );
              case 'dba name':
                return (
                  <th
                    key={row}
                    className="sort"
                    onClick={() => this.props.handleSort(row)}
                  >
                    {counterpart('columns.dbaName')}
                  </th>
                );
              case 'full address':
                return (
                  <th key={row}>{counterpart('columns.fullAddress')}</th>
                );
              default:
                return false;
            }
          })}
        </tr>
      </thead>,
        <tbody key="body" className={this.props.loading ? 'pure-table__body loading' : 'pure-table__body'}>
          {this.props.loading && <tr className="ball-sync-loader"><td colSpan={4} className="ball-sync-loader"><BallSyncLoader /></td></tr>}
          {!this.props.dataAccessProhibited && <tr className="row-plain">
            <td colSpan={4}>
              <span
                role="button"
                tabIndex={0}
                onClick={this.props.selectAllAccess}
              >
                {counterpart('globalTranslate.drawer.selectAll')}
              </span>
            </td>
          </tr>}
          {this.props.globalSelectorRows.map((item) => {
            return ([
              <tr>
                <td className="global-selector-group" colSpan="4">{counterpart('globalTranslate.common.corp')} {item.corp} &gt; {counterpart('globalTranslate.common.region')} {item.region} &gt; {counterpart('globalTranslate.common.prin')} {item.principal} &gt; {counterpart('globalTranslate.common.associate')} {item.associate} &gt; {counterpart('globalTranslate.common.chain')} {item.chain}</td>
              </tr>,
              item.ids.map((row) => {
                return (
                  <tr className="row" key={row.merchantId}>
                    <td>
                      <Checkbox
                        onChange={this.props.toggleAccess}
                        id={`merchant-${row.merchantId}`}
                        value={row.dbaName}
                        isChecked={row.hasAccess}
                        readonly={this.props.dataAccessProhibited}
                      />
                    </td>
                    <td>{row.merchantNumber}</td>
                    <td>{row.dbaName}</td>
                    <td>{row.fullAddress}</td>
                  </tr>
                );
              }),
            ]);
          }) }
        </tbody>]
      );
    }
    return null;
  }

  get selectedCount() {
    if (this.props.checkCount &&
        this.props.checkCount.length > 0 &&
        Array.isArray(this.props.checkCount)) {
      return `${this.props.checkCount.length} ${counterpart('globalTranslate.drawer.selected')}`;
    }

    return counterpart('globalTranslate.drawer.noneSelected');
  }

  render() {
    const disabledAccess = (this.props.checkCount && this.props.checkCount.length === 0) ||
                            this.props.dataAccessProhibited ||
                            !this.props.checkboxTouched;

    // Good ole vanilla JS approach as the pagination elements are buried in ReactPaginates's source code
    const paginator = document.querySelector('.previous');
    if (paginator !== null) {
      paginator.setAttribute('data-page-count', `Page ${this.props.currentPage} of ${this.props.pageCount}`);
    }

    return (
      <section>
        <table className="pure-table user-merchants-table" id="user-merchants-table">
          {this.mapColumnsAndRows}
        </table>
        <div className="pure-table__footer">
          <SmallButton
            disabled={disabledAccess}
            action={this.props.saveAccess}
          >
            {this.props.loading ? counterpart('globalTranslate.drawer.saving') : counterpart('globalTranslate.drawer.saveAccess')}
          </SmallButton>
          {
            (!this.props.loading && this.props.checkCount && this.props.checkCount.length < 1)
              ? counterpart('globalTranslate.drawer.clearAllDataAccessText')
              : null
          }
          <div className="footer-right">
            <span className="selected-count">{this.selectedCount}</span>
            {
              !this.props.dataAccessProhibited && [
                <span key="pipe"> | </span>,
                <ConfirmationModal
                  key="clearAllDataAccessKey"
                  isToggled={this.state.clearAllDataAccessModalToggled}
                  toggleModal={this.toggleClearAllDataAccessModal}
                  title={counterpart('globalTranslate.drawer.clearAllDataAccessTitle')}
                  actionText={counterpart('globalTranslate.drawer.clearAllDataAccessText')}
                  cancelButtonText={counterpart('globalTranslate.drawer.cancel')}
                  dangerButtonText={counterpart('globalTranslate.drawer.clear')}
                  dangerAction={this.dangerAction}
                  buttonCategory="link-inline"
                >
                  {counterpart('globalTranslate.drawer.clear')}
                </ConfirmationModal>,
              ]
            }
          </div>
        </div>
        <div className="pure-table__data">
          <span className="user-merchants-pagination">{this.props.paginator}</span>
        </div>
      </section>
    );
  }
}

TableUserMerchants.propTypes = {
  checkCount: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.number,
  ]),
  content: PropTypes.array,
  columnsToSearch: PropTypes.array,
  filterRows: PropTypes.func,
  filterText: PropTypes.string.isRequired,
  handleSort: PropTypes.func,
  toggleAccess: PropTypes.func,
  clearAccess: PropTypes.func,
  selectAllAccess: PropTypes.func,
  saveAccess: PropTypes.func,
  dataAccessProhibited: PropTypes.bool,
  checkboxTouched: PropTypes.bool,
  loading: PropTypes.bool,
  globalSelectorRows: PropTypes.array.isRequired,
  paginator: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
};

TableUserMerchants.defaultProps = {
  checkCount: null,
  content: [],
  columnsToSearch: [],
  paginator: null,
  checkboxTouched: false,
  loading: false,
  dataAccessProhibited: false,
  filterRows: () => {},
  handleSort: () => {},
  toggleAccess: () => {},
  clearAccess: () => {},
  selectAllAccess: () => {},
  saveAccess: () => {},
};

function initContainerTranslate() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TableUserMerchants));
/* eslint-enable no-param-reassign, global-require, array-callback-return */
