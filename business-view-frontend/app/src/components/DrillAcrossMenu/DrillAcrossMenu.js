import React from 'react';
import PropTypes from 'prop-types';
import SelectInput from 'Components/forms/select-input/';

const DrillAcrossMenu = (props) => {
  const { availReports, selectedItem, handleSelection } = props;

  return (
    <SelectInput
      type="withIcon"
      dataList={availReports}
      handleSelection={handleSelection}
      selectedItem={selectedItem}
      wrapperClass="select-menu__form"
    />
  );
};

DrillAcrossMenu.propTypes = {
  availReports: PropTypes.array.isRequired,
  selectedItem: PropTypes.string.isRequired,
  handleSelection: PropTypes.func.isRequired,
};

DrillAcrossMenu.defaultProps = {
  availReports: [],
  selectedItem: '',
  handleSelection: () => { },
};

export default DrillAcrossMenu;
