import pickBy from 'lodash/pickBy';

export function makeDateFilterValue(filterId, value1 = 'yesterday', value2) {
  const newFilter = {
    id: filterId,
    v1: value1,
  };

  if (value2) {
    newFilter.v2 = value2;
    newFilter.type = 'BETWEEN';
  } else {
    newFilter.type = 'STARTS_WITH';
  }

  return (filterId)
    ? newFilter
    : null;
}

export function mapSavedFilters(filters, filtersToApply = []) {
  return filters.map((filter) => {
    const filterJson = JSON.parse(filter.filterJson);
    const match = filtersToApply.filter((appliedFilter) => {
      return filterJson.some((f) => {
        if (Number(f.id) === Number(appliedFilter.id)) {
          // both of these will clear out an already applied filter if a new filter is
          // applied with different values.

          // if there is a singular value, it is equal, with no secondary value.
          if (f.v1 && f.v1 === appliedFilter.v1 && !f.v2) {
            return true;
          }

          // if there is a range of values, it is equal on both values.
          if (f.v1 && f.v2 && f.v1 === appliedFilter.v1 && f.v2 === appliedFilter.v2) {
            return true;
          }
        }

        return false;
      });
    });

    return Object.assign({}, filter, {
      isActive: match.length > 0 && match.length === filterJson.length ? match : false,
    });
  });
}

export function mapActiveFilters(filters = [], data = []) {
  const results = [];

  filters.forEach((filter) => {
    results.push(
      Object.assign({}, filter, {
        name: data.find((column) => Number(column.reportFilterId) === Number(filter.id)).name,
        value: !filter.v2 ? filter.v1 : null,
        values: filter.v2 ? { v1: filter.v1, v2: filter.v2 } : null,
      }),
    );
  });

  return results;
}

export function filterArrayKeys(array) {
  return array.map((item) => {
    return filterObject(item);
  });
}

export function filterObject(item) {
  const allowedKeys = [
    'id',
    'v1',
    'v2',
    'type',
  ];

  return pickBy(item, (value, key) => {
    return allowedKeys.includes(key);
  });
}

export default {
  mapSavedFilters,
};
