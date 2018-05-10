export function parseDataColumnsSortKey(columns) {
  const sort = {};

  const sortColumn = columns.find((column) => {
    return (column.sortOrderPriority > 0 && column.sortDirection);
  });

  if (sortColumn) {
    sort.key = sortColumn.columnKey;
    sort.order = sortColumn.sortDirection === 'ASCENDING' ? 1 : 0;
  }

  return sort;
}

export default {
  parseDataColumnsSortKey,
};
