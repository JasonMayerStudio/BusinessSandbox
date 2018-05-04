import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'react-tooltip';
import classnames from 'classnames';

import InformationIcon from 'Components/icons/information-icon/InformationIcon.js';
import ErrorIcon from 'Components/icons/error-icon/ErrorIcon.js';

import './InformationBubble.scss';

const InformationBubble = ({ error, info, icon, id, tooltipTitle, tooltipContent }) => {
  const infoIcon = <InformationIcon info={info} />;
  const errorIcon = <ErrorIcon error={error} />;

  const tooltipClasses = classnames('tooltip', {
    error,
    info,
  });

  const tooltipIcon = (icon)
    ? <span className="tooltip__icon">{icon}</span>
    : null;

  return (
    <div className="information-bubble__wrapper">
      <span data-tip data-for={id}>
        {info && infoIcon}
        {error && errorIcon}
      </span>
      <Tooltip id={id} className={tooltipClasses}>
        {tooltipIcon}
        {tooltipTitle && <h1 className="headline">{tooltipTitle}</h1>}
        <span className="content">{tooltipContent}</span>
      </Tooltip>
    </div>
  );
};

export default InformationBubble;

InformationBubble.propTypes = {
  error: PropTypes.bool,
  icon: PropTypes.element,
  info: PropTypes.bool,
  tooltipTitle: PropTypes.string,
  tooltipContent: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

InformationBubble.defaultProps = {
  error: false,
  icon: null,
  info: false,
  tooltipTitle: '',
  id: 'icon',
};
