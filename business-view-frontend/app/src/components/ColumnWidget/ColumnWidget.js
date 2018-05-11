import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinkInlineButton from 'Components/Button/LinkInlineButton';
import DragHandleIcon from 'Components/icons/DragHandleIcon';
import EyeIcon from 'Components/icons/EyeIcon';
import InformationBubble from 'Components/information-bubble';

import './ColumnWidget.scss';

const ColumnWidget = ({
  actions,
  children,
  desc,
  extraClass,
  identifier,
  isSelected,
  isHidden,
  name,
  readOnly,
  required,
  toggleVisibility,
  animate,
  id,
  showVisibility,
}) => {
  const wrapperClass = classnames('column-widget', {
    [extraClass]: extraClass,
    'read-only': readOnly,
    unselected: !isSelected,
    animate,
  });
  const tooltip = desc && <InformationBubble info position="right" tooltipContent={desc} tooltipTitle={name} id={identifier.toString()} />;
  const visibilityClass = isHidden ? 'visibility--hidden' : 'visibility';
  const toggleVisibilityHandler = () => {
    toggleVisibility(identifier);
  };

  const actionList = (required === false && actions && actions.length)
    ? actions.map((action, index) => {
      return (
        <LinkInlineButton
          id={`${id}_${name}_btn_${action.icon().props.className}`}
          action={() => { action.callback(identifier); }}
          extraClass="column-widget__action-button"
          key={identifier.toString() + index} // eslint-disable-line react/no-array-index-key
        >
          {action.icon()}
        </LinkInlineButton>
      );
    })
    : null;

  return (
    <div className={wrapperClass}>
      {
        isSelected && <DragHandleIcon />
      }
      <div className="column-widget__identity">
        <div id={`${id}_${name}_lbl`}>
          <span className="column-widget__name">{name}</span>
          <span className="column-widget__children">{children}</span>
        </div>
        {tooltip}
      </div>
      <div className="column-widget__actions">
        {
          showVisibility && isSelected &&
          typeof toggleVisibility === 'function' &&
          <LinkInlineButton
            id={`${id}_${name}_btn_eye`}
            action={toggleVisibilityHandler}
            extraClass={visibilityClass}
          >
            <EyeIcon slash={isHidden} />
          </LinkInlineButton>
        }
        {actionList}
      </div>
    </div>
  );
};

ColumnWidget.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      callback: PropTypes.func,
      icon: PropTypes.func,
    }),
  ),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  desc: PropTypes.string,
  extraClass: PropTypes.string,
  identifier: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  isSelected: PropTypes.bool,
  isHidden: PropTypes.bool,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  toggleVisibility: PropTypes.func,
  animate: PropTypes.bool,
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  showVisibility: PropTypes.bool,
};

ColumnWidget.defaultProps = {
  actions: [],
  children: null,
  desc: '',
  extraClass: '',
  isSelected: false,
  isHidden: false,
  readOnly: false,
  toggleVisibility: null,
  required: false,
  animate: false,
  id: '',
  showVisibility: true,
};

export default ColumnWidget;
