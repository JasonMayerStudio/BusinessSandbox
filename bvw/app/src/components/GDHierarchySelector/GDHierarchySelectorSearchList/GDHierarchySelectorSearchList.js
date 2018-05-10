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

const compareMerchantNumber = (a, b) => {
  if (a.merchantNumber < b.merchantNumber) { return -1; }
  if (a.merchantNumber > b.merchantNumber) { return 1; }
  return 0;
};

class GDHierarchySelectorSearchList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMerchants: props.activeMerchants,
      tempActiveMerchants: [...props.activeMerchants],
    };

    this.attachBindings();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeMerchants: nextProps.activeMerchants,
    });
  }

  getIsMerchantIdSelected(id) {
    const { tempActiveMerchants } = this.state;
    const filteredItems = tempActiveMerchants.filter((item) => item === id);
    return filteredItems.length > 0;
  }

  getIsMerchantIdInFilteredMerchants(id) {
    const filteredMerchants = this.getFilteredMerchants();
    const filteredItems = filteredMerchants.filter((item) => item.id === id);
    return filteredItems.length > 0;
  }

  getFilteredMerchants() {
    const { availableMerchants, searchText } = this.props;

    if (searchText === null) {
      return [];
    }

    return availableMerchants
      .filter((item) => this.filterMerchants(item, searchText))
      .sort(compareMerchantNumber);
  }

  getMerchantGivenId(id) {
    const { availableMerchants } = this.props;
    const [first] = availableMerchants.filter((item) => item.id === id);
    return first;
  }

  handleCheckboxChange(id, isChecked) {
    const { tempActiveMerchants } = this.state;
    const newActiveMerchantes = isChecked === false ?
      tempActiveMerchants.filter((item) => item !== id) :
      tempActiveMerchants.concat(id);

    this.setState({
      tempActiveMerchants: newActiveMerchantes,
    });
  }

  handleApply() {
    const { onApply } = this.props;
    const { tempActiveMerchants } = this.state;
    this.setState({
      activeMerchants: tempActiveMerchants,
    }, onApply(tempActiveMerchants));
  }

  handleClose() {
    const { onClose } = this.props;
    const { activeMerchants } = this.state;
    this.setState({
      tempActiveMerchants: activeMerchants,
    }, onClose());
  }

  filterMerchants(item, search) {
    return search === '' ||
      item.merchantNumber.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
      item.businessName.toLowerCase().indexOf(search.toLowerCase()) >= 0;
  }

  attachBindings() {
    this.filterMerchants = this.filterMerchants.bind(this);
    this.getFilteredMerchants = this.getFilteredMerchants.bind(this);
    this.getIsMerchantIdInFilteredMerchants = this.getIsMerchantIdInFilteredMerchants.bind(this);
    this.getIsMerchantIdSelected = this.getIsMerchantIdSelected.bind(this);
    this.getMerchantGivenId = this.getMerchantGivenId.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleClearAllItems = this.handleClearAllItems.bind(this);
    this.handleClearCheckedItems = this.handleClearCheckedItems.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleSelectAllItems = this.handleSelectAllItems.bind(this);
  }

  handleClearCheckedItems() {
    const { tempActiveMerchants } = this.state;
    const tams = tempActiveMerchants
      .filter((id) => !this.getIsMerchantIdInFilteredMerchants(id));

    this.setState({
      tempActiveMerchants: tams,
    });
  }

  handleSelectAllItems() {
    const { tempActiveMerchants } = this.state;
    const filteredMerchantIds = this.getFilteredMerchants()
      .filter((item) => !this.getIsMerchantIdSelected(item.id))
      .map((item) => {
        return item.id;
      });
    const tams = [...tempActiveMerchants, ...filteredMerchantIds];

    this.setState({
      tempActiveMerchants: tams,
    });
  }

  handleClearAllItems() {
    this.setState({
      tempActiveMerchants: [],
    });
  }

  handleSave() {
    const { onSave } = this.props;
    const { tempActiveMerchants } = this.state;
    this.setState({
      activeMerchants: tempActiveMerchants,
    }, onSave(tempActiveMerchants));
  }

  render() {
    const { tempActiveMerchants } = this.state;
    const { extraClass, translations, searchText, showSelections, isOpened } = this.props;
    const wrapperClass = classnames('gd-hierarchy-selector-search-list', {
      [extraClass]: extraClass,
    });
    const disableSelectAllAction = false;
    const disableClearSelectedAction = false;
    const disableClearAllAction = false;
    const disableSaveAction = false;
    const selectedText = tempActiveMerchants.length > 0 ? `${tempActiveMerchants.length} ${translations.selected}` : `${translations.none} ${translations.selected}`;
    const filteredMerchants = this.getFilteredMerchants();

    if (isOpened === false || searchText === '') {
      return null;
    }

    const filteredMerchantsListItemsJsx =
      filteredMerchants
        .filter(() => !showSelections)
        .map((item) => {
          return (
            <GDHierarchySelectorSearchItem
              key={item.id}
              id={item.id}
              extraClass="some-class"
              merchantNumber={item.merchantNumber}
              businessName={item.businessName}
              isChecked={this.getIsMerchantIdSelected(item.id)}
              onCheckboxChange={this.handleCheckboxChange}
              searchText={searchText}
            />
          );
        });

    const checkedMerchantsListItemsJsx =
      tempActiveMerchants
        .map((id) => {
          const merchant = this.getMerchantGivenId(id);
          return (
            <GDHierarchySelectorSearchItem
              key={id}
              id={id}
              extraClass="some-class"
              merchantNumber={merchant.merchantNumber}
              businessName={merchant.businessName}
              isChecked={this.getIsMerchantIdSelected(id)}
              onCheckboxChange={this.handleCheckboxChange}
              searchText={searchText}
            />
          );
        });

    return (
      <div className={wrapperClass}>
        {!showSelections && <Alert alertType="normal">
          <div className="left-panel">
            {translations.availableMerchants}
            <GDHierarchySelectorBadge
              count={filteredMerchants.length}
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
              count={tempActiveMerchants.length}
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
          {!showSelections && filteredMerchantsListItemsJsx}
          {showSelections && checkedMerchantsListItemsJsx}
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
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  activeMerchants: PropTypes.array,
  availableMerchants: PropTypes.array,
  extraClass: PropTypes.string,
  searchText: PropTypes.string,
  showSelections: PropTypes.bool,
  translations: PropTypes.object,
  isOpened: PropTypes.bool,
};

GDHierarchySelectorSearchList.defaultProps = {
  onApply: () => { },
  onClose: () => { },
  onSave: () => { },
  activeMerchants: [],
  availableMerchants: [],
  extraClass: '',
  searchText: '',
  showSelections: false,
  translations: {
    availableMerchants: 'Available Merchants',
    selectAll: 'Select All',
    clearSelected: 'Clear Selected',
    selected: 'Selected',
    cancel: 'Cancel',
    apply: 'Apply',
    currentSelected: 'Current Selected Merchant Numbers',
    clearAll: 'Clear All',
    saveSelections: 'Save Selections',
    none: 'None',
  },
  isOpened: false,
};

export default GDHierarchySelectorSearchList;
