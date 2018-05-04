import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import { DebounceInput } from 'react-debounce-input';

import './Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  onBlur = () => {
    this.setState({ focused: false });
  }

  onFocus = () => {
    this.setState({ focused: true }, this.props.onFocus(''));
  }

  handleFilterInputChange = (event) => {
    this.props.onChange(event.target.value);
  }

  render() {
    const { manager, debounceTimeout, minLength, error, placeholder, filterText } = this.props;
    const { focused } = this.state;

    const containerClass = classes('search', {
      'search-manager': manager,
      focused,
    });

    return (
      <div className={containerClass}>
        {error && <span className="message-error">{error}</span>}
        <DebounceInput
          className="search-field hidden-s"
          onBlur={this.onBlur}
          onChange={this.handleFilterInputChange}
          onFocus={this.onFocus}
          type="text"
          placeholder={placeholder}
          value={filterText}
          debounceTimeout={debounceTimeout}
          minLength={minLength}
        />
        <DebounceInput
          className="search-field show-s"
          onBlur={this.onBlur}
          onChange={this.handleFilterInputChange}
          onFocus={this.onFocus}
          type="text"
          placeholder=""
          value={filterText}
          debounceTimeout={debounceTimeout}
          minLength={minLength}
        />
      </div>
    );
  }
}

Search.propTypes = {
  error: PropTypes.string,
  filterText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  manager: PropTypes.bool,
  debounceTimeout: PropTypes.number,
  minLength: PropTypes.number,
};

Search.defaultProps = {
  error: '',
  placeholder: '',
  manager: false,
  debounceTimeout: 0,
  minLength: 0,
  onFocus: () => { },
};

export default Search;
