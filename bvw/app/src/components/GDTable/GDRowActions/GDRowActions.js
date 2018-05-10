import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from 'Components/Button';
import OptionBoxPopup from 'Components/OptionBoxPopup';

import './GDRowActions.scss';

const GDRowActions = ({ actions, extraClass, rowId, triggerText }) => {
  const wrapperClass = classnames('gd-table__container-cell gd-row-actions', {
    [extraClass]: extraClass,
  });

  const actionList = actions.map((action) => {
    const extraButtonClass = classnames({
      primary: action.primary,
    });

    return (
      <Button
        action={(e) => {
          e.stopPropagation();
          action.callback(rowId);
        }}
        category="link small"
        key={action.id}
        extraClass={extraButtonClass}
      >
        {action.text}
      </Button>
    );
  });

  return (
    <td className={wrapperClass}>
      <OptionBoxPopup
        id={rowId}
        className={wrapperClass}
        triggerText={triggerText}
      >
        {actionList}
      </OptionBoxPopup>
    </td>
  );
};

GDRowActions.propTypes = {
  actions: PropTypes.array.isRequired,
  extraClass: PropTypes.string,
  rowId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  triggerText: PropTypes.string.isRequired,
};

GDRowActions.defaultProps = {
  extraClass: '',
};

export default GDRowActions;
