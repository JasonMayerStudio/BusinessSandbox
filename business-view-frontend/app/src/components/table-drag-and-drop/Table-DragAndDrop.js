import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// Components
import Table from 'Components/table/Table';
import * as dnd from 'reactabular-dnd';
import * as resolve from 'table-resolver';

// Services
import Listener from 'Utils/listener';

// Style
import './Table-DragAndDrop.scss';

class TableDragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      columns: props.columns,
      rows: props.rows ? props.rows : [],
    };

    this.attachBindings();
    this.attachListeners();
  }

  componentWillReceiveProps(newProps) {
    // accounts for delay in component receiving props from container component
    this.setState({ rows: newProps.rows });
  }

  /* REORDERING ROWS */
  onRow(row) {
    return {
      className: 'row',
      rowId: row.userId,
      onMove: this.onMoveRow,
    };
  }

  onMoveRow({ sourceRowId, targetRowId }) {
    const rows = dnd.moveRows({
      sourceRowId,
      targetRowId,
    })(this.state.rows);

    if (rows) {
      this.setState({ rows });
    }
  }

  onMoveColumn(labels) {
    const movedColumns = dnd.moveLabels(this.state.columns, labels);

    if (movedColumns) {
      this.setState({
        columns: movedColumns.columns,
      });
    }
  }

  attachBindings() {
    this.onRow = this.onRow.bind(this);
    this.onMoveRow = this.onMoveRow.bind(this);
    this.onMoveColumn = this.onMoveColumn.bind(this);
  }

  attachListeners() {
    Listener.on('REORDER_COLUMN', this.onMoveColumn);
  }

  render() {
    const components = {
      header: {
        cell: dnd.Header,
      },
      body: {
        row: dnd.Row,
      },
    };

    const { columns, rows } = this.state;
    const resolvedColumns = resolve.columnChildren({ columns });
    const resolvedRows = resolve.resolve({
      columns: resolvedColumns,
      method: resolve.nested,
    })(rows);

    // @TODO update row key
    return (
      <Table
        error={this.props.error}
        components={components}
        columns={resolvedColumns}
        rows={resolvedRows}
        headerRows={resolve.headerRows({ columns })}
        rowKey="userId"
        onRow={this.onRow}
      />
    );
  }
}

TableDragAndDrop.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

TableDragAndDrop.defaultProps = {
  error: '',
};

export default DragDropContext(HTML5Backend)(TableDragAndDrop);
