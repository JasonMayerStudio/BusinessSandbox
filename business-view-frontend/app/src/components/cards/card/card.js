import React from 'react';
import PropTypes from 'prop-types';

import SmallButton from 'Components/Button/SmallButton';

import './card.scss';

const Card = ({ title, description, primaryAction, primaryActionText }) => {
  return (
    <div className="card">
      <span className="card-square__info">
        <span className="card-square__title">{title}</span>
        <span className="card-square__description">{description}</span>
      </span>
      <SmallButton action={primaryAction}>
        {primaryActionText}
      </SmallButton>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  primaryAction: PropTypes.func.isRequired,
  primaryActionText: PropTypes.string.isRequired,
};

export default Card;
