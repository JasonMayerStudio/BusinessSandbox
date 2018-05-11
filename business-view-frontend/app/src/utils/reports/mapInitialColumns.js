export default function mapInitialColumns(columns) {
  const visibleKeyToUse = columns.some((column) => column.userIsVisible)
      ? 'userIsVisible'
      : 'defaultIsVisible';

  return columns.map((column) => {
    const identifier = column.columnKey || column.identifier || column.reportColumnId.toString();
    const desc = column.desc || column.description;
    const required = column.required || column.isRequired || false;
    const isHidden = column[visibleKeyToUse] ? !column[visibleKeyToUse] : false;
    const isSelected = column[visibleKeyToUse] || required || false;
    const name = column.name;
    return { ...column, identifier, desc, required, isHidden, isSelected, name };
  });
}
