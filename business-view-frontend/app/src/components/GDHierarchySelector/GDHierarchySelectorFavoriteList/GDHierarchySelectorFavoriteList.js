import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StarIcon from 'Components/icons/StarIcon';
import Button from 'Components/Button';

import FavoriteListItem from './GDHierarchySelectorFavoriteListItem';
import './GDHierarchySelectorFavoriteList.scss';

const GDHierarchySelectorFavoriteList = (props) => {
  const { extraClass, numberSelected, savedSelections, onSave, onSelectionsListClick, translations } = props;
  const wrapperClass = classnames('gd-hierarchy-selector-favorite-list', {
    [extraClass]: extraClass,
  });
  const noSavedSelectionsText = translations.noSavedSelections;

  let displayFavoritesList;
  if (savedSelections.length > 0) {
    displayFavoritesList = savedSelections.map((fav) => (
      <FavoriteListItem
        key={`${fav.name}_${fav.ids.length}`}
        name={fav.name}
        numberSelected={fav.ids.length}
        translations={translations}
      />
    ));
  } else {
    displayFavoritesList = (
      <div className="gd-hierarchy-selector-favorite__empty_saved_selections">
        <div className="large-gray-icon"><StarIcon /></div>
        <div className="gd-hierarchy-selector-favorite__empty-description-heading">
          {noSavedSelectionsText}
        </div>
        <div className="gd-hierarchy-selector-favorite__empty-description">
          {translations.createSavedSelection}
        </div>
      </div>
    );
  }

  const displayUnsavedSelections = (
    <div className="gd-hierarchy-selector-favorite__unsaved-selections">
      <div className="left-section">
        <span>You have {numberSelected} unsaved selections</span>
        <span className="separator">|</span>
        <Button
          action={onSelectionsListClick}
        >
          {translations.viewSelections}
        </Button>
      </div>
      <Button
        extraClass="right-section"
        action={onSave}
      >
        <StarIcon /> {translations.saveSelections}
      </Button>
    </div>
  );

  return (
    <div className="gd-hierarchy-selector-favorite">
      {numberSelected > 0 ? displayUnsavedSelections : null}
      <div className={wrapperClass}>
        {displayFavoritesList}
      </div>
    </div>
  );
};

GDHierarchySelectorFavoriteList.propTypes = {
  extraClass: PropTypes.string,
  numberSelected: PropTypes.number,
  savedSelections: PropTypes.array,
  onSave: PropTypes.func,
  onSelectionsListClick: PropTypes.func,
  translations: PropTypes.object.isRequired,
};

GDHierarchySelectorFavoriteList.defaultProps = {
  extraClass: '',
  numberSelected: 0,
  savedSelections: [],
  onSave: () => { },
  onSelectionsListClick: () => { },
};

export default GDHierarchySelectorFavoriteList;
