import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Checkbox from 'Components/forms/checkbox/Checkbox.js';
import GDRowActions from 'Components/GDTable/GDRowActions/GDRowActions.js';
import GDColorCodedCell from 'Components/GDTable/GDColorCodedCell';
import counterpart from 'counterpart';
import './TableStatements.scss';

const TableStatements = ({
  columns = [],
  data,
  extraClass,
  sort,
  handleSort,
  onChange,
  tablehead,
  selectAllStatemnents,
  isMultipleChecked,
  onClickAction,
  actionDisabled,
}) => {
  const wrapperClass = classnames('statement-table__container-root', {
    [extraClass]: extraClass,
  });

  const disabled = (actionDisabled)
    // key matches, update disabled  with 'disabled'
    ? 'disabled'
    // key differs, update disabled  with 'blank'
    : '';

  const headerCells = columns.map((column) => {
    let headerClass = 'statement_gd-table__container-cell';

    if (column.isSortable) {
      headerClass += ' sort';
    }

    if (sort.key === column.columnKey) {
      headerClass += sort.order ? ' sort-desc' : ' sort-asc';
    }

    if (column.columnKey === 'sequence_key') {
      return (
        <th className={headerClass}>
          <Checkbox
            id="multiple_checkbox"
            onChange={selectAllStatemnents}
            isChecked={isMultipleChecked}
          />
        </th>
      );
    }
    return (
      <th
        key={column.columnKey}
        className={headerClass}
        {...column.isSortable && {
          onClick: () => handleSort(column.columnKey),
        }}
      >
        {column.name}
      </th>
    );
  });


  const rows = data.map((row) => {
    const cells = columns.map((column) => {
      if (!row[column.columnKey]) {
        // short-circuit for when API doesn't even return data for a column
        return (
          <td key={`${column.columnKey}`} className="statement_gd-table__container-cell">
            --
          </td>
        );
      } else if (column.columnKey === 'sequence_key') {
        return (
          <td className="statement_gd-table__container-cell">
            <Checkbox
              id={row[column.columnKey]}
              onChange={onChange}
              isChecked={row.isChecked}
            />
          </td>
        );
      } else if (column.columnKey === 'merchant_number') {
        return (
          <GDColorCodedCell
            key={`${column.columnKey}`}
            content={row[column.columnKey]}
          />
        );
      } else if (column.columnKey === 'acquirer') {
        const merchantType = row[column.columnKey];
        return (
          <GDRowActions
            actions={onClickAction(merchantType)}
            rowId={row.sequence_key}
            triggerText={counterpart('globalTranslate.statements.actions')}
            extraClass={disabled}
          />
        );
      } else {
        return (
          <td key={`${column.columnKey}`} className="statement_gd-table__container-cell">
            {row[column.columnKey]}
          </td>

        );
      }
    });

    return (
      <tr
        key={row.sequence_key}
        className="statement_gd-table__container-row"
      >
        {cells}
      </tr>
    );
  });

  return (
    <div className={wrapperClass}>
      <table className="statement_gd-table__container">
        <thead className="statement_gd-table__container-header">
          {tablehead &&
            <tr className="statement_gd-table__container-row">{headerCells}</tr>
          }
          {!tablehead && <tr className="statement_gd-table__container-row"><th className="statement_gd-table__container-cell" >
            <Checkbox
              id="multiple_checkbox"
              onChange={selectAllStatemnents}
              isChecked={isMultipleChecked}
            />
          </th>
            <th className="statement_gd-table__container-cell" />
            <th className="statement_gd-table__container-cell" />
            <th className="statement_gd-table__container-cell" />
            <th className="statement_gd-table__container-cell" />
            <th className="statement_gd-table__container-cell" />
            <th className="statement_gd-table__container-cell" />
          </tr>
          }
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

TableStatements.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  extraClass: PropTypes.string,
  sort: PropTypes.object,
  handleSort: PropTypes.func,
  onClickAction: PropTypes.func.isRequired,
  selectAllStatemnents: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  tablehead: PropTypes.bool,
  isMultipleChecked: PropTypes.bool,
  actionDisabled: PropTypes.bool,
};

TableStatements.defaultProps = {
  extraClass: '',
  sort: {},
  handleSort: () => { },
  onRowClick: () => { },
  tablehead: true,
  selectAllStatemnents: () => { },
  isMultipleChecked: false,
  onClickAction: () => { },
  actionDisabled: false,
  onChange: () => { },
  columns: [],
  data: [],
};

export default TableStatements;

