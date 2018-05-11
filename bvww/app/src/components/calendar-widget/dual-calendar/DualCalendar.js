import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import moment from 'moment';
import { DateRange } from 'react-date-range';

import Button from 'Components/Button';
import PrimaryButton from 'Components/Button/PrimaryButton';
import TextField from 'Components/forms/text-field/TextField';

import 'react-day-picker/lib/style.css';
import './DualCalendar.scss';

function isValidDate(date, format) {
  // splitting date string based on '/' like 03/12/2018 into an array ['03','12','2018'] then validating
  const split = date.split('/');
  if (split.length !== 3) return false;
  if (split[2].length < 4) return false;
  if (split[0] === '0' || split[0] === '00' || split[0].length > 2) {
    return false;
  }
  if (split[1] === '0' || split[1] === '00' || split[1].length > 2) {
    return false;
  }
  return moment(date, format).format(format).toString() !== 'Invalid date';
}

class DualCalendar extends Component {
  constructor(props, context) {
    super(props, context);
    const { format, translations } = props;

    this.ranges = this.getAvailableRanges(translations);

    this.state = {
      dates: {
        startDate: moment().format(format).toString(),
        endDate: moment().format(format).toString(),
      },
      errors: {
        start: null,
        end: null,
      },
      format,
      preset: 'yesterday',
    };
  }

  getAvailableRanges = (translations) => {
    return [
      {
        text: translations.yesterday,
        value: 'yesterday',
      },
      {
        text: translations.lastSevenDays,
        value: 'last_seven_days',
      },
      {
        text: translations.lastMonth,
        value: 'last_month',
      },
      {
        text: translations.thisMonth,
        value: 'this_month',
      },
      {
        text: translations.thisYear,
        value: 'this_year',
      },
      {
        text: translations.custom,
        value: 'custom',
      },
    ];
  }

  handleChangeDates = (value) => {
    const { format } = this.props;
    this.setState({
      dates: {
        startDate: moment(value.startDate, this.props.format).format(format).toString(),
        endDate: moment(value.endDate, this.props.format).format(format).toString(),
      },
      preset: 'custom',
    });
  }

  selectRelativeDate = (value) => {
    const format = this.props.format;

    let startDate;
    let endDate;

    switch (value) {
      case 'yesterday': {
        startDate = moment().add(-1, 'days').format(format).toString();
        endDate = moment().add(-1, 'days').format(format).toString();
        break;
      }
      case 'last_seven_days': {
        startDate = moment().add(-7, 'days').format(format).toString();
        endDate = moment().add(-1, 'days').format(format).toString();
        break;
      }
      case 'last_month': {
        startDate = moment().add(-30, 'days').format(format).toString();
        endDate = moment().add(-1, 'days').format(format).toString();
        break;
      }
      case 'this_month': {
        startDate = moment().startOf('month').format(format).toString();
        endDate = moment().add(-1, 'days').format(format).toString();
        break;
      }
      case 'this_year': {
        startDate = moment().startOf('year').format(format).toString();
        endDate = moment().add(-1, 'days').format(format).toString();
        break;
      }
      case 'custom':
      default: {
        startDate = this.state.dates.startDate;
        endDate = this.state.dates.endDate;
        break;
      }
    }

    this.setState({
      dates: {
        startDate,
        endDate,
      },
      preset: value,
    });
  }

  handleChangeDateText = (key) => (event) => {
    const val = cloneDeep(event.target.value);
    if (!isValidDate(val, this.props.format)) {
      this.setState({
        dates: {
          ...this.state.dates,
          [key]: val,
        },
      });
      return;
    }
    const dataRanges = {
      ...this.state.dataRanges,
      Custom: {
        ...this.state.dataRanges.Custom,
        [key]: (now) => (val !== '' ? this.state.dates[key] : now),
      },
    };
    this.setState({
      dates: {
        ...this.state.dates,
        [key]: moment(val, this.props.format).format(this.state.format).toString(),
      },
      dataRanges,
    });
  }

