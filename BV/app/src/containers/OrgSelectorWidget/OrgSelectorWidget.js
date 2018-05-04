import React, { Component } from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';

import Autocomplete from 'Components/autocomplete/Autocomplete';
import HollowButton from 'Components/Button/HollowButton';
import Label from 'Components/forms/label/Label';

import { initCommonTranslate } from 'Utils/languages';

import './OrgSelectorWidget.scss';

class OrgSelectorWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.attachBindings();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.forceClose) {
      this.setState({
        isOpen: false,
      });
    }
  }

  attachBindings() {
    this.toggleAutocomplete = this.toggleAutocomplete.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  toggleAutocomplete() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleBlur(event) {
    const relatedTarget = event.relatedTarget ||
                          event.explicitOriginalTarget ||
                          document.activeElement; // IE11

    if (!this.widget.contains(relatedTarget)) {
      this.setState({
        isOpen: false,
      });
    }
  }

  render() {
    const isDisabled = !this.props.dataList.length;

    initCommonTranslate();

    return (
      <div
        className="org-selector-widget"
        ref={(ref) => (this.widget = ref)}
        onBlur={this.handleBlur}
        tabIndex="0"
        role="button"
      >
        <Label
          htmlFor={counterpart(`globalTranslate.forms.${this.props.labelText.toLowerCase()}`)}
          className="field-label"
        >
          {counterpart(`globalTranslate.forms.${this.props.labelText.toLowerCase()}`)}
        </Label>
        <HollowButton
          id={this.props.labelText}
          action={this.toggleAutocomplete}
          disabled={isDisabled}
        >
          {this.props.selectedTerm}
        </HollowButton>
        {!isDisabled && this.state.isOpen &&
          <Autocomplete
            dataList={this.props.dataList}
            handleSelect={this.props.handleSelect}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}
            searchTerm={this.props.searchTerm}
            extraClass="org-selector-widget-autocomplete"
          />
        }
      </div>
    );
  }
}

OrgSelectorWidget.propTypes = {
  dataList: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  selectedTerm: PropTypes.string,
  labelText: PropTypes.string,
  forceClose: PropTypes.bool,
};

OrgSelectorWidget.defaultProps = {
  placeholder: '',
  selectedTerm: '',
  labelText: '',
  forceClose: false,
};

export default OrgSelectorWidget;
