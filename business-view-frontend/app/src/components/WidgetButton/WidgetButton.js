import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import PlusIcon from 'Components/icons/PlusIcon';

import './WidgetButton.scss';

const WidgetButton = ({
  action,
  children,
  extraClass,
  iconType,
}) => {
  const wrapperClass = classnames('widget-button', {
    [extraClass]: extraClass,
  });

  const icons = [
    {
      key: 'plus',
      component: PlusIcon,
    },
  ];

  const iconToUse = icons.find((icon) => icon.key === iconType);

  const contents = (iconToUse)
    ? (
      <span className="widget-button__icon-content">
        {(iconToUse.component)()}
        <span className="widget-button__icon-text">{children}</span>
      </span>
    )
    : children;

  return (
    <button
      className={wrapperClass}
      onClick={action}
    >
      {contents}
    </button>
  );
};

WidgetButton.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  extraClass: PropTypes.string,
  iconType: PropTypes.oneOf(['plus']),
};

WidgetButton.defaultProps = {
  children: null,
  extraClass: '',
  iconType: null,
};

export default WidgetButton;
