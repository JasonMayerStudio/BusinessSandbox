import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from 'Components/icons/StarIcon';
import RemoveIcon from 'Components/icons/CloseIcon';

const GDHierarchySelectorFavoriteListItem = (props) => {
  const { name, merchants } = props;

  return (
    <div className="gd-hierarchy-selector-favorite-list__item">
      <div className="gd-hierarchy-selector-favorite-list__item-left">
        <div className="gd-hierarchy-selector__sub-icon-container">
          <div className="gd-hierarchy-selector__sub-icon"><StarIcon filled /></div>
        </div>
        {name}
      </div>
      <div className="gd-hierarchy-selector-favorite-list__item-right">
        {merchants} Merchant Number{merchants > 1 ? 's' : ''}
        <div className="remove-icon">
          <RemoveIcon />
        </div>
      </div>
    </div>
  );
};

GDHierarchySelectorFavoriteListItem.propTypes = {
  name: PropTypes.string,
  merchants: PropTypes.number,
};

GDHierarchySelectorFavoriteListItem.defaultProps = {
  name: '',
  merchants: 1,
};

export default GDHierarchySelectorFavoriteListItem;
