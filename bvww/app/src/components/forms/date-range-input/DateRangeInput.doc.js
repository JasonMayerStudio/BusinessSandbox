import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import moment from 'moment';

import DateRangeInput from './DateRangeInput.js';

export default class DateRangeInputInputDoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [
        {
          id: 8,
          startDate: null,
          endDate: null,
        },
        {
          id: 15,
          startDate: moment(),
          endDate: moment(),
        },
      ],
    };

    this.attachBindings();
  }

  onDateChange(id, selector, date) {
    const key = (selector === 'end') ? 'endDate' : 'startDate';
    const dates = this.state.dates.map((dt) => {
      if (dt.id === id) {
        return Object.assign({}, dt, { [key]: date || '' });
      } else {
        return dt;
      }
    });

    this.setState({ dates });
  }

  attachBindings() {
    this.onDateChange = this.onDateChange.bind(this);
  }

  render() {
    return (
      <Page>
        <h2>Date Range</h2>

        <p>Use to capture a range of dates.</p>

        <ReactSpecimen span={3}>
          <DateRangeInput
            id={this.state.dates[0].id}
            onDateChange={this.onDateChange}
            title="Date Mailed"
            startDate={this.state.dates[0].startDate}
            endDate={this.state.dates[0].endDate}
            minDate={moment().subtract(3, 'months')}
          />
        </ReactSpecimen>

        <ReactSpecimen span={3}>
          <DateRangeInput
            id={this.state.dates[1].id}
            onDateChange={this.onDateChange}
            title="Date Received"
            startDate={this.state.dates[1].startDate}
            endDate={this.state.dates[1].endDate}
            dateFormat="DD/MM/YYYY"
          />
        </ReactSpecimen>

        <p>
          <strong>Date Mailed Start Date</strong>: {this.state.dates[0].startDate && this.state.dates[0].startDate.format('MM/DD/YYYY')}
          <br />
          <strong>Date Mailed End Date</strong>: {this.state.dates[0].endDate && this.state.dates[0].endDate.format('MM/DD/YYYY')}
        </p>

        <p>
          <strong>Date Received Start Date</strong>: {this.state.dates[1].startDate && this.state.dates[1].startDate.format('MM/DD/YYYY')}
          <br />
          <strong>Date Received End Date</strong>: {this.state.dates[1].endDate && this.state.dates[1].endDate.format('MM/DD/YYYY')}
        </p>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>id</strong>: a unique identifier used to build HTML IDs for the custom control</li>
          <li><strong>onChangeStart</strong>: a callback that searched a corresponding Starting DateRangeInput</li>
          <li><strong>onChangeEnd</strong>: a callback that searched a corresponding End of DateRangeInput</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>error</strong>: an error explaining when something went wrong</li>
          <li><strong>title</strong>: title of the currency range-fields</li>
          <li><strong>startDate</strong>: starting Date of Range</li>
          <li><strong>endDate</strong>: ending Date of Range</li>
          <li><strong>dateFormat</strong>: either MM/DD/YYYY (the default) or DD/MM/YYYY</li>
          <li><strong>minDate</strong>: moment object of minimum allowed date, or empty string if no limit</li>
        </ul>

      </Page>
    );
  }
}
