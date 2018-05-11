import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import StarIcon from 'Components/icons/StarIcon';
import Alert from '../../Alert';
import GDHierarchySelectorBadge from '../GDHierarchySelectorBadge';
import Button from '../../Button';
import PrimaryButton from '../../Button/PrimaryButton';
import LinkInlineButton from '../../Button/LinkInlineButton';
import GDHierarchySelectorActionBar from '../GDHierarchySelectorActionBar';
import GDHierarchySelectorList from '../GDHierarchySelectorList';
import GDHierarchySelectorSearchItem from '../GDHierarchySelectorSearchItem';
import './GDHierarchySelectorSearchList.scss';

class GDHierarchySelectorSearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItems: props.activeItems,
      tempActiveItems: props.tempActiveItems,
    };

    this.attachBindings();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeItems: nextProps.activeItems,
    });
  }

  getIsItemIdSelected(id) {
    const { tempActiveItems } = this.state;
    const filteredItems = tempActiveItems.filter((item) => item === id);
    return filteredItems.length > 0;
  }

  getIsItemIdInFilteredItems(id) {
    const filteredItems = this.getFilteredItems().filter((item) => item.id === id);
    return filteredItems.length > 0;
  }

  getFilteredItems() {
    const { availableItems, searchText } = this.props;

    if (searchText === null) {
      return [];
    }

    return availableItems
      .filter((item) => this.filterItems(item, searchText))
      .sort(this.compareItemNumber);
  }

  getItemGivenId(id) {
    const { availableItems } = this.props;
    const [first] = availableItems.filter((item) => item.id === id);
    return first;
  }

  compareItemNumber(a, b) {
    const { itemNumberColumnName } = this.props;
    if (a[itemNumberColumnName] < b[itemNumberColumnName]) { return -1; }
    if (a[itemNumberColumnName] > b[itemNumberColumnName]) { return 1; }
    return 0;
  }

  handleCheckboxChange(id, isChecked) {
    const { onChecked } = this.props;
    const { tempActiveItems } = this.state;
    const newActiveItemes = isChecked === false ?
      tempActiveItems.filter((item) => item !== id) :
      tempActiveItems.concat(id);

    this.setState({
      tempActiveItems: newActiveItemes,
    }, onChecked(newActiveItemes));
  }

  handleApply() {
    const { onApply } = this.props;
    const { tempActiveItems } = this.state;
    this.setState({
      activeItems: tempActiveItems,
    }, onApply(tempActiveItems));
  }

  handleClose() {
    const { onClose } = this.props;
    const { activeItems } = this.state;
    this.setState({
      tempActiveItems: activeItems,
    }, onClose());
  }

  filterItems(item, search) {
    const { itemNumberColumnName, itemNameColumnName } = this.props;
    return search === '' ||
      item[itemNumberColumnName].toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
      item[itemNameColumnName].toLowerCase().indexOf(search.toLowerCase()) >= 0;
  }

  attachBindings() {
    this.compareItemNumber = this.compareItemNumber.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.getFilteredItems = this.getFilteredItems.bind(this);
    this.getIsItemIdInFilteredItems = this.getIsItemIdInFilteredItems.bind(this);
    this.getIsItemIdSelected = this.getIsItemIdSelected.bind(this);
    this.getItemGivenId = this.getItemGivenId.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleClearAllItems = this.handleClearAllItems.bind(this);
    this.handleClearCheckedItems = this.handleClearCheckedItems.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSelectAllItems = this.handleSelectAllItems.bind(this);
  }

  handleClearCheckedItems() {
    const { onChecked } = this.props;
    const { tempActiveItems } = this.state;
    const tams = tempActiveItems
      .filter((id) => !this.getIsItemIdInFilteredItems(id));

    this.setState({
      tempActiveItems: tams,
    }, onChecked(tams));
  }

  handleSelectAllItems() {
    const { onChecked } = this.props;
    const { tempActiveItems } = this.state;
    const filteredItemIds = this.getFilteredItems()
      .filter((item) => !this.getIsItemIdSelected(item.id))
      .map((item) => {
        return item.id;
      });
    const tams = [...tempActiveItems, ...filteredItemIds];

    this.setState({
      tempActiveItems: tams,
    }, onChecked(tams));
  }

  handleClearAllItems() {
    const { onChecked } = this.props;
    this.setState({
      tempActiveItems: [],
    }, onChecked([]));
  }

  handleSave() {
    const { onSave } = this.props;
    const { tempActiveItems } = this.state;
    this.setState({
      activeItems: tempActiveItems,
    }, onSave(tempActiveItems));
  }

  render() {
    const { tempActiveItems } = this.state;
    const {
      extraClass,
      translations,
      searchText,
      showSelections,
      isOpened,
      itemNumberColumnName,
      itemNameColumnName,
    } = this.props;
    const wrapperClass = classnames('gd-hierarchy-selector-search-list', {
      [extraClass]: extraClass,
    });

    if (isOpened === false) {
      return null;
    }

    const filteredItems = this.getFilteredItems();
    const disableSelectAllAction = false;
    const disableClearSelectedAction = false;
    const disableClearAllAction = false;
    const disableSaveAction = false;
    const selectedText = tempActiveItems.length > 0 ? `${translations.unapplied}: ${tempActiveItems.length}` : `${translations.unapplied}: 0`;

    const filteredItemsListItemsJsx =
      filteredItems
        .filter(() => !showSelections)
        .map((item) => {
          return (
            <GDHierarchySelectorSearchItem
              key={item.id}
              id={item.id}
              extraClass="some-class"
              itemNumber={item[itemNumberColumnName]}
              itemName={item[itemNameColumnName]}
              isChecked={this.getIsItemIdSelected(item.id)}
              onCheckboxChange={this.handleCheckboxChange}
              searchText={searchText}
            />
          );
        });

    const checkedItemsListItemsJsx =
      tempActiveItems
        .map((id) => {
          const item = this.getItemGivenId(id);
          return (
            <GDHierarchySelectorSearchItem
              key={id}
              id={id}
              extraClass="some-class"
              itemNumber={item[itemNumberColumnName]}
              itemName={item[itemNameColumnName]}
              isChecked={this.getIsItemIdSelected(id)}
              onCheckboxChange={this.handleCheckboxChange}
              searchText={searchText}
            />
          );
        });

    return (
      <div className={wrapperClass}>

        {!showSelections && <Alert alertType="normal">
          <div className="left-panel">
            {translations.availableItems}
            <GDHierarchySelectorBadge
              count={filteredItems.length}
            />
          </div>
          <div className="right-panel">
            {selectedText}
          </div>
        </Alert>}

        {showSelections && <Alert alertType="success">
          <div className="left-panel">
            {translations.currentSelected}
            <GDHierarchySelectorBadge
              count={tempActiveItems.length}
            />
          </div>
        </Alert>}

        {!showSelections && <GDHierarchySelectorActionBar>
          <div>
            <LinkInlineButton
              action={this.handleSelectAllItems}
              disabled={disableSelectAllAction}
            >
              {translations.selectAll}
            </LinkInlineButton>
            <span>|</span>
            <LinkInlineButton
              action={this.handleClearSelectedItems}
              disabled={disableClearSelectedAction}
            >
              {translations.clearSelected}
            </LinkInlineButton>
          </div>
        </GDHierarchySelectorActionBar>}

        {showSelections && <GDHierarchySelectorActionBar>
          <div className="left-panel">
            <LinkInlineButton
              action={this.handleClearAllItems}
              disabled={disableClearAllAction}
            >
              {translations.clearAll}
            </LinkInlineButton>
          </div>
          <div className="right-panel">
            <LinkInlineButton
              action={this.handleSave}
              disabled={disableSaveAction}
            >
              <StarIcon />
              {translations.saveSelections}
            </LinkInlineButton>
          </div>
        </GDHierarchySelectorActionBar>}

        <GDHierarchySelectorList>
          {!showSelections && filteredItemsListItemsJsx}
          {showSelections && checkedItemsListItemsJsx}
        </GDHierarchySelectorList>

        <div className="gd-hierarchy-selector-search-list__footer">
          <Button
            action={this.clearFilters}
            extraClass="clear-filters"
            category="link-inline"
          >
            {this.props.translations.clear}
          </Button>
          <div className="gd-hierarchy-selector-search-list__footer-right">
            <Button
              action={this.handleClose}
              extraClass="gd-hierarchy-selector-search-list__close-button"
            >
              {translations.cancel}
            </Button>
            <PrimaryButton
              action={this.handleApply}
              extraClass="gd-hierarchy-selector-search-list__apply-button"
            >
              {translations.apply}
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
}

GDHierarchySelectorSearchList.propTypes = {
  activeItems: PropTypes.array,
  availableItems: PropTypes.array,
  extraClass: PropTypes.string,
  isOpened: PropTypes.bool,
  itemNumberColumnName: PropTypes.string.isRequired,
  itemNameColumnName: PropTypes.string.isRequired,
  onApply: PropTypes.func,
  onChecked: PropTypes.func,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  searchText: PropTypes.string,
  showSelections: PropTypes.bool,
  tempActiveItems: PropTypes.array,
  translations: PropTypes.object.isRequired,
};

GDHierarchySelectorSearchList.defaultProps = {
  activeItems: [],
  availableItems: [],
  extraClass: '',
  isOpened: false,
  onApply: () => { },
  onChecked: () => { },
  onClose: () => { },
  onSave: () => { },
  searchText: '',
  showSelections: false,
  tempActiveItems: [],
};

export default GDHierarchySelectorSearchList;
