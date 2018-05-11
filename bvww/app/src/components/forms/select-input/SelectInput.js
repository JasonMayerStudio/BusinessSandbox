import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import classnames from 'classnames';

import './SelectInput.scss';

const SelectInput = ({
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
  const isActivated = selectedItem && selectedItem.value === 'activated';
  const isDeactivated = selectedItem && selectedItem.value === 'deactivated';
  const isPending = selectedItem && selectedItem.value === 'pending-invite';

  function getHtmlizedItem(item) {
    const activationClasses = classnames({
      'is-badge': isActivated || isDeactivated,
      'is-activated': isActivated && selectedItem.value === item.toLowerCase(),
      'is-deactivated':
        isDeactivated && selectedItem.value === item.toLowerCase(),
    });

    return (
      <span
        className={activationClasses}
        dangerouslySetInnerHTML={{ __html: item }} // eslint-disable-line react/no-danger
      />
    );
  }

  const classNames = classnames(`select-menu ${wrapperClass}`, {
    [`${extraClass}`]: extraClass,
    'is-disabled': isDisabled,
  });

  const menuTriggerClasses = classnames('dropdown-menu-trigger', {
    'is-badge': isActivated || isDeactivated,
    activated: isActivated,
    deactivated: isDeactivated,
    pending: isPending,
    'is-disabled': isDisabled,
  });

  const menuItemElements = dataList.map((item, index) => {
    const key = `${item.value}-${index}`;
    const isSelected = selectedItem && selectedItem.value === item.value;
    const itemClassWrap = classnames('select-menu-options-wrapper', {
      'is-separator': item.separator,
    });

    const itemClass = classnames('select-menu-option', {
      'is-selected': isSelected,
      'is-important': item.important,
    });

    return (
      <li className={itemClassWrap} key={key}>
        <MenuItem className={itemClass} value={item.value} text={item.text} data-name={name}>
          {getHtmlizedItem(item.text)}
        </MenuItem>
      </li>
    );
  });

  return (
    <Wrapper
      className={classNames}
      onSelection={handleSelection}
    >
      {label !== ''
        ? <label htmlFor={`${label}`} className="field-label">{label}</label>
        : ''
      }
      <Button id={`${id}_btn_showPage`} className={menuTriggerClasses} disabled={isDisabled}>
        {selectedItem && selectedItem.text !== ''
          ? getHtmlizedItem(selectedItem.text)
          : getHtmlizedItem(promptText)}
      </Button>
      <Menu>
        {!isPending && (
          <ul className="select-menu-options">{menuItemElements}</ul>
        )}
      </Menu>
    </Wrapper>
  );
};

SelectInput.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    }),
  ).isRequired,
  handleSelection: PropTypes.func.isRequired,
  promptText: PropTypes.string,
  selectedItem: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
  }),
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

SelectInput.defaultProps = {
  promptText: 'Choose one',
  selectedItem: undefined,
  extraClass: '',
  isDisabled: false,
  label: '',
  name: 0,
  id: '',
};

export function findItem(list, selectedValue) {
  return list.find((item) => item.value === selectedValue);
}

export default SelectInput;
