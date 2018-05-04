import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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

  attachBindings() {
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
    } = this.props;

    const wrapperClass = classnames('gd-hierarchy-selector-search-manager', {
      [extraClass]: extraClass,
    });

    const numberSelectedBadgeJsx = () => {
      if (numberSelected === 0) {
        return '';
      }

      return (
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
    };

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
              placeholder="Refine by Merchant Number"
              debounceTimeout={500}
            />
            {numberSelectedBadgeJsx()}
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
            Saved Selections
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
