import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CloseIcon from '../..//icons/CloseIcon';
import Button from '../..//Button';
import Search from '../..//search';
import FavoritesIcon from '../..//icons/StarIcon';
import SearchIcon from '../..//icons/SearchIcon';
import './GDHierarchySelectorSearchManager.scss';
import Badge from '../../badge';

class GDHierarchySelectorSearchManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: props.searchText,
      triggerFavorites: props.triggerFavorites,
    };

    this.attachBindings();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchText !== this.state.searchText) {
      this.setState({
        searchText: nextProps.searchText,
      });
    }
  }

  onSearchTextFocus(searchText) {
    this.props.onSearchTextFocus(searchText);
  }

  onSearchTextChange(searchText) {
    this.setState({
      searchText,
    }, this.props.onSearchTextChange(searchText));
  }

  onClearSearchTextClick() {
    this.onSearchTextChange('');
  }

  attachBindings() {
    this.onClearSearchTextClick = this.onClearSearchTextClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onSearchTextFocus = this.onSearchTextFocus.bind(this);
  }

  render() {
    const { searchText } = this.state;
    const {
      extraClass,
      onFavoritesListClick,
      onRecentSearchListClick,
      onSelectionsListClick,
      triggerFavorites,
      numberSelected,
      translations,
    } = this.props;

    const wrapperClass = classnames('gd-hierarchy-selector-search-manager', {
      [extraClass]: extraClass,
    });

    const numberSelectedBadgeJsx = numberSelected === 0 ? null :
      (
        <Button
          action={onSelectionsListClick}
          category="link-inline"
        >
          <Badge
            badgeType="hierarchy-selector"
          >
            <span className="number-selected">{numberSelected}</span>SELECTED
          </Badge>
        </Button>
      );

    const clearSearchInputButtonJsx = searchText === '' ? null :
      (
        <Button
          action={this.onClearSearchTextClick}
          className="gd-hierarchy-selector-search-manager__clear"
          category="link-inline"
        >
          <CloseIcon />
        </Button>
      );


    return (
      <div className={wrapperClass}>
        <Button
          action={onRecentSearchListClick}
          extraClass="search-btn"
          category="link-inline"
        >
          <SearchIcon />
        </Button>
        {triggerFavorites ?
          '' :
          <div className="search-selection-container">
            <Search
              manager
              filterText={searchText}
              onChange={this.onSearchTextChange}
              onFocus={this.onSearchTextFocus}
              placeholder={translations.refineByItem}
              debounceTimeout={500}
            />
            {clearSearchInputButtonJsx}
            {numberSelectedBadgeJsx}
          </div>
        }
        <Button
          extraClass="favorites-btn"
          category="link-inline"
          action={onFavoritesListClick}
        >
          <FavoritesIcon filled />
        </Button>
        {triggerFavorites ?
          <div className="hidden-title">
            {translations.savedSelections}
          </div> : ''
        }
      </div>
    );
  }
}

GDHierarchySelectorSearchManager.propTypes = {
  extraClass: PropTypes.string,
  numberSelected: PropTypes.number,
  onFavoritesListClick: PropTypes.func,
  onRecentSearchListClick: PropTypes.func,
  onSearchTextChange: PropTypes.func,
  onSearchTextFocus: PropTypes.func,
  onSelectionsListClick: PropTypes.func,
  searchText: PropTypes.string,
  triggerFavorites: PropTypes.bool,
  translations: PropTypes.object.isRequired,
};

GDHierarchySelectorSearchManager.defaultProps = {
  extraClass: '',
  numberSelected: 0,
  onFavoritesListClick: () => { },
  onRecentSearchListClick: () => { },
  onSearchTextChange: () => { },
  onSearchTextFocus: () => { },
  onSelectionsListClick: () => { },
  searchText: '',
  triggerFavorites: false,
};

export default GDHierarchySelectorSearchManager;
