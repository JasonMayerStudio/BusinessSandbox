import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { DateUtils } from 'react-day-picker';
import moment from 'moment';
import DualCalendar from './DualCalendar.js';

export default class DualCalendarDoc extends Component {
  constructor() {
    super();

    this.state = {
      from: null,
      to: null,
      currentYear: new Date().getFullYear(),
      initialMonth: new Date(),
      errors: {
        start: null,
        end: null,
      },
      startDate: '',
      endDate: '',
    };
  }

  onDayClick = (day) => {
    if (day !== '') {
      const date = new Date(moment(day, 'MM/DD/YYYY').format('MM/DD/YYYY'));
      const range = DateUtils.addDayToRange(date, this.state);
      this.setState(range, () => {
        this.isDateValid();

        this.moveCalendar();

        if (this.state.from === null && this.state.to === null) {
          this.setState({ startDate: '', endDate: '' });
        }
      });
    }
  }

  onStartDateChange = (event) => {
    const startDate = event.target.value;

    if (startDate.length < 1) this.setState({ startDate: '', from: null });
    else this.setState({ startDate });
  }

  onEndDateChange = (event) => {
    const endDate = event.target.value;

    if (endDate.length < 1) this.setState({ endDate: '', to: null });
    else this.setState({ endDate });
  }

  setInitialMonth = () => {
    const initialMonth = new Date().setFullYear(this.state.currentYear);
    this.setState({ initialMonth: new Date(initialMonth) });
  }

  setMonthOutsideOfRange = (date) => {
    this.setState({
      initialMonth: new Date(date),
    });
  }

  isDayBefore = (day, initialMonth) => {
    const fromDate = day.setHours(0, 0, 0, 0);
    const initialDate = initialMonth.setHours(0, 0, 0, 0);

    if (fromDate < initialDate) this.setMonthOutsideOfRange(this.state.from);
  }

  isDayAfter = (day, initialMonth) => {
    const endDate = day.setHours(0, 0, 0, 0);
    const initialDate = initialMonth.setHours(0, 0, 0, 0);

    if (endDate.getMonth() > initialDate.getMonth() + 1) this.setMonthOutsideOfRange(this.state.to);
  }

  moveCalendar = () => {
    if (this.state.from !== null) this.isDayBefore(this.state.from, this.state.initialMonth);
    if (this.state.to !== null) this.isDayAfter(this.state.to, this.state.intialMonth);
  }

  subtractYear = () => {
    this.setState({
      currentYear: this.state.currentYear - 1,
    },
      () => {
        this.setInitialMonth();
      });
  }

  addYear = () => {
    this.setState({
      currentYear: this.state.currentYear + 1,
    },
      () => {
        this.setInitialMonth();
      });
  }

  isDateValid = () => {
    const invalidDate = 'Invalid start date format. Please enter MM/DD/YYYY.';
    const fromIsInvalid = this.state.from === 'Invalid date';
    const toIsInvalid = this.state.to === 'Invalid date';

    const errors = {
      start: fromIsInvalid ? invalidDate : null,
      end: toIsInvalid ? invalidDate : null,
    };

    this.setState({
      errors,
      from: fromIsInvalid ? null : this.state.from,
      to: toIsInvalid ? null : this.state.to,
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

  render() {
    return (
      <Page>
        <h2>DualCalendar</h2>

        <p>Use this component to capture a range of dates. Date should be formatted according to user preferences.</p>

        <ReactSpecimen span={6}>
          <DualCalendar
            format="MM/DD/YYYY"
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li>none</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>format</strong>: please enter date format as &apos;MM/DD/YYYY&apos;</li>
        </ul>

      </Page>
    );
  }
}
