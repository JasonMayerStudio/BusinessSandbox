import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Autocomplete from './Autocomplete.js';

export default class AutocompleteDoc extends React.Component {
  constructor(props) {
    super(props);

    this.allUsers = [
      {
        id: 2,
        name: 'John Adams',
        email: 'jadams@whitehouse.gov',
        selected: false,
      },
      {
        id: 6,
        name: 'John Quincy Adams',
        email: 'jadams2@whitehouse.gov',
        selected: false,
      },
      {
        id: 3,
        name: 'Thomas Jefferson',
        email: 'tjefferson@whitehouse.gov',
        selected: false,
      },
      {
        id: 4,
        name: 'James Madison',
        email: 'jmadison@whitehouse.gov',
        selected: false,
      },
      {
        id: 5,
        name: 'James Monroe',
        email: 'jmonroe@whitehouse.gov',
        selected: false,
      },
      {
        id: 1,
        name: 'George Washington',
        email: 'gwashington@whitehouse.gov',
        selected: true,
      },
    ];

    this.parsedAllUsers = this.allUsers.map((item) => {
      return Object.assign({}, item, { mainLine: item.name, subLine: item.email });
    });

    this.state = {
      currentSearchTerm: '',
      currentUsers: this.parsedAllUsers,
    };

    this.attachBindings();
  }

  attachBindings() {
    this.updateSearchField = this.updateSearchField.bind(this);
    this.handleUserSelect = this.handleUserSelect.bind(this);
  }

  /**
   * catches the value bubbling up and updates the container state
   * @param  {string} value  the search component unwinds the value from the event
   *                         before passing it up
   * @todo (2017-07-13) consider refactoring the search component to pass the event up
   */
  updateSearchField(value) {
    const lowercaseSearchTerm = value && value.toLowerCase && value.toLowerCase();
    const filteredUsers = this.parsedAllUsers.filter((user) => {
      const lowerName = user.name.toLowerCase();
      const lowerEmail = user.email.toLowerCase();
      return (lowerName.includes(lowercaseSearchTerm) ||
              lowerEmail.includes(lowercaseSearchTerm));
    });

    this.setState({
      currentSearchTerm: value,
      currentUsers: filteredUsers,
    });
  }

  handleUserSelect(value) {
    const selectedUser = this.parsedAllUsers.find((user) => {
      return user.id === value;
    });

    selectedUser.selected = !selectedUser.selected;

    this.setState({
      currentUsers: this.state.currentUsers,
    });
  }

  render() {
    return (
      <Page>
        <h2>Autocomplete</h2>

        <p>The autocomplete is a search input enhanced by a panel of selectable options.</p>

        <ReactSpecimen span={3}>
          <Autocomplete
            searchTerm={this.state.currentSearchTerm}
            dataList={this.state.currentUsers}
            handleSelect={this.handleUserSelect}
            onChange={this.updateSearchField}
            placeholder="Search Users"
            extraClass="some-class"
          />
        </ReactSpecimen>

        <p>You searched for <strong><em>{this.state.currentSearchTerm}</em></strong>.</p>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>searchTerm</strong>: what the user has typed in the search field so far</li>
          <li><strong>dataList</strong>: filtered list of objects with at least two properties, <pre>id</pre> and <pre>mainLine</pre>, and optionally a third property subLine. The props <pre>mainLine</pre>, and if present <pre>subLine</pre>, can be used for filtering. The prop <pre>id</pre> is used as the key of each item in the list, and can be used for selecting.</li>
          <li><strong>onChange</strong>: handler to update the search term in the parent container</li>
          <li><strong>handleSelect</strong>: handler to select an item in the dataList</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>

      </Page>
    );
  }
}
