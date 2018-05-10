export function getSelectedReportColumns(reportColumns = []) {
  return reportColumns.filter((column) => {
    return column.selected;
  });
}

export function sortReportColumns(reportColumns = []) {
  return reportColumns.sort((a, b) => {
    return Number(a.displayOrder) - Number(b.displayOrder);
  });
}

export function getIdColumnKey(foundReport = {}) {
  const idColumn = foundReport.reportColumns && foundReport.reportColumns.find((column) => {
    return column.primaryIdentifier;
  });

  return (idColumn) ? idColumn.jsonKey : 'seq_key';
}

export function getColumnsByType(reportColumns = []) {
  return reportColumns.reduce((columnObj, column) => {
    const newColumnObj = Object.assign({}, columnObj);
    if (!column.primaryIdentifier) {
      newColumnObj.availableColumns = columnObj.availableColumns.concat(column);
    }

    if (column.selected) {
      newColumnObj.selectedColumns = columnObj.selectedColumns.concat(column);
    }

    return newColumnObj;
  }, {
    availableColumns: [],
    selectedColumns: [],
  });
}
