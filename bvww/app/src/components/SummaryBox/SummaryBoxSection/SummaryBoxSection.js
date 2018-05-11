import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import HollowButton from 'Components/Button/HollowButton';

import './SummaryBoxSection.scss';

const SummaryBoxSection = ({
  buttonAction,
  buttonText,
  children,
  extraClass,
  identifier,
  title,
}) => {
  const wrapperClass = classnames('summary-box__section', {
    [extraClass]: extraClass,
  });

  const buttonHandler = () => {
    buttonAction(identifier);
  };

  return (
    <div className={wrapperClass}>
      <div className="left">
        <h3>{title}</h3>
        <div className="summary-box__section-details">
          {children}
        </div>
      </div>
      <div className="right">
        {
          buttonText &&
          buttonAction &&
          <HollowButton
            action={buttonHandler}
          >
            {buttonText}
          </HollowButton>
        }
      </div>
    </div>
  );
};

SummaryBoxSection.propTypes = {
  buttonAction: PropTypes.func,
  buttonText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  extraClass: PropTypes.string,
  identifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

SummaryBoxSection.defaultProps = {
  buttonAction: null,
  buttonText: '',
  children: null,
  extraClass: '',
};

export default SummaryBoxSection;
