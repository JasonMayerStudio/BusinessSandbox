import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DualListSelector from '../../DualListSelector/DualListSelector';
import './GDReportBuilderDataSet.scss';

class GDReportBuilderDataSet extends Component {
  render() {
    const { extraClass, availableColumns, activeColumns, updateColumnsInfo } = this.props;
    const wrapperClass = classnames('gd-report-builder-data-set', {
      [extraClass]: extraClass,
    });

    return (
      <div className={wrapperClass}>
        <DualListSelector
          extraClass="column-selector"
          onRef={(ref) => (this.child = ref)}
          availableColumns={availableColumns}
          activeColumns={activeColumns}
          updateColumnsInfo={updateColumnsInfo}
          doubleWidth
        />
      </div>
    );
  }
}

GDReportBuilderDataSet.propTypes = {
  extraClass: PropTypes.string,
  updateColumnsInfo: PropTypes.func.isRequired,
  availableColumns: PropTypes.array,
  activeColumns: PropTypes.array,
};

GDReportBuilderDataSet.defaultProps = {
  extraClass: '',
  availableColumns: [],
  activeColumns: [],
};

export default GDReportBuilderDataSet;
