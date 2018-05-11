import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog } from 'catalog';
import Intro from 'Components/intro.doc.js';

import Accordion from 'Components/accordion/accordion.doc.js';
import Alert from 'Components/Alert/Alert.doc.js';
import AttachmentDownloader from 'Components/attachment-downloader/AttachmentDownloader.doc.js';
import AutocompleteDoc from 'Components/autocomplete/Autocomplete.doc.js';
import Badge from 'Components/badge/Badge.doc.js';
import ButtonDoc from 'Components/Button/Button.doc.js';
import Card from 'Components/cards/card/card.doc.js';
import CardType from 'Components/CardType/CardType.doc.js';
import Checkbox from 'Components/forms/checkbox/Checkbox.doc.js';
import Colors from 'Components/colors/Colors.doc.js';
import ColumnManager from 'Components/column-manager/ColumnManager.doc.js';
import ColumnWidget from 'Components/ColumnWidget/ColumnWidget.doc.js';
import ConfirmationModal from 'Components/confirmation-modal/ConfirmationModal.doc.js';
import ContentTabs from 'Components/ContentTabs/ContentTabs.doc.js';
import CreditCardInput from 'Components/forms/credit-card-input/CreditCardInput.doc.js';
import CurrencyRangeInput from 'Components/forms/currency-range-input/CurrencyRangeInput.doc.js';
import DataToggle from 'Components/data-toggle/DataToggle.doc.js';
import DateRangeInput from 'Components/forms/date-range-input/DateRangeInput.doc.js';
import DualCalendar from 'Components/calendar-widget/dual-calendar/DualCalendar.doc.js';
import DualListSelector from 'Components/DualListSelector/DualListSelector.doc.js';
import EditableInput from 'Components/forms/EditableInput/EditableInput.doc.js';
import FileExport from 'Components/file-export/FileExport.doc.js';
import FilterDefinition from 'Components/FilterDefinition/FilterDefinition.doc.js';
import FilterToggle from 'Components/filter-toggle/FilterToggle.doc.js';
import FormSample from 'Components/forms/FormSample.doc.js';
import GDDetailView from 'Components/GDDetailView/GDDetailView.doc.js';
import GDHierarchySelector from 'Components/GDHierarchySelector/GDHierarchySelector.doc.js';
import GDHierarchySelectorEmptyFavorites from 'Components/GDHierarchySelector/GDHierarchySelector-emptyFavorites.doc.js';
import GDReportRunner from 'Components/GDReportRunner/GDReportRunner.doc.js';
import GDFilterElement from 'Components/GDReportRunner/GDFilterElement/GDFilterElement.doc.js';
import GDFilterPane from 'Components/GDReportRunner/GDFilterPane/GDFilterPane.doc.js';
import GDReportBuilder from 'Components/GDReportBuilder/GDReportBuilder.doc.js';
import GDTable from 'Components/GDTable/GDTable.doc.js';
import GDTableRecordsCount from 'Components/GDTable/GDTableRecordsCount/GDTableRecordsCount.doc.js';
import GDRowActions from 'Components/GDTable/GDRowActions/GDRowActions.doc.js';
import GDTableSummaryRow from 'Components/GDTable/GDTableSummaryRow/GDTableSummaryRow.doc.js';
import GDColorCodedCell from 'Components/GDTable/GDColorCodedCell/GDColorCodedCell.doc.js';
import GDCurrencyCodeCell from 'Components/GDTable/GDCurrencyCodeCell/GDCurrencyCodeCell.doc.js';
import GDDateCell from 'Components/GDTable/GDDateCell/GDDateCell.doc.js';
import GDActiveFiltersDropdown from 'Components/GDActiveFiltersDropdown/GDActiveFiltersDropdown.doc.js';
import GDNewFilterDropdown from 'Components/GDNewFilterDropdown/GDNewFilterDropdown.doc.js';
import GDSavedFiltersDropdown from 'Components/GDSavedFiltersDropdown/GDSavedFiltersDropdown.doc.js';
import Icons from 'Components/icons/Icon.doc.js';
import InformationBubble from 'Components/information-bubble/InformationBubble.doc.js';
import InfoBadge from 'Components/badge/InfoBadge.doc.js';
import Label from 'Components/forms/label/Label.doc.js';
import MultiSelectInput from 'Components/forms/multi-select-input/MultiSelectInput.doc.js';
import MultiSelectInputDoc from 'Components/forms/multiselect-input/MultiSelectInput.doc.js';
import NavBurger from 'Components/nav-burger/NavBurger.doc.js';
import NavItem from 'Components/nav-item/NavItem.doc.js';
import NoResults from 'Components/no-results/NoResults.doc.js';
import OptionBoxPopup from 'Components/OptionBoxPopup/OptionBoxPopup.doc.js';
import OutsideClickHandler from 'Components/OutsideClickHandler/OutsideClickHandler.doc.js';
import Pagination from 'Components/pagination/Pagination.doc.js';
import Paginator from 'Components/Paginator/Paginator.doc.js';
import Panel from 'Components/panel/Panel.doc.js';
import PopupMenu from 'Components/popup-menu/PopupMenu.doc.js';
import ProgressBar from 'Components/progress-bar/ProgressBar.doc.js';
import RadioButton from 'Components/forms/radio-button/RadioButton.doc.js';
import ReportCard from 'Components/cards/InlineCard/InlineCard.doc.js';
import SaveInput from 'Components/forms/save-input/SaveInput.doc.js';
import Search from 'Components/search/Search.doc.js';
import SearchBar from 'Components/search-bar/SearchBar.doc.js';
import SelectInput from 'Components/forms/select-input/SelectInput.doc.js';
import SelectionBar from 'Components/selection-bar/SelectionBar.doc.js';
import SelectionList from 'Components/selection-list/SelectionList.doc.js';
import SelectionListItem from 'Components/selection-list/selection-list-item/SelectionListItem.doc.js';
import StarIcons from 'Components/icons/StarIcon/StarIcon.doc.js';
import StatusBadge from 'Components/status-badge/StatusBadge.doc.js';
import StatusFlag from 'Components/StatusFlag/StatusFlag.doc.js';
import SummaryBox from 'Components/SummaryBox/SummaryBox.doc.js';
import Table from 'Components/table/Table.doc.js';
import TableComplexMerchant from 'Components/table-complex-merchant/Table-ComplexMerchant.doc.js';
import TableDynamicColumns from 'Components/table-dynamic-columns/TableDynamicColumns.doc.js';
import Tabs from 'Components/tabs/Tabs.doc.js';
import TextField from 'Components/forms/text-field/TextField.doc.js';
import TextareaInput from 'Components/forms/textarea-input/TextareaInput.doc.js';
import TextInput from 'Components/forms/text-input/TextInput.doc.js';
import ToggleSwitch from 'Components/toggle-switch/ToggleSwitch.doc.js';
import Typography from 'Components/typography/Typography.doc.js';
import WidgetButton from 'Components/WidgetButton/WidgetButton.doc.js';
import WizardAccordion from 'Components/wizard-accordion/WizardAccordion.doc.js';
import DrillAcrossMenu from 'Components/DrillAcrossMenu/DrillAcrossMenu.doc.js';
import './catalog.scss';
import '../../app/src/assets/scss/index.scss';


