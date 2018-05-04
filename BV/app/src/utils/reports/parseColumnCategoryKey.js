export default function parseColumnCategoryKey(columns) {
  const detailViewStructure = {
    categories: null,
  };
  const categories = [];

  // find the categories,
  columns.forEach((column) => {
    // we don't need hierarchy data or sequence keys.
    if (column.categoryKey !== 'header' && column.columnKey !== 'seq_key') {
      categories.push({
        categoryKey: column.categoryKey,
        categoryDescription: column.categoryDescription,
        categoryName: column.categoryName,
        data: [],
      });
    }
  });

  // then return only unique categories
  detailViewStructure.categories = categories.reduce((accumulator, category) => {
    if (!accumulator.filter((duplicate) => category.categoryKey === duplicate.categoryKey)[0]) {
      accumulator.push(category);
    }
    return accumulator;
  }, []);

  // return the data we need from columns based on what category they belong to.
  mapColumnsWithCategories(columns, detailViewStructure.categories);

  return detailViewStructure.categories;
}

function mapColumnsWithCategories(columns, categories) {
  categories.map((category) => {
    return columns.forEach((column) => {
      if (column.categoryKey === category.categoryKey) {
        category.data.push({
          columnKey: column.columnKey,
          description: column.description,
          displayOrder: column.displayOrder,
          name: column.name,
          id: column.reportColumnId,
          displayType: column.displayType,
        });
      }
    });
  });
}
