import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'react-aria-menubutton';
import classnames from 'classnames';
import CheckIcon from 'Components/icons/check-icon/CheckIcon.js';

const WithIcon = ({ item, selectedItem }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    {item.text}
    {selectedItem === item ? <CheckIcon /> : null}
  </div>
);

WithIcon.propTypes = {
  item: PropTypes.object,
  selectedItem: PropTypes.object,
};

WithIcon.defaultProps = {
  item: {},
  selectedItem: {},
};

const WithFilter = ({ item }) => (
  <div>
    <strong>Filter By:</strong>
    {item.text}
  </div>
);

WithFilter.propTypes = {
  item: PropTypes.object,
};

WithFilter.defaultProps = {
  item: {},
};

const MenuItemsElements = ({ dataList, name, selectedItem, type }) => {
  return (
    <div>
      {dataList.map((item, index) => {
        const variations = {
          withIcon: <WithIcon item={item} selectedItem={selectedItem} />,
          withFilter: <WithFilter item={item} selectedItem={selectedItem} />,
        };
        const key = `${item.value}-${index}`;
        const isSelected = selectedItem && selectedItem.value === item.value;
        const itemClass = classnames('select-menu-option', {
          'is-selected': isSelected,
        });
        return (
          <li className="select-menu-options-wrapper" key={key}>
            <MenuItem
              className={itemClass}
              value={item.value}
              text={item.text}
              data-name={name}
            >
              <div>
                {type ? <div>{variations[type]}</div> : <div>{item.text}</div>}
              </div>
            </MenuItem>
          </li>
        );
      })}
    </div>
  );
};

MenuItemsElements.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      text: PropTypes.string,
    }),
  ).isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selectedItem: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    text: PropTypes.string,
  }),
  type: PropTypes.string,
};

MenuItemsElements.defaultProps = {
  name: 0,
  selectedItem: undefined,
  type: '',
};

export default MenuItemsElements;
