import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import InformationBubble from 'Components/information-bubble/InformationBubble';
import SelectInput from 'Components/forms/select-input/SelectInput';
import TextareaInput from 'Components/forms/textarea-input/TextareaInput';
import TextField from './TextField.js';

const reportList = [
  {
    value: 'batches',
    text: 'Batches',
  },
  {
    value: 'settled-transactions',
    text: 'Settled Transactions',
  },
  {
    value: 'chargebacks',
    text: 'Chargebacks',
  },
  {
    value: 'authorizations',
    text: 'Authorizations',
  },
];

const greetingList = [
  {
    value: 'hello',
    text: 'Hello',
  },
  {
    value: 'goodbye',
    text: 'Goodbye',
  },
];

class TextFieldDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: reportList[0],
      selectedGreeting: greetingList[0],
      error: '',
    };
  }

  handleReportSelection = (value, event) => {
    event.stopPropagation();
    const newSelection = reportList.find((item) => { return item.value === value; });
    if (newSelection) {
      this.setState({ selectedItem: newSelection });
    }
  }

  handleGreetingSelection = (value, event) => {
    event.stopPropagation();
    const newSelection = greetingList.find((item) => { return item.value === value; });
    if (newSelection) {
      this.setState({ selectedGreeting: newSelection });
    }
  }

  get textareaLabelContent() {
    return (
      <span>
        Report Description
        {this.state.error && <span className="message-error">{this.state.error}</span>}
      </span>
    );
  }

  get selectInputLabelContent() {
    return (
      <span>
        Hello Goodbye
        <InformationBubble
          info
          position="top"
          tooltipTitle="Hello goodbye"
          tooltipContent="You say goodbye and I say hello, Hello hello, I don't know why you say goodbye, I say hello"
        />
      </span>
    );
  }

  render() {
    return (
      <Page>
        <h2>TextField</h2>

        <p>Use this component for allowing user to input, edit, and select text. A TextField includes label and a type of input field, including: TextInput, SelectInput, TextAreaInput, amongst other custom input types that can be found in this section of the styleguide.</p>

        <ReactSpecimen span={3}>
          <TextField
            fieldClass="field field--fixed-width"
            htmlFor="select-report"
            labelContent="Select Report"
            labelClass="field-label"
          >
            <SelectInput
              id="select-report"
              dataList={reportList}
              handleSelection={this.handleReportSelection}
              selectedItem={this.state.selectedItem}
              wrapperClass="select-menu__form"
            />
          </TextField>
        </ReactSpecimen>

        <ReactSpecimen span={3}>
          <TextField
            fieldClass="field field--fixed-width"
            htmlFor="hello-goodbye"
            labelContent={this.selectInputLabelContent}
            labelClass="field-label"
          >
            <SelectInput
              id="hello-goodbye"
              dataList={greetingList}
              handleSelection={this.handleGreetingSelection}
              selectedItem={this.state.selectedGreeting}
              wrapperClass="select-menu__form"
            />
          </TextField>
        </ReactSpecimen>

        <ReactSpecimen span={3}>
          <TextField
            fieldClass="field"
            error={this.state.error}
            htmlFor="report-description"
            labelContent={this.textareaLabelContent}
            labelClass="field-label"
          >
            <TextareaInput
              name="report-description"
              placeholder="This report details Batch refunds lorem ipsum dolor"
              onChange={() => {}}
            />
          </TextField>
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>htmlFor</strong>: the ID of the label&apos;s associated control element</li>
          <li><strong>labelContent</strong>: content to be nested within label HTML element. Usually a string, but can also include an element, such as an InformationBubble component for informational or error message states.</li>
          <li><strong>children</strong>: the appropriate input type component, such as TextInput or TextareaInput</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>fieldClass</strong>: class name for direct parent div element wrapping the Label and input components; default is &apos;field&apos;.</li>
          <li><strong>labelClass</strong>: class name for label HTML element; default is &apos;field-label&apos;</li>
          <li><strong>fieldErrorClass</strong>: class name for direct parent div element wrapping the Label and input components should there be an error state.</li>
          <li><strong>error</strong>: if the presence of an error is detected (i.e., error is not an empty string), the field should be rendered with an error state.</li>
        </ul>

      </Page>
    );
  }
}

export default TextFieldDoc;
