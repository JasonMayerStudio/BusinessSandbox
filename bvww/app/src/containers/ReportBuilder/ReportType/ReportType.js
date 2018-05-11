import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import translate from 'counterpart';

import TextField from 'Components/forms/text-field/TextField';
import SelectInput, { findItem } from 'Components/forms/select-input';
import TextareaInput from 'Components/forms/textarea-input/TextareaInput';

import { initCommonTranslate } from 'Utils/languages';
import { fetchTemplates } from '../../../actions/templateActions';
import * as reportActions from '../../../actions/reportActions.v2';

import './ReportType.scss';

export class ReportType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reportType: '',
      reportDescription: '',
      selectedType: {
        value: '',
        text: '',
      },
      templateTypes: [
        {
          value: '',
          text: '',
          id: '',
        },
      ],
    };

    initCommonTranslate();
  }

  componentDidMount() {
    this.props.fetchTemplates();
  }

  componentWillReceiveProps() {
    this.parseTemplates();
  }

  makeStateChange = (state) => {
    this.setState(state, () => this.props.getData(this.state.reportType, this.state.reportDescription));
  }

  parseTemplates = () => {
    const templateTypes = this.props.templates.map((template) => {
      return {
        value: template.schema,
        text: template.name,
        id: template.id,
      };
    });

    this.setState({ templateTypes });
  }

  selectType = (value, event) => {
    event.stopPropagation();
    const selectedType = findItem(this.state.templateTypes, value);

    if (selectedType) {
      this.makeStateChange({ selectedType, reportType: selectedType.text });
    }
  }

  render() {
    const { selectedType, templateTypes } = this.state;

    return (
      <div className="report-type">
        <TextField
          htmlFor="report-type"
          labelContent={translate('globalTranslate.reports.reportType')}
        >
          <SelectInput
            dataList={templateTypes}
            handleSelection={this.selectType}
            selectedItem={this.state.selectedType}
            promptText={translate('globalTranslate.reports.chooseAReportType')}
            wrapperClass="select-menu__form"
            extraClass="template-dropdown fixed-width"
          />
        </TextField>

        {selectedType.value !== '' ?
          <TextField
            htmlFor="report-description"
            labelContent={translate('globalTranslate.reports.reportDescription')}
          >
            <TextareaInput
              name="report-description"
              placeholder="Describe the details of the report here."
              value={this.state.reportDescription}
              onChange={(e) => {
                this.makeStateChange({
                  reportDescription: e.target.value,
                });
              }}
            />
          </TextField>
          : ''
        }
      </div>
    );
  }
}

ReportType.propTypes = {
  fetchTemplates: PropTypes.func.isRequired,
  templates: PropTypes.array.isRequired,
  getData: PropTypes.func,
};

ReportType.defaultProps = {
  getData: () => {},
};

function mapStateToProps(state) {
  return {
    templates: state.templates.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTemplates: () => dispatch(fetchTemplates()),
    reportActions: bindActionCreators(reportActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportType);
