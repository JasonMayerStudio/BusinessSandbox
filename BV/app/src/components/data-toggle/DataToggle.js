import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './DataToggle.scss';

const DataToggle = ({ dataSet, toggleSection, isOpen, dateFormat }) => {
  const getDataPiece = (dataPiece) => {
    const dataPieceClass = classnames('data-text', {
      'data-text-disabled': dataPiece.text === null || dataPiece.text.length === 0 || (dataPiece.text && dataPiece.text.trim().length) === 0,
    });

    if (dataPiece.text === null || dataPiece.text.length === 0 || (dataPiece.text && dataPiece.text.trim().length === 0)) {
      return (
        <p className={dataPieceClass}>--</p>
      );
    } else if (dataPiece.key.toLowerCase().indexOf('date') > -1) {
      return (
        <p className={dataPieceClass}>{moment(dataPiece.text).format(dateFormat)}</p>
      );
    } else {
      return (
        <p className={dataPieceClass}>{dataPiece.text}</p>
      );
    }
  };

  const dataItems = dataSet.map((data) => {
    return (
      <div className="data-toggle" key={data.key}>
        <span
          className="data-toggle-header-wrapper"
          tabIndex={0}
          role="button"
          onClick={toggleSection}
        >
          <h1 className={isOpen ? 'data-toggle-header' : 'data-toggle-header closed'}>{data.header}</h1>
        </span>
        <ReactCSSTransitionGroup
          transitionName="detail-items"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}
        >
          {isOpen && <div className="data-toggle-children">
            {data.data.map((dataPiece) => {
              const dataKeyClass = classnames('data-key', {
                'data-key-disabled': dataPiece.text === null || dataPiece.text.length === 0 || (dataPiece.text && dataPiece.text.trim().length === 0),
              });

              return (
                <div className="data-toggle-child" key={dataPiece.value}>
                  <p className={dataKeyClass}>{dataPiece.key}</p>
                  {getDataPiece(dataPiece)}
                </div>
              );
            })}
          </div>}
        </ReactCSSTransitionGroup>
      </div>
    );
  });

  return (
    <section className="data-toggle-wrapper">
      {dataItems}
    </section>
  );
};

DataToggle.propTypes = {
  dataSet: PropTypes.array.isRequired,
  toggleSection: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  dateFormat: PropTypes.string,
};

DataToggle.defaultProps = {
  dateFormat: 'MM/DD/YYYY',
};

export default DataToggle;
