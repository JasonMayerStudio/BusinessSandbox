import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'Components/Button';

import './Paginator.scss';

class Paginator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backspacePressed: false,
      nextDisabled: props.currentPage >= props.totalPages,
      prevDisabled: props.currentPage === 1,
      blurredValue: props.currentPage,
      isDisabled: props.totalPages === 1,
      onChange: false,
      pageInput: this.props.currentPage,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { currentPage, totalPages } = nextProps;
    if (this.props.currentPage !== currentPage ||
        this.props.totalPages !== totalPages) {
      this.setState({
        currentPage,
        isDisabled: totalPages === 1,
        nextDisabled: currentPage >= totalPages,
        pageInput: currentPage,
        prevDisabled: parseInt(currentPage, 10) <= 1,
      });
    }
  }

  onChange = (event) => {
    const value = parseInt(event.target.value, 10)
      ? event.target.value
      : '';
    const valueIsValid = value > 0 && value <= this.props.totalPages;
    this.setState({
      isDisabled: valueIsValid,
      pageInput: value,
    });
  };

  onBlur = (event) => {
    const newValue = +(event.target.value); // unary plus operator converts string to number
    if (newValue >= 1 &&
        newValue <= this.props.totalPages) {
      this.setState({
        isDisabled: this.props.totalPages === 1,
      });
      this.props.pageHandler(newValue);
    } else {
      this.setState({
        isDisabled: this.props.totalPages === 1,
        pageInput: this.props.currentPage,
      });
    }
  }

  checkKey = (event) => {
    const keyCode = event.charCode || event.which;
    if (keyCode === 13 &&
        this.state.pageInput !== this.props.currentPage) {
      this.props.pageHandler(+(this.state.pageInput)); // unary plus operator converts string to number
    }
  };

  render() {
    return (
      <div className="paginator">
        <Button
          id={`${this.props.id}_btn_prev`}
          action={() => this.props.pageHandler(+(this.props.currentPage) - 1)}
          category="hollow"
          extraClass="paginator__prev"
          disabled={this.state.isDisabled || this.state.prevDisabled}
        >
          {this.props.translations.prev}
        </Button>
        <span>{this.props.translations.page}</span>
        <input
          id={`${this.props.id}_textBox_pageInput`}
          onBlur={this.onBlur}
          className="paginator__input field-input"
          onChange={this.onChange}
          onKeyPress={this.checkKey}
          type="text"
          value={this.state.pageInput}
        />
        <span>{this.props.translations.preposition} {this.props.totalPages}</span>
        <Button
          id={`${this.props.id}_btn_next`}
          action={() => this.props.pageHandler(+(this.props.currentPage) + 1)}
          category="hollow"
          extraClass="paginator__next"
          disabled={this.state.isDisabled || this.state.nextDisabled}
        >
          {this.props.translations.next}
        </Button>
      </div>
    );
  }
}

Paginator.propTypes = {
  currentPage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  pageHandler: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  translations: PropTypes.object.isRequired,
  id: PropTypes.string,
};

Paginator.defaultProps = {
  extraClass: '',
  id: '',
};

export default Paginator;
