import React from 'react';
import PropTypes from 'prop-types';

import cardGraphics from './data/cardGraphics';

import './CardType.scss';

const CardType = ({ type, abbreviation }) => {
  if (cardGraphics[abbreviation]) {
    return (
      <img
        className="card-type"
        src={cardGraphics[abbreviation]}
        alt={type}
        title={type}
      />
    );
  } else {
    return (
      <span
        title={type}
        className="card-type card-type__not-found"
      >
        {abbreviation}
      </span>
    );
  }
};

CardType.propTypes = {
  type: PropTypes.string.isRequired,
  abbreviation: PropTypes.string.isRequired,
};

export default CardType;
