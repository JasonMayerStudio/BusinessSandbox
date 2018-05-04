import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import EditIcon from 'Components/icons/EditIcon';

import { initCommonTranslate } from 'Utils/languages';

import './EditableInput.scss';

export class EditableInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputDirty: false,
      inputContent: '',
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
    const { inputDirty, inputContent } = this.state;
    return (
      <div className="editable-input" ref={(ref) => (this.editableInputContainer = ref)}>
        <span className="editable-input__label">{label}</span>
        <div className="editable-input__edit">
          <input
            className="editable-input__content"
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
