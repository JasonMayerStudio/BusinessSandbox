export function reorder(list, startIndex, endIndex) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export function sortColumnsByString(columns = [], propName) {
  return columns.sort((filterA, filterB) => {
    const nameA = filterA[propName].toLowerCase();
    const nameB = filterB[propName].toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

export function sortColumnsByInt(columns = [], propName) {
  return columns.sort((filterA, filterB) => {
    const nameA = filterA[propName];
    const nameB = filterB[propName];
    return nameA - nameB;
  });
}

export function getAvailableColumns(columns) {
  const sortedColumns = sortColumnsByString(columns, 'name');
  return sortedColumns;
}

export function getActiveColumns(columns) {
  const sortedColumns = sortColumnsByInt(columns, 'displayOrder');
  return sortedColumns;
}

export function enableAddAllColumnsAction(columns) {
  return columns.length > 0;
}

export function enableRemoveAllColumnsAction(columns) {
  return columns.filter((column) => !column.isRequired).length > 0;
}

export function enableShowAllColumnsAction(columns) {
  return columns.filter((column) => column.isHidden).length > 0;
}

export function enableHideAllColumnsAction(columns) {
  return columns.filter((column) => !column.isHidden).length > 0;
}

export function formatSavedColumns(columns) {
  return columns
    .map((column) => {
      return {
        ...column,
        displayOrder: column.displayOrder,
        visible: !column.isHidden,
        identifier: column.identifier,
        name: column.name,
        defaultIsVisible: column.isSelected,
      };
    });
}

export default {
  reorder,
  sortColumnsByString,
  getActiveColumns,
  getAvailableColumns,
  enableAddAllColumnsAction,
  enableRemoveAllColumnsAction,
  enableShowAllColumnsAction,
  enableHideAllColumnsAction,
  formatSavedColumns,
};
