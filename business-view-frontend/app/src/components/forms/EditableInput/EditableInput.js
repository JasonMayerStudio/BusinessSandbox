import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

import Button from 'Components/Button';
import EditIcon from 'Components/icons/EditIcon';

import { initCommonTranslate } from 'Utils/languages';

import './EditableInput.scss';

/* @TODO custom error data helper for different classification */
const errorMessage = 'Custom Report Name must be 8 letters or more.';

export class EditableInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputDirty: false,
      inputContent: '',
      showErrorMessage: false,
    };

    initCommonTranslate();
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  onBlur = () => {
    this.props.getCurrent(this.state.inputContent);

    if (this.state.inputContent.length > 1 && this.state.inputContent.length < 8) {
      this.setState({ showErrorMessage: true });
    } else {
      this.setState({ showErrorMessage: false });
    }
  }

  handleClickOutside = (event) => {
    if (this.editableInputContainer && this.state.inputDirty && !this.editableInputContainer.contains(event.target)) {
      this.setState({
        inputDirty: false,
      });
      this.editableInputField.blur();
    }
  }

  handleChange = (event) => {
    this.setState({
      inputContent: event.target.value,
    });
  }

  editContent = () => {
    if (!this.state.inputDirty) {
      this.setState({
        inputDirty: true,
      });
      this.editableInputField.focus();
    } else {
      this.setState({
        inputDirty: false,
      });
      this.editableInputField.blur();
    }
  }

  render() {
    const { content, label } = this.props;
    const { inputDirty, inputContent, showErrorMessage } = this.state;

    const editableLabelWrapper = classes('editable-input__label', {
      error: showErrorMessage,
    });

    const editableContentWrapper = classes('editable-input__content', {
      error: showErrorMessage,
    });

    return (
      <div className="editable-input" ref={(ref) => (this.editableInputContainer = ref)}>
        <span className={editableLabelWrapper}>
          { showErrorMessage ?
            errorMessage : label
          }
        </span>
        <div className="editable-input__edit">
          <input
            className={editableContentWrapper}
            type="text"
            ref={(input) => { this.editableInputField = input; }}
            placeholder={content}
            readOnly={!inputDirty}
            onChange={this.handleChange}
            value={inputContent}
            onBlur={this.onBlur}
          />
          <Button
            action={this.editContent}
            category="link-inline"
            icon={EditIcon}
            iconDirection="left"
          />
        </div>
      </div>
    );
  }
}

EditableInput.propTypes = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string,
  getCurrent: PropTypes.func,
};

EditableInput.defaultProps = {
  content: '',
  label: '',
  getCurrent: '',
};

export default EditableInput;
