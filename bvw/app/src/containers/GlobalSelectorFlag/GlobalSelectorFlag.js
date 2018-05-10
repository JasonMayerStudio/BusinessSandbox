import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import counterpart from 'counterpart';

import { getGlobalSelectorElements } from 'Selectors/globalSelectorFlagSelectors';

import { shouldIgnoreGlobalSelector } from 'Utils/globalSelector';
import { initCommonTranslate } from 'Utils/languages';

import './GlobalSelectorFlag.scss';

export class GlobalSelectorFlag extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    const isTransactionFinder = shouldIgnoreGlobalSelector(this.props.location.pathname);

    this.state = {
      isTransactionFinder,
    };

    this.attachBindings();

    initCommonTranslate();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location.pathname !== this.props.location.pathname) {
      const newCheck = shouldIgnoreGlobalSelector(newProps.location.pathname);

      if (newCheck !== this.state.isTransactionFinder) {
        this.setState({
          isTransactionFinder: newCheck,
        });
      }
    }
  }

  attachBindings() {
    this.editGlobalSelector = this.editGlobalSelector.bind(this);
  }

  editGlobalSelector() {
    if (!this.state.isTransactionFinder &&
        !this.props.location.pathname.includes('global-selector')) {
      this.props.history.push('/global-selector');
    }
  }

  render() {
    const globalSelectorFlagClasses = classNames('global-selector-flag', {
      disabled: this.state.isTransactionFinder,
    });

    const displayValue = (this.state.isTransactionFinder)
      ? counterpart('globalTranslate.common.allMerchants')
      : this.props.globalSelector;

    return (
      <div
        aria-disabled={this.state.isTransactionFinder}
        className={globalSelectorFlagClasses}
        onClick={this.editGlobalSelector}
        role="button"
        tabIndex={0}
      >
        <span className="global-selector-flag-label">{counterpart('globalTranslate.globalSelectorFlag.label')}</span>
        <span className="global-selector-flag-value">{displayValue}</span>
      </div>
    );
  }
}

GlobalSelectorFlag.propTypes = {
  globalSelector: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    globalSelector: getGlobalSelectorElements(state.globalFilter.filters),
  };
}

export default withRouter(connect(mapStateToProps)(GlobalSelectorFlag));