ReactDOM.render(
  <Catalog
    title="Business View Components"
    basePath="/"
    pages={[
      {
        path: '/',
        title: 'General Information',
        component: Intro,
      },
      {
        title: 'Accordion',
        pages: [
          {
            path: 'accordion',
            title: 'Accordion',
            component: Accordion,
          },
          {
            path: 'wizard-accordion',
            title: 'Wizard Accordion',
            component: WizardAccordion,
          },
        ],
      },
      {
        title: 'Alert',
        pages: [
          {
            path: 'alert',
            title: 'Alert',
            component: Alert,
          },
        ],
      },
      {
        title: 'AttachmentDownloader',
        pages: [
          {
            path: 'attachment-downloader',
            title: 'Attachment Downloader',
            component: AttachmentDownloader,
          },
        ],
      },
      {
        title: 'Autocomplete',
        pages: [
          {
            path: 'autocomplete',
            title: 'Autocomplete',
            component: AutocompleteDoc,
          },
        ],
      },
      {
        title: 'Badges',
        pages: [
          {
            path: 'badge',
            title: 'Badge',
            component: Badge,
          },
          {
            path: 'info-badge',
            title: 'Info Badge',
            component: InfoBadge,
          },
          {
            path: 'status-badge',
            title: 'Status Badge',
            component: StatusBadge,
          },
        ],
      },
      {
        title: 'Buttons',
        pages: [
          {
            path: 'button',
            title: 'Button',
            component: ButtonDoc,
          },
        ],
      },
      {
        title: 'Calendar',
        pages: [
          {
            path: 'dual-calendar',
            title: 'DualCalendar',
            component: DualCalendar,
          },
        ],
      },
      {
        title: 'Cards',
        pages: [
          {
            path: 'card',
            title: 'Card',
            component: Card,
          },
          {
            path: 'report-card',
            title: 'Report Card',
            component: ReportCard,
          },
        ],
      },
      {
        title: 'Card Type',
        pages: [
          {
            path: 'card-type',
            title: 'Card Type',
            component: CardType,
          },
        ],
      },
      {
        title: 'Colors',
        pages: [
          {
            path: 'colors',
            title: 'Colors',
            component: Colors,
          },
        ],
      },
      {
        title: 'Column Manager',
        pages: [
          {
            path: 'column-manager',
            title: 'Column Manager',
            component: ColumnManager,
          },
        ],
      },
      {
        title: 'Column Widget',
        pages: [
          {
            path: 'column-widget',
            title: 'Column Widget',
            component: ColumnWidget,
          },
        ],
      },
      {
        title: 'Confirmation Modal',
        pages: [
          {
            path: 'confirmation-modal',
            title: 'Confirmation Modal',
            component: ConfirmationModal,
          },
        ],
      },
      {
        title: 'Data Toggle',
        pages: [
          {
            path: 'data-toggle',
            title: 'Data Toggle',
            component: DataToggle,
          },
        ],
      },
      {
        title: 'Dual List Selector',
        pages: [
          {
            path: 'dual-list-selector',
            title: 'Dual List Selector',
            component: DualListSelector,
          },
        ],
      },
      {
        title: 'File Export',
        pages: [
          {
            path: 'file-export',
            title: 'File Export',
            component: FileExport,
          },
        ],
      },
      {
        path: 'filter-definition',
        title: 'Filter Definition',
        component: FilterDefinition,
      },
      {
        path: 'filter-toggle',
        title: 'Filter Toggle',
        component: FilterToggle,
      },
      {
        title: 'Forms',
        pages: [
          {
            path: 'checkbox',
            title: 'Checkbox',
            component: Checkbox,
          },
          {
            path: 'credit-card-input',
            title: 'Credit Card Input',
            component: CreditCardInput,
          },
          {
            path: 'currency-range',
            title: 'Currency Range',
            component: CurrencyRangeInput,
          },
          {
            path: 'date-range',
            title: 'Date Range',
            component: DateRangeInput,
          },
          {
            path: 'editable-input',
            title: 'Editable Input',
            component: EditableInput,
          },
          {
            path: 'label',
            title: 'Label',
            component: Label,
          },
          {
            path: 'multi-select-input',
            title: 'Multi-select Input',
            component: MultiSelectInput,
          },
          {
            path: 'multiselect-input',
            title: 'New-Multiselect Input',
            component: MultiSelectInputDoc,
          },
          {
            path: 'radio-button',
            title: 'Radio Button',
            component: RadioButton,
          },
          {
            path: 'form-sample',
            title: 'Sample Form',
            component: FormSample,
          },
          {
            path: 'save-input',
            title: 'Save Input',
            component: SaveInput,
          },
          {
            path: 'select-input',
            title: 'Select Input',
            component: SelectInput,
          },
          {
            path: 'text-field',
            title: 'Text Field',
            component: TextField,
          },
          {
            path: 'text-input',
            title: 'Text Input',
            component: TextInput,
          },
          {
            path: 'textarea-input',
            title: 'Textarea Input',
            component: TextareaInput,
          },
          {
            path: 'drill-across-menu',
            title: 'Drill Across Menu Selector',
            component: DrillAcrossMenu,
          },
        ],
      },
      {
        title: 'Global Data Report Runner (GDReportRunner)',
        pages: [
          {
            path: 'gd-report-runner',
            title: 'GD Report Runner',
            component: GDReportRunner,
          },
          {
            path: 'gd-filter-element',
            title: 'GD Filter Element',
            component: GDFilterElement,
          },
          {
            path: 'gd-filter-pane',
            title: 'GD Filter Pane',
            component: GDFilterPane,
          },
        ],
      },
      {
        title: 'Global Data Table (GDTable)',
        pages: [
          {
            path: 'gd-table',
            title: 'Global Data Table (GDTable)',
            component: GDTable,
          },
          {
            path: 'gd-table-records-count',
            title: 'Global Data Table Records Count',
            component: GDTableRecordsCount,
          },
          {
            path: 'gd-row-actions',
            title: 'Global Data Row Actions',
            component: GDRowActions,
          },
          {
            path: 'gd-filters-dropdown',
            title: 'Global Data Filters Dropdown',
            component: GDSavedFiltersDropdown,
          },
          {
            path: 'gd-new-filter-dropdown',
            title: 'Global Data New Filter Dropdown',
            component: GDNewFilterDropdown,
          },
          {
            path: 'gd-active-filters-dropdown',
            title: 'Global Data Active Filters Dropdown',
            component: GDActiveFiltersDropdown,
          },
          {
            path: 'gd-table-summary-row',
            title: 'Global Data Table Summary Row',
            component: GDTableSummaryRow,
          },
          {
            path: 'gd-color-coded-cell',
            title: 'Global Data GD Color Coded Cell',
            component: GDColorCodedCell,
          },
          {
            path: 'gd-currency-code-cell',
            title: 'GD Currency Code',
            component: GDCurrencyCodeCell,
          },
          {
            path: 'gd-date-cell',
            title: 'GD Date',
            component: GDDateCell,
          },
        ],
      },
      {
        title: 'Global Data Detail View (GDDetailView)',
        pages: [
          {
            path: 'gd-detail-view',
            title: 'GD Detail View',
            component: GDDetailView,
          },
        ],
      },
      {
        title: 'Global Hierarchy Selector (GDHierarchySelector)',
        pages: [
          {
            path: 'gd-hierarchy-selector',
            title: 'GD Hierarchy Selector',
            component: GDHierarchySelector,
          },
          {
            path: 'gd-hierarchy-selector-empty-favorites',
            title: 'Empty Favorites',
            component: GDHierarchySelectorEmptyFavorites,
          },
        ],
      },
      {
        title: 'Global Report Builder (GDReportBuilder)',
        pages: [
          {
            path: 'gd-report-builder',
            title: 'GD Report Builder',
            component: GDReportBuilder,
          },
        ],
      },
      {
        title: 'Icons',
        pages: [
          {
            path: 'icons',
            title: 'Icons',
            component: Icons,
          },
          {
            path: 'icons-star',
            title: 'Stars',
            component: StarIcons,
          },
        ],
      },
      {
        title: 'Information Bubble',
        pages: [
          {
            path: 'information-bubble',
            title: 'Information Bubble',
            component: InformationBubble,
          },
        ],
      },
      {
        title: 'Navigation',
        pages: [
          {
            path: 'NavBurger',
            title: 'Nav Burger',
            component: NavBurger,
          },
          {
            path: 'NavItem',
            title: 'Nav Item',
            component: NavItem,
          },
        ],
      },
      {
        title: 'NoResults',
        pages: [
          {
            path: 'no-results',
            title: 'NoResults',
            component: NoResults,
          },
        ],
      },
      {
        title: 'Option Box Popup',
        pages: [
          {
            path: 'option-box-popup',
            title: 'Option Box Popup',
            component: OptionBoxPopup,
          },
        ],
      },
      {
        title: 'Outside Click Handler',
        pages: [
          {
            path: 'outside-click-handler',
            title: 'Outside Click Handler',
            component: OutsideClickHandler,
          },
        ],
      },
      {
        title: 'Pagination',
        pages: [
          {
            path: 'pagination',
            title: 'Pagination',
            component: Pagination,
          },
        ],
      },
      {
        title: 'Paginator',
        pages: [
          {
            path: 'paginator',
            title: 'Paginator',
            component: Paginator,
          },
        ],
      },
      {
        title: 'Panel',
        pages: [
          {
            path: 'panel',
            title: 'Panel',
            component: Panel,
          },
        ],
      },
      {
        title: 'Pop-up Menu',
        pages: [
          {
            path: 'popup-menu',
            title: 'Pop-up Menu',
            component: PopupMenu,
          },
        ],
      },
      {
        title: 'Progress Bar',
        pages: [
          {
            path: 'progress-bar',
            title: 'Progress Bar',
            component: ProgressBar,
          },
        ],
      },
      {
        title: 'Reports',
        pages: [
          {
            path: 'report-card',
            title: 'Report Card',
            component: ReportCard,
          },
          {
            path: 'report-content-tabs',
            title: 'Headers',
            component: ContentTabs,
          },
        ],
      },
      {
        title: 'Search',
        pages: [
          {
            path: 'search',
            title: 'Search Field',
            component: Search,
          },
          {
            path: 'search-bar',
            title: 'Search Bar',
            component: SearchBar,
          },
        ],
      },
      {
        title: 'Selection',
        pages: [
          {
            path: 'selection-list',
            title: 'Selection List',
            component: SelectionList,
          },
          {
            path: 'selection-list-item',
            title: 'Selection List Item',
            component: SelectionListItem,
          },
          {
            path: 'selection-bar',
            title: 'Selection Bar',
            component: SelectionBar,
          },
        ],
      },
      {
        title: 'StatusFlag',
        pages: [
          {
            path: 'status-flag',
            title: 'Status Flag',
            component: StatusFlag,
          },
        ],
      },
      {
        title: 'SummaryBox',
        pages: [
          {
            path: 'summary-box',
            title: 'Summary Box',
            component: SummaryBox,
          },
        ],
      },
      {
        title: 'Table',
        pages: [
          {
            path: 'table',
            title: 'Table',
            component: Table,
          },
          {
            path: 'table-complex-merchant',
            title: 'Complex Merchant Table',
            component: TableComplexMerchant,
          },
          {
            path: 'table-dynamic-columns',
            title: 'Table with Dynamic Columns',
            component: TableDynamicColumns,
          },
        ],
      },
      {
        title: 'Tabs',
        pages: [
          {
            path: 'tabs',
            title: 'Tabs',
            component: Tabs,
          },
        ],
      },
      {
        path: 'toggle-switch',
        title: 'Toggle Switch',
        component: ToggleSwitch,
      },
      {
        path: 'typography',
        title: 'Typography',
        component: Typography,
      },
      {
        path: 'widget-button',
        title: 'WidgetButton',
        component: WidgetButton,
      },
    ]}
  />,
  document.getElementById('catalog'),
);
