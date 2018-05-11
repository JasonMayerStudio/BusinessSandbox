import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';

import TextField from 'Components/forms/text-field/TextField';

import '../_ranges.scss';
import '../_datepicker.scss';
import './DateRangeInput.scss';

class DateRangeInput extends Component {
  constructor(props) {
    super(props);

    const startingDate = (this.props.startDate &&
                          (moment.isDate(this.props.startDate) || moment.isMoment(this.props.startDate))
                         )
      ? moment(this.props.startDate)
      : null;

    const endingDate = (this.props.endDate &&
                        (moment.isDate(this.props.endDate) || moment.isMoment(this.props.endDate))
                       )
      ? moment(this.props.endDate)
      : null;
    const validatedDateFormat = ['MM/DD/YYYY', 'DD/MM/YYYY'].includes(this.props.dateFormat)
      ? this.props.dateFormat
      : 'MM/DD/YYYY';

    this.state = {
      startDate: startingDate,
      endDate: endingDate,
      dateFormat: validatedDateFormat,
    };

    this.attachBindings();
  }

  componentWillReceiveProps(newProps) {
    const startingDate = (newProps.startDate &&
                          (moment.isDate(newProps.startDate) || moment.isMoment(newProps.startDate))
                         )
      ? moment(newProps.startDate)
      : null;
    const endingDate = (newProps.endDate &&
                        (moment.isDate(newProps.endDate) || moment.isMoment(newProps.endDate))
                       )
      ? moment(newProps.endDate)
      : null;
    const validatedDateFormat = ['MM/DD/YYYY', 'DD/MM/YYYY'].includes(newProps.dateFormat)
      ? this.props.dateFormat
      : 'MM/DD/YYYY';

    if (!moment(startingDate).isSame(this.state.startDate, 'day') ||
        !moment(endingDate).isSame(this.state.endDate, 'day') ||
        validatedDateFormat !== this.state.dateFormat) {
      this.setState({
        startDate: startingDate,
        endDate: endingDate,
        dateFormat: validatedDateFormat,
      });
    }
  }

  handleChangeStart(date) {
    this.setState({ startDate: date });
    this.props.onDateChange(this.props.id, 'start', date);
  }

  handleChangeEnd(date) {
    this.setState({ endDate: date });
    this.props.onDateChange(this.props.id, 'end', date);
  }

  attachBindings() {
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  get labelContent() {
    return (
      <span>
        {this.props.title}
        {this.props.error && <span className="message-error">{this.props.error}</span>}
      </span>
    );
  }

  render() {
    const htmlIdFirst = `${this.props.title.replace(/ /, '-')}-first`;
    const htmlIdLast = `${this.props.title.replace(/ /, '-')}-last`;

    return (
      <TextField
        error={this.props.error}
        fieldClass="field range-container"
        htmlFor={htmlIdFirst}
        labelContent={this.labelContent}
      >
        <div className="range-pair">
          <div className="date-picker-input">
            <DatePicker
              id={htmlIdFirst}
              selected={this.state.startDate}
              selectsStart
              onChange={this.handleChangeStart}
              className="field-input range-field date-start"
              dateFormat={this.state.dateFormat}
              minDate={this.props.minDate}
            />
          </div>
          <span className="range-separator">{this.props.separatorText}</span>
          <div className="date-picker-input">
            <DatePicker
              id={htmlIdLast}
              selected={this.state.endDate}
              selectsEnd
              onChange={this.handleChangeEnd}
              className="field-input range-field date-end"
              dateFormat={this.state.dateFormat}
              minDate={this.props.minDate}
              popperModifiers={{
                offset: {
                  enabled: true,
                  offset: '5px, 10px',
                },
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                  boundariesElement: 'viewport',
                },
              }}
            />
          </div>
        </div>
      </TextField>
    );
  }
}

DateRangeInput.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  error: PropTypes.string,
  startDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  endDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onDateChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  separatorText: PropTypes.string,
  dateFormat: PropTypes.string,
  minDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

DateRangeInput.defaultProps = {
  startDate: '',
  endDate: '',
  error: '',
  title: '',
  separatorText: 'to',
  dateFormat: 'MM/DD/YYYY',
  minDate: null,
};

export default DateRangeInput;
