import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import LinkInlineButton from 'Components/Button/LinkInlineButton';
import ColumnWidget from 'Components/ColumnWidget/';
import {
  DualListSelectorPanel,
  DualListSelectorHeading,
  DualListSelectorActionBar,
  DualListSelectorList,
} from 'Components/DualListSelector';
import CloseIcon from 'Components/icons/CloseIcon';
import PlusIcon from 'Components/icons/PlusIcon';
import Search from 'Components/search/Search.js';

import './DualListSelector.scss';

import {
  reorder,
  sortColumnsByString,
  getAvailableColumns,
  getActiveColumns,
  enableAddAllColumnsAction,
  enableRemoveAllColumnsAction,
  enableShowAllColumnsAction,
  enableHideAllColumnsAction,
  formatSavedColumns,
} from '../../utils/dualListSelectorUtils';

const getItemStyle = (draggableStyle) => ({
  userSelect: 'none',
  ...draggableStyle,
});

const getListStyle = () => ({
  padding: 0,
  width: '100%',
});

class DualListSelector extends Component {

  constructor(props) {
    super(props);

    const { availableColumns, activeColumns } = this.props;
    const newAvailableColumns = getAvailableColumns(availableColumns);
    const newActiveColumns = getActiveColumns(activeColumns);

    this.state = {
      availableColumns: newAvailableColumns,
      activeColumns: newActiveColumns,
      availableFilter: '',
      activeFilter: '',
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this); // eslint-disable-line react/prop-types
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.availableColumns.length !== this.state.availableColumns.length ||
      (nextProps.activeColumns.length !== this.state.activeColumns.length)) {
      const { availableColumns, activeColumns } = nextProps;
      const newAvailableColumns = getAvailableColumns(availableColumns);
      const newActiveColumns = getActiveColumns(activeColumns);

      this.setState({
        availableColumns: newAvailableColumns,
        activeColumns: newActiveColumns,
      });
    }
  }

  componentWillUnmount() {
    this.props.onRef(undefined); // eslint-disable-line react/prop-types
  }

  onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.activeColumns,
      result.source.index,
      result.destination.index,
    ).map((item, index) => {
      return { ...item, displayOrder: index };
    });

    this.setState({
      activeColumns: items,
    }, this.updateColumns(items));
  };

  setAvailableSearchFilter = (newText) => {
    this.setState({ availableFilter: newText });
  }

  setActiveSearchFilter = (newText) => {
    this.setState({ activeFilter: newText });
  }

  handleOnSubmit() {
    this.props.handleOnSaveActiveColumns(formatSavedColumns(this.state.activeColumns));
  }

  scrollToBottom() {
    this.activeColumnsListWrapperRef.scrollTop = this.activeColumnsListWrapperRef.scrollHeight;
  }

  addColumn = (identifier) => {
    const { availableColumns, activeColumns } = this.state;
    const columnToMove = availableColumns.find((column) => column.identifier === identifier);
    if (columnToMove) {
      columnToMove.isSelected = true;
      const newAvailableColumns = availableColumns.filter((column) => column.identifier !== identifier);
      const newActiveColumns = [...activeColumns, columnToMove]
        .map((item, index) => {
          return { ...item, displayOrder: index };
        });

      this.setState({
        availableColumns: newAvailableColumns,
        activeColumns: newActiveColumns,
      }, () => {
        this.scrollToBottom();
        this.updateColumns(newAvailableColumns, newActiveColumns);
      });
    }
  }

  addAllColumns = () => {
    const { availableColumns, activeColumns, availableFilter } = this.state;
    const availableFilteredColumns = availableColumns
      .filter((column) => !column.name.toLowerCase().includes(availableFilter.toLowerCase()));
    const activeFilteredColumns = availableColumns
      .filter((column) => column.name.toLowerCase().includes(availableFilter.toLowerCase()))
      .map((item, index) => {
        return { ...item, displayOrder: index };
      });
    const newAvailableColumns = availableFilteredColumns;
    const newActiveColumns = activeColumns
      .concat(activeFilteredColumns
        .map((column) => Object.assign({}, column, { isSelected: true })));

    this.setState({
      availableColumns: newAvailableColumns,
      activeColumns: newActiveColumns,
    }, this.updateColumns(newAvailableColumns, newActiveColumns));
  }

  showAllColumns = () => {
    const { activeColumns } = this.state;
    const newActiveColumns = activeColumns
      .map((column) => Object.assign({}, column, { isHidden: false }));

    this.setState({
      activeColumns: newActiveColumns,
    }, this.updateColumns(this.state.availableColumns, newActiveColumns));
  }

  hideAllColumns = () => {
    const { activeColumns } = this.state;
    const newActiveColumns = activeColumns
      .map((column) => Object.assign({}, column, { isHidden: true }));

    this.setState({
      activeColumns: newActiveColumns,
    }, this.updateColumns(this.state.availableColumns, newActiveColumns));
  }

  removeAllColumns = () => {
    const { availableColumns, activeColumns, activeFilter } = this.state;
    const activeFilteredColumns = activeColumns
      .filter((column) => column.name.toLowerCase().includes(activeFilter.toLowerCase()) && !column.isRequired);
    const activeNonFilteredColumns = activeColumns
      .filter((column) => !column.name.toLowerCase().includes(activeFilter.toLowerCase()) || column.isRequired);
    const newAvailableColumns = sortColumnsByString(availableColumns
      .concat(activeFilteredColumns
        .map((column) => Object.assign({}, column, { isSelected: true }))), 'name');
    const newActiveColumns = activeNonFilteredColumns
      .map((item, index) => {
        return { ...item, displayOrder: index };
      });

    this.setState({
      availableColumns: newAvailableColumns,
      activeColumns: newActiveColumns,
    }, this.updateColumns(newAvailableColumns, newActiveColumns));
  }

  removeColumn = (identifier) => {
    const { availableColumns, activeColumns } = this.state;
    const columnToMove = activeColumns.find((column) => column.identifier === identifier);
    if (columnToMove) {
      columnToMove.isSelected = false;
      const newActiveColumns = activeColumns
        .filter((column) => column.identifier !== identifier)
        .map((item, index) => {
          return { ...item, displayOrder: index };
        });
      const newAvailableColumns = sortColumnsByString([...availableColumns, columnToMove], 'name');

      this.setState({
        availableColumns: newAvailableColumns,
        activeColumns: newActiveColumns,
      }, this.updateColumns(newAvailableColumns, newActiveColumns));
    }
  }

  toggleVisibility = (identifier) => {
    const { activeColumns } = this.state;
    const newActiveColumns = activeColumns.map((column) => {
      if (column.identifier === identifier) {
        return Object.assign({}, column, { isHidden: !column.isHidden });
      } else {
        return column;
      }
    });

    this.setState({
      activeColumns: newActiveColumns,
    }, this.updateColumns(this.state.availableColumns, newActiveColumns));
  }

  updateColumns = (newAvailableColumns, newActiveColumns) => {
    this.props.updateColumnsInfo({
      availableColumns: formatSavedColumns(newAvailableColumns),
      activeColumns: formatSavedColumns(newActiveColumns),
    });
  }

  render() {
    const {
      availableFilter,
      availableColumns,
      activeFilter,
      activeColumns,
    } = this.state;
    const { extraClass, doubleWidth, translations, showVisibility } = this.props;

    const wrapperClass = classnames('dual-list-selector', {
      [extraClass]: extraClass,
    });

    const availableFilteredColumns = availableColumns
      .filter((column) => column.name.toLowerCase().includes(availableFilter.toLowerCase()));
    const activeFilteredColumns = activeColumns
      .filter((column) => column.name.toLowerCase().includes(activeFilter.toLowerCase()));
    const disableAddAllAction = !enableAddAllColumnsAction(availableFilteredColumns);
    const disableRemoveAllAction = !enableRemoveAllColumnsAction(activeFilteredColumns);
    const disableShowAllAction = !enableShowAllColumnsAction(activeFilteredColumns);
    const disableHideAllAction = !enableHideAllColumnsAction(activeFilteredColumns);

    const availableColumnWidgets = availableFilteredColumns
      .map((column) => {
        const extraActions = [
          {
            callback: this.addColumn,
            icon: PlusIcon,
          },
        ];

        return (
          <ColumnWidget
            actions={extraActions}
            desc={column.desc}
            extraClass={column.extraClass}
            identifier={column.identifier}
            isSelected={false}
            isHidden={column.isHidden}
            key={column.identifier}
            name={column.name}
            readOnly={false}
            toggleVisibility={this.toggleVisibility}
            animate={false}
            id={`${this.props.id}_ColumnWidget`}
          />
        );
      });

    const activeColumnWidgets = activeFilteredColumns
      .map((column, index) => {
        const extraActions = [
          {
            callback: this.removeColumn,
            icon: CloseIcon,
          },
        ];
        const animateItem = !column.isRequired;
        return (
          <Draggable key={column.identifier} draggableId={column.identifier} index={index}>
            {(provided, snapshot) => (
              <div>
                <div
                  ref={provided.innerRef}
                  style={getItemStyle(
                    provided.draggableProps.style,
                    snapshot.isDragging,
                  )}
                  {...provided.dragHandleProps}
                >
                  <ColumnWidget
                    actions={extraActions}
                    desc={column.desc}
                    extraClass={column.extraClass}
                    identifier={column.identifier}
                    isSelected
                    isHidden={column.isHidden}
                    key={column.identifier}
                    name={column.name}
                    readOnly={column.isRequired}
                    toggleVisibility={this.toggleVisibility}
                    required={column.isRequired}
                    animate={animateItem}
                    id={`${this.props.id}_ColumnWidget`}
                    showVisibility={showVisibility}
                  />
                </div>
                {provided.placeholder}
              </div>
            )}
          </Draggable>
        );
      });

    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      >
        <div className={wrapperClass}>
          <DualListSelectorPanel
            extraClass={extraClass}
          >
            <DualListSelectorHeading
              title={translations.availableColumns}
            />
            <Search
              id={`${this.props.id}_columnManager_textbox_Search_Available_Columns`}
              filterText={availableFilter}
              onChange={this.setAvailableSearchFilter}
              placeholder={translations.searchAvailableColumns}
            />
            <DualListSelectorActionBar>
              <LinkInlineButton
                id={`${this.props.id}_columnManager_btn_Add_All`}
                action={this.addAllColumns}
                disabled={disableAddAllAction}
              >
                {translations.addAll}
              </LinkInlineButton>
            </DualListSelectorActionBar>
            <div
              className="dual-list-selector__list-wrapper"
            >
              <DualListSelectorList>
                {availableColumnWidgets}
              </DualListSelectorList>
            </div>
          </DualListSelectorPanel>
          <DualListSelectorPanel
            doubleWidth={doubleWidth}
          >
            <DualListSelectorHeading
              title={translations.activeColumns}
              tagline={`${activeColumns.length} Selected`}
            />
            <Search
              id={`${this.props.id}_columnManager_textbox_Search_Active_Columns`}
              filterText={activeFilter}
              onChange={this.setActiveSearchFilter}
              placeholder={translations.searchActiveColumns}
            />
            <DualListSelectorActionBar>
              <LinkInlineButton
                id={`${this.props.id}_columnManager_btn_Remove_All`}
                action={this.removeAllColumns}
                disabled={disableRemoveAllAction}
              >
                {translations.removeAll}
              </LinkInlineButton>
              {showVisibility &&
                <div>
                  <span>Columns:</span>
                  <LinkInlineButton
                    id={`${this.props.id}_columnManager_btn_Show_All`}
                    action={this.showAllColumns}
                    disabled={disableShowAllAction}
                  >
                    {translations.showAll}
                  </LinkInlineButton>
                  <span>|</span>
                  <LinkInlineButton
                    id={`${this.props.id}_columnManager_btn_Hide_All`}
                    action={this.hideAllColumns}
                    disabled={disableHideAllAction}
                  >
                    {translations.hideAll}
                  </LinkInlineButton>
                </div>
              }
            </DualListSelectorActionBar>
            <div
              className="dual-list-selector__list-wrapper"
              ref={(ref) => { this.activeColumnsListWrapperRef = ref; }}
            >
              <DualListSelectorList>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      style={getListStyle()}
                    >
                      {activeColumnWidgets}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DualListSelectorList>
            </div>
          </DualListSelectorPanel>
        </div>
      </DragDropContext>
    );
  }
}

DualListSelector.propTypes = {
  availableColumns: PropTypes.array.isRequired,
  activeColumns: PropTypes.array.isRequired,
  extraClass: PropTypes.string,
  id: PropTypes.string,
  updateColumnsInfo: PropTypes.func,
  handleOnSaveActiveColumns: PropTypes.func,
  doubleWidth: PropTypes.bool,
  translations: PropTypes.object,
  showVisibility: PropTypes.bool,
};

DualListSelector.defaultProps = {
  extraClass: 'available-columns',
  id: '',
  updateColumnsInfo: () => { },
  handleOnSaveActiveColumns: () => { },
  doubleWidth: false,
  translations: {
    availableColumns: 'Available Columns',
    searchAvailableColumns: 'Search Available Columns',
    addAll: 'Add All',
    activeColumns: 'Active Columns',
    searchActiveColumns: 'Search Active Columns',
    removeAll: 'Remove All',
    showAll: 'Show All',
    hideAll: 'Hide All',
  },
  showVisibility: true,
};

export default DualListSelector;
