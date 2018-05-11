import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './GDTableRecordsCount.scss';

class GDTableRecordsCount extends Component {
  constructor(props) {
    super(props);
    const { rangeStart, rangeEnd } = this.getCurrentRange(props.currentPage, props.recordsShown, props.totalRecords);

    this.state = {
      rangeStart,
      rangeEnd,
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentPage !== this.props.currentPage ||
        newProps.recordsShown !== this.props.recordsShown ||
        newProps.totalRecords !== this.props.totalRecords) {
      const { rangeStart, rangeEnd } = this.getCurrentRange(newProps.currentPage, newProps.recordsShown, newProps.totalRecords);

      this.setState({
        rangeStart,
        rangeEnd,
      });
    }
  }

  getCurrentRange = (currentPage, recordsShown, totalRecords) => {
    const maxPage = Math.ceil(totalRecords / recordsShown);
    const page = Math.min(Math.max(currentPage, 1), maxPage);

    const minPossibleRangeStart = ((page - 1) * recordsShown) + 1;
    const rangeStart = (minPossibleRangeStart > 0)
      ? minPossibleRangeStart
      : 0;
    const maxPossibleRangeEnd = page * recordsShown;
    const rangeEnd = (maxPossibleRangeEnd <= totalRecords)
      ? maxPossibleRangeEnd
      : totalRecords;

    return {
      rangeStart,
      rangeEnd,
    };
  }

  render() {
    const wrapperClass = classnames('gd-table__records-count', {
      [this.props.extraClass]: this.props.extraClass,
    });

    return (
      <div id={`${this.props.id}_lbl`} className={wrapperClass}>
        {this.props.text.showingRecords} <span className="gd-table__records-count-value">{this.state.rangeStart}–{this.state.rangeEnd}</span> {this.props.text.preposition} <span className="gd-table__records-count-value">{this.props.totalRecords}</span>
      </div>
    );
  }
}

GDTableRecordsCount.propTypes = {
  currentPage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  extraClass: PropTypes.string,
  recordsShown: PropTypes.number,
  text: PropTypes.object,
  totalRecords: PropTypes.number.isRequired,
  id: PropTypes.string,
};

GDTableRecordsCount.defaultProps = {
  extraClass: '',
  recordsShown: 25,
  text: {
    showingRecords: 'Showing records',
    preposition: 'of',
  },
  id: '',
  totalRecords: 0,
};

export default GDTableRecordsCount;
