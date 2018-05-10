export default function mapInitialColumns(columns) {
  return columns.map((column) => {
    const identifier = column.columnKey || column.identifier || column.reportColumnId.toString();
    const desc = column.desc || column.description;
    const required = column.required || column.isRequired || false;
    const isHidden = column.visible ? !column.visible : false;
    const isSelected = column.defaultIsVisible || required || false;
    const name = column.name;
    return { ...column, identifier, desc, required, isHidden, isSelected, name };
  });
}
