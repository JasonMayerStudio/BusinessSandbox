// Libs / Helpers
import React, { Component } from 'react';

// Components - @TODO update with transaction data
import TableDragAndDrop from 'Components/table-drag-and-drop/Table-DragAndDrop.js';
import columns from './columns.js';

// Services
import { getUsers } from '../../api/userApi';

class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns,
      users: [],
      perPage: 25,
      errors: '',
    };
  }

  // @TODO transaction data
  componentWillMount() {
    getUsers()
      .then((results) => {
        const fetchedUsers = this.state.users.concat(results);
        this.setState({ users: fetchedUsers });
      })
      .catch((error) => {
        console.error('ERROR', 'Failed to fetch user data in the Transactions container component.', error); // eslint-disable-line no-console
      });
  }

  render() {
    return (
      <article className="padded">
        <div className="flex-between">
          <h1 className="pure-table__headline">Transactions</h1>
        </div>
        <TableDragAndDrop
          perPage={this.state.perPage}
          rows={this.state.users}
          error={this.state.error}
          columns={this.state.columns}
        />
      </article>
    );
  }
}

export default Transactions;
