import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CreditCardInput from 'Components/forms/credit-card-input/CreditCardInput.js';
import CurrencyRangeInput from 'Components/forms/currency-range-input/CurrencyRangeInput.js';
import DateRangeInput from 'Components/forms/date-range-input/DateRangeInput.js';
import TextInput from 'Components/forms/text-input/TextInput.js';
import SelectInput from 'Components/forms/select-input/SelectInput.js';

import './GDFilterElement.scss';

const GDFilterElement = ({
  currentValues,
  extraClass,
  filter,
  onChange,
  onRangeChange,
  translations,
  handleSelection,
  handleSingleSelection,
}) => {
  const wrapperClass = classnames('gd-filter-element', {
    [extraClass]: extraClass,
  });

  let inputComponent;

  switch (filter.filterType) {

    case 'SELECT': {
      const inputValues = filter.filterValues.map((obj) => {
        return Object.assign({},
          { id: obj.id },
          { value: obj.value },
          { text: obj.valueLabel },
          { desc: obj.desc },
          { filterValueGroupId: obj.filterValueGroupId },
        );
      });

      const selectedFilterValue = (currentValues &&
        currentValues.v1 &&
        currentValues.v1.length)
        ? filter.filterValues.find((fVal) => {
          return fVal.value === currentValues.v1;
        })
        : null;

      const selectedItem = (selectedFilterValue)
        ? { value: selectedFilterValue.value, text: selectedFilterValue.valueLabel }
        : null;

      const choosePrompt = `${translations.select} ${filter.name}`;

      inputComponent = (
        <SelectInput
          name={filter.id}
          key={filter.id}
          dataList={inputValues}
          promptText={choosePrompt}
          wrapperClass="select-menu__form"
          label={filter.name}
          handleSelection={handleSingleSelection}
          selectedItem={selectedItem}
        />
      );
      break;
    }

    case 'MULTISELECT': {
      const inputValues = filter.filterValues.map((obj) => {
        return Object.assign({},
          { id: obj.id },
          { value: obj.value },
          { text: obj.valueLabel },
          { desc: obj.desc },
          { filterValueGroupId: obj.filterValueGroupId },
        );
      });

      const selectedFilterValue = (currentValues &&
        currentValues.v1 &&
        currentValues.v1.length)
        ? filter.filterValues.find((fVal) => {
          return fVal.value === currentValues.v1[0];
        })
        : null;

      const selectedItem = (selectedFilterValue)
        ? { value: selectedFilterValue.value, text: selectedFilterValue.valueLabel }
        : null;

      const choosePrompt = `${translations.select} ${filter.name}`;

      inputComponent = (
        <SelectInput
          // @todo handleSelection
          name={filter.id}
          key={filter.id}
          dataList={inputValues}
          promptText={choosePrompt}
          wrapperClass="select-menu__form"
          label={filter.name}
          handleSelection={handleSelection}
          selectedItem={selectedItem}
        />
      );
      break;
    }
    case 'CURRENCY': {
      inputComponent = (
        <CurrencyRangeInput
          id={filter.id}
          key={filter.id}
          filterLow={currentValues.v1}
          filterHigh={currentValues.v2}
          onChange={onRangeChange}
          title={filter.name}
          separatorText={translations.to}
        />
      );
      break;
    }
    case 'CC_NUMBER': {
      // @todo refactor handling credit card filter change events
      inputComponent = (
        <CreditCardInput
          id={filter.id}
          key={filter.id}
          label={filter.name}
          onSelectChange={null}
          onChange={onRangeChange}
          v1={currentValues.v1}
          v2={currentValues.v2}
        />
      );
      break;
    }
    case 'DATE': {
      // @TODO we should not have to do this, but since the API is not returning
      // the actual values, here it is.
      if (currentValues.v1 === 'last_seven_days') {
        let startDate = new Date();
        let endDate = new Date();
        startDate = startDate.setDate(startDate.getDate() - 8);
        endDate = endDate.setDate(endDate.getDate() - 1);

        inputComponent = (
          <DateRangeInput
            id={filter.id}
            key={filter.id}
            onDateChange={onRangeChange}
            title={filter.name}
            startDate={new Date(startDate)}
            endDate={new Date(endDate)}
            separatorText={translations.to}
          />
        );
      } else {
        inputComponent = (
          <DateRangeInput
            id={filter.id}
            key={filter.id}
            onDateChange={onRangeChange}
            title={filter.name}
            startDate={currentValues.v1}
            endDate={currentValues.v2}
            separatorText={translations.to}
          />
        );
      }
      break;
    }
    case 'STRING':
    default: {
      inputComponent = (
        <TextInput
          key={filter.id}
          name={filter.id}
          label={filter.name}
          type="text"
          onChange={onChange}
          placeholder=""
          value={currentValues.v1}
        />
      );
    }
  }

  return (
    <div className={wrapperClass}>
      {inputComponent}
    </div>
  );
};

GDFilterElement.propTypes = {
  currentValues: PropTypes.object,
  extraClass: PropTypes.string,
  filter: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onRangeChange: PropTypes.func.isRequired,
  translations: PropTypes.object,
  handleSelection: PropTypes.func,
  handleSingleSelection: PropTypes.func,
};

GDFilterElement.defaultProps = {
  currentValues: {},
  extraClass: '',
  translations: {
    select: 'Select',
    to: 'To',
  },
  handleSelection: () => { },
  handleSingleSelection: () => { },
};

export default GDFilterElement;
