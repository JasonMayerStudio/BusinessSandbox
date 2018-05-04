import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StarIcon from 'Components/icons/StarIcon';
import Button from 'Components/Button';

import FavoriteListItem from './GDHierarchySelectorFavoriteListItem';
import './GDHierarchySelectorFavoriteList.scss';

const GDHierarchySelectorFavoriteList = (props) => {
  const { extraClass, numberSelected, savedSelections, onSave, onSelectionsListClick } = props;
  const wrapperClass = classnames('gd-hierarchy-selector-favorite-list', {
    [extraClass]: extraClass,
  });
  const noSavedSelectionsText = 'Sorry, you don\'t have any Saved Selections';

  let displayFavoritesList;
  if (savedSelections.length > 0) {
    displayFavoritesList = savedSelections.map((fav) => (
      <FavoriteListItem
        key={`${fav.name}_${fav.ids.length}`}
        name={fav.name}
        merchants={fav.ids.length}
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
          To create a Saved Selection, search for Merchant Numbers
          you would like to save then click Save Selections.
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
          View Selections
        </Button>
      </div>
      <Button
        extraClass="right-section"
        action={onSave}
      >
        <StarIcon /> Save Selections
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
};

GDHierarchySelectorFavoriteList.defaultProps = {
  extraClass: '',
  numberSelected: 0,
  savedSelections: [],
  onSave: () => { },
  onSelectionsListClick: () => { },
};

export default GDHierarchySelectorFavoriteList;
