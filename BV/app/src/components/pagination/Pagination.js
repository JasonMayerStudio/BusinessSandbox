import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import counterpart from 'counterpart';

import { initCommonTranslate } from 'Utils/languages';

import './Pagination.scss';

const Pagination = ({ currentPage, pageCount, handlePageClick, wrapperClass, translations }) => {
  const prevStyle = {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '5px 8px 5px 0',
    borderColor: 'transparent white transparent transparent',
  };

  const nextStyle = {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '5px 0 5px 8px',
    borderColor: 'transparent transparent transparent white',
  };

  initCommonTranslate();

  // @TODO This is a lazy way to fix the fact that translations are here in the component, rather than the container.
  // Will refactor when pagination is recreated.
  const page = translations ? translations.page : counterpart('globalTranslate.common.page');
  const of = translations ? translations.of : counterpart('globalTranslate.common.of');

  return (
    <div className="pagination-wrapper">
      <span className="pagination-count">{page} {currentPage} {of} {pageCount}</span>
      <ReactPaginate
        previousClassName={wrapperClass ? `previous ${wrapperClass}` : 'previous'}
        previousLabel={<div style={prevStyle} />}
        nextLabel={<div style={nextStyle} />}
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePageClick: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  wrapperClass: PropTypes.string,
  translations: PropTypes.object,
};

Pagination.defaultProps = {
  wrapperClass: null,
  translations: {
    page: 'Page',
    of: 'of',
  },
};

export default Pagination;