  validateDateField = (event) => {
    const error = 'Please enter numbers only.';
    const keyCode = event.charCode || event.which;
    if ((keyCode >= 48 && keyCode <= 57) || keyCode === 47) {
      const errors = {
        start: null,
        end: null,
      };

      this.setState({ errors });
      return true;
    } else {
      event.preventDefault();
      const errors = { ...this.state.errors };
      errors[event.target.id] = error;
      this.setState({ errors });
      return false;
    }
  }

  get fromLabelContent() {
    const { errors } = this.state;
    return (
      <span>
        {this.props.translations.from}
        {errors.start && <div className="message-error">{errors.start}</div>}
      </span>
    );
  }

  get toLabelContent() {
    const { errors } = this.state;
    return (
      <span>
        {this.props.translations.to}
        {errors.to && <div className="message-error">{errors.to}</div>}
      </span>
    );
  }

  get dateRanges() {
    return this.ranges.map(({ value, text }) => {
      const rangeClasses = classNames('rdr-PredefinedRangesItem', {
        'rdr-PredefinedRangesItemActive': value === this.state.preset,
      });

      return (
        <button
          className={rangeClasses}
          key={value}
          onClick={() => { this.selectRelativeDate(value); }}
        >
          {text}
        </button>
      );
    });
  }

  render() {
    const { errors, dates } = this.state;

    return (
      <div className="dual-calendar">
        <div className="dual-calendar__top">
          <div className="rdr-PredefinedRanges">
            {this.dateRanges}
          </div>
          <div className="dual-calendar__pairs">
            <DateRange
              startDate={isValidDate(dates.startDate, this.props.format) ? moment(dates.startDate, this.props.format) : moment()}
              endDate={isValidDate(dates.endDate, this.props.format) ? moment(dates.endDate, this.props.format) : moment()}
              linkedCalendars={false}
              onChange={this.handleChangeDates}
              firstDayOfWeek={1}
              onlyClasses
            />
            <div className="dual-calendar__inputs">
              <TextField
                fieldClass="field"
                htmlFor="start"
                labelContent={this.fromLabelContent}
                labelClass="field-label"
                error={errors.start}
              >
                <input
                  className="field-input"
                  type="text"
                  id="start"
                  pattern="\d{1,2}/\d{1,2}/\d{4}"
                  onKeyPress={this.validateDateField}
                  value={dates.startDate}
                  onChange={this.handleChangeDateText('startDate')}
                />
              </TextField>
              <TextField
                fieldClass="field"
                htmlFor="end"
                labelContent={this.toLabelContent}
                labelClass="field-label"
                error={errors.to}
              >
                <input
                  className="field-input"
                  type="text"
                  id="end"
                  pattern="\d{1,2}/\d{1,2}/\d{4}"
                  onKeyPress={this.validateDateField}
                  value={dates.endDate}
                  onChange={this.handleChangeDateText('endDate')}
                />
              </TextField>
            </div>
          </div>
        </div>
        <div className="dual-calendar__footer">
          <Button extraClass="button-link-inline__small">
            Cancel
          </Button>
          <PrimaryButton category="small">
            Apply
          </PrimaryButton>
        </div>
      </div>
    );
  }
}

DualCalendar.propTypes = {
  format: PropTypes.string,
  translations: PropTypes.object,
};

DualCalendar.defaultProps = {
  format: 'MM/DD/YYYY',
  translations: {
    yesterday: 'Yesterday',
    lastSevenDays: 'Last 7 Days',
    lastWeek: 'Last Week',
    lastThirtyDays: 'Last 30 Days',
    lastMonth: 'Last month',
    thisMonth: 'This Month',
    lastYear: 'Last Year',
    thisYear: 'This Year',
    custom: 'Custom',
    from: 'From',
    to: 'To',
  },
};

export default DualCalendar;
