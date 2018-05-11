import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual';
import sortBy from 'lodash/sortBy';

import TextField from 'Components/forms/text-field/TextField';
import SelectInput, { findItem } from 'Components/forms/select-input';
import TextareaInput from 'Components/forms/textarea-input/TextareaInput';

import './GDReportBuilderType.scss';

class GDReportBuilderType extends Component {
  constructor(props) {
    super(props);

    const templateTypes = this.parseTemplates(props.templates);
    const selectedType = templateTypes.find((template) => {
      return template.id === props.selectedTemplateId;
    });

    this.state = {
      selectedType: selectedType || null,
      templateTypes,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.templates.length !== this.props.templates.length ||
      !isEqual(nextProps.templates, this.props.templates)) {
      const templateTypes = this.parseTemplates(nextProps.templates);

      this.setState({
        selectedType: this.state.selectedType,
        templateTypes,
      });
    }

    if (nextProps.selectedTemplateId !== this.props.selectedTemplateId) {
      const selectedType = this.state.templateTypes.find((template) => {
        return template.id === nextProps.selectedTemplateId;
      });
      if (selectedType) {
        this.setState({
          selectedType,
        });
      }
    }
  }

  parseTemplates = (templates) => {
    const selectTemplateList = templates.map((template) => {
      return {
        value: template.schema,
        text: template.name,
        id: template.id,
      };
    });

    return sortBy(selectTemplateList, ['text']);
  }

  selectType = (value, event) => {
    event.stopPropagation();
    const selectedType = findItem(this.state.templateTypes, value);

    if (selectedType) {
      this.props.updateType(selectedType.id);
    }
  }

  updateDescription = (e) => {
    this.props.updateDescription(e.target.value);
  }

  render() {
    const { templateTypes } = this.state;

    return (
      <div className="report-type">
        <TextField
          htmlFor="report-type"
          labelContent={this.props.translations.reportType}
        >
          <SelectInput
            dataList={templateTypes}
            handleSelection={this.selectType}
            selectedItem={this.state.selectedType}
            promptText={this.props.translations.chooseAReport}
            wrapperClass="select-menu__form"
            extraClass="template-dropdown fixed-width"
          />
        </TextField>
        <TextField
          htmlFor="report-description"
          labelContent={this.props.translations.reportDescription}
        >
          <TextareaInput
            name="report-description"
            placeholder={this.props.translations.descriptionPlaceholder}
            value={this.props.description}
            onChange={this.updateDescription}
          />
        </TextField>
      </div>
    );
  }
}

GDReportBuilderType.propTypes = {
  description: PropTypes.string,
  descriptionPlaceholder: PropTypes.string,
  selectedTemplateId: PropTypes.number,
  templates: PropTypes.array,
  translations: PropTypes.object.isRequired,
  updateDescription: PropTypes.func.isRequired,
  updateType: PropTypes.func.isRequired,
};

GDReportBuilderType.defaultProps = {
  description: '',
  descriptionPlaceholder: '',
  selectedTemplateId: 0,
  templates: [],
};

export default GDReportBuilderType;
