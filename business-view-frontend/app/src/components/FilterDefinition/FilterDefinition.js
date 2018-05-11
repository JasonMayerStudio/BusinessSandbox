import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ChevronDownIcon from 'Components/icons/ChevronDownIcon';
import ChevronUpIcon from 'Components/icons/ChevronUpIcon';
import CloseIcon from 'Components/icons/CloseIcon';
import PlusIcon from 'Components/icons/PlusIcon';
import ColumnWidget from 'Components/ColumnWidget';
import HollowButton from 'Components/Button/HollowButton';
import LockIcon from 'Components/icons/LockIcon';
import PrimaryButton from 'Components/Button/PrimaryButton';

import './FilterDefinition.scss';

const FilterDefinition = ({
  addHandler,
  children,
  column,
  extraClass,
  isOpen,
  removeHandler,
  saveHandler,
  toggleHandler,
}) => {
  const wrapperClass = classnames('filter-definition', {
    [extraClass]: extraClass,
    'is-open': isOpen,
  });

  const actionsList = [];

  if (removeHandler) {
    actionsList.push({
      callback: removeHandler,
      icon: CloseIcon,
    });
  }
  if (addHandler) {
    actionsList.push({
      callback: addHandler,
      icon: PlusIcon,
    });
  } else if (isOpen) {
    actionsList.push({
      callback: toggleHandler,
      icon: ChevronUpIcon,
    });
  } else {
    actionsList.push({
      callback: toggleHandler,
      icon: ChevronDownIcon,
    });
  }

  const columnWidgetChildren = (column.filterDefault)
    ?
    (
      <span>{column.filter.default} <span className="danger-text" style={{ verticalAlign: 'sub' }}><LockIcon /></span></span>
    )
    :
    null;

  const closeHandler = () => toggleHandler(column.identifier);
  const saveFilterHandler = () => saveHandler(column.identifier);

  return (
    <div className={wrapperClass}>
      <ColumnWidget
        actions={actionsList}
        {...column}
      >
        {columnWidgetChildren}
      </ColumnWidget>
      {
        isOpen &&
        <div className="filter-definition__panel">
          <div className="filter-definition__settings">
            {children}
          </div>
          <div className="filter-definition__footer">
            {
              toggleHandler &&
              <HollowButton
                action={closeHandler}
                extraClass="filter-definition__cancel"
              >
                Cancel
              </HollowButton>
            }
            {
              saveHandler &&
              <PrimaryButton
                action={saveFilterHandler}
                extraClass="filter-definition__save"
              >
                Save
              </PrimaryButton>
            }
          </div>
        </div>
      }
    </div>
  );
};

FilterDefinition.propTypes = {
  addHandler: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  column: PropTypes.shape({
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    desc: PropTypes.string,
    identifier: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  extraClass: PropTypes.string,
  isOpen: PropTypes.bool,
  removeHandler: PropTypes.func,
  saveHandler: PropTypes.func,
  toggleHandler: PropTypes.func,
};

FilterDefinition.defaultProps = {
  addHandler: null,
  children: null,
  extraClass: '',
  isOpen: false,
  removeHandler: null,
  saveHandler: null,
  toggleHandler: null,
};

export default FilterDefinition;
