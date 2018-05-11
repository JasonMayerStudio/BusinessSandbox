import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from 'Components/icons/StarIcon';
import RemoveIcon from 'Components/icons/CloseIcon';

const GDHierarchySelectorFavoriteListItem = (props) => {
  const { name, numberSelected, translations } = props;
  const numberSelectedText = `${numberSelected} ${translations.itemsTitle}${numberSelected > 1 ? translations.pluralText : ''}`;

  return (
    <div className="gd-hierarchy-selector-favorite-list__item">
      <div className="gd-hierarchy-selector-favorite-list__item-left">
        <div className="gd-hierarchy-selector__sub-icon-container">
          <div className="gd-hierarchy-selector__sub-icon"><StarIcon filled /></div>
        </div>
        {name}
      </div>
      <div className="gd-hierarchy-selector-favorite-list__item-right">
        {numberSelectedText}
        <div className="remove-icon">
          <RemoveIcon />
        </div>
      </div>
    </div>
  );
};

GDHierarchySelectorFavoriteListItem.propTypes = {
  name: PropTypes.string,
  numberSelected: PropTypes.number,
  translations: PropTypes.object.isRequired,
};

GDHierarchySelectorFavoriteListItem.defaultProps = {
  name: '',
  numberSelected: 0,
};

export default GDHierarchySelectorFavoriteListItem;
