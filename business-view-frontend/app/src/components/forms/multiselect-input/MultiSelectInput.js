import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import classnames from 'classnames';

import './MultiSelectInput.scss';
import CheckCircleIcon from '../../icons/check-circle-icon/CheckCircleIcon';

const MultiSelectInput = ({
  dataList,
  handleSelection,
  selectedItem,
  promptText,
  wrapperClass,
  extraClass,
  isDisabled,
  label,
  name,
  id,
}) => {
  function getHtmlizedItem(item) {
    return (
      <span
        dangerouslySetInnerHTML={{ __html: item }} // eslint-disable-line react/no-danger
      />
    );
  }

  function getCommSeparateSpan(items) {
    const selectedItems = items.map((obj) => { return obj.text; }).join(',');
    return (
      <span
        dangerouslySetInnerHTML={{ __html: selectedItems }} // eslint-disable-line react/no-danger
      />
    );
  }

  const classNames = classnames(`select-menu ${wrapperClass}`, {
    [`${extraClass}`]: extraClass,
    'is-disabled': isDisabled,
  });

  const menuTriggerClasses = classnames('dropdown-menu-trigger', {
    'is-disabled': isDisabled,
  });


  const menuItemElements = dataList.map((item) => {
    const isSelected = selectedItem && selectedItem.find((map) => { return map.value === item.value; });

    const itemClass = classnames('select-menu-option', {
      'is-selected': isSelected,
    });
    return (
      <li className="select-menu-options-wrapper" key={item.value} >
        <MenuItem className={itemClass} value={item.value} text={item.text} data-name={name}>
          {item.text}
          {isSelected &&
            <span className="select-menu-option-check">
              <CheckCircleIcon />
            </span>
          }
        </MenuItem>
      </li>
    );
  });

  return (
    <Wrapper
      className={classNames}
      onSelection={handleSelection}
      closeOnSelection={false}
    >
      {label !== ''
        ? <label htmlFor={`${label}`} className="field-label">{label}</label>
        : ''
      }

      <Button
        id={`${id}_btn_showPage`}
        className={menuTriggerClasses}
        disabled={isDisabled}
      >
        <div className="ellipsis">
          {selectedItem && selectedItem.length
          ? getCommSeparateSpan(selectedItem)
          : getHtmlizedItem(promptText)}
        </div>
      </Button>

      <Menu>
        { (
          <ul className="select-menu-options">{menuItemElements}</ul>
        )}
      </Menu>
    </Wrapper>
  );
};

MultiSelectInput.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    }),
  ).isRequired,
  handleSelection: PropTypes.func.isRequired,
  promptText: PropTypes.string,
  selectedItem: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
  })),
  wrapperClass: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  id: PropTypes.string,
};

MultiSelectInput.defaultProps = {
  promptText: 'select',
  selectedItem: [],
  extraClass: '',
  isDisabled: false,
  label: '',
  name: 0,
  id: '',
};

export function findItem(list, selectedValue) {
  return list.find((item) => item.value === selectedValue);
}

export default MultiSelectInput;
