import React from 'react';
import PropTypes from 'prop-types';

import InformationBubble from 'Components/information-bubble/InformationBubble.js';
import TextInput from 'Components/forms/text-input/TextInput.js';

const RegisterMerchantForm = (props) => {
  const merchantIdTooltip = props.optionalMerchantIdTooltip &&
    <InformationBubble
      info
      position="bottom"
      tooltipContent={props.optionalMerchantIdTooltip}
      tooltipTitle={props.optionalMerchantIdTooltipTitle}
    />;

  const verifyTooltip = props.optionalVerifyTooltip &&
    <InformationBubble
      info
      position="bottom"
      tooltipContent={props.optionalVerifyTooltip}
      tooltipTitle={props.optionalVerifyTooltipTitle}
    />;

  return (
    <div className="field-group-vertical">
      <TextInput
        name={props.merchantIdFieldName}
        label={props.merchantIdFieldLabel}
        type="text"
        onChange={props.onChange}
        value={props.merchantIdFieldValue}
        error={props.merchantIdFieldError}
        labelTooltip={merchantIdTooltip}
      />
      <TextInput
        name={props.verifyFieldName}
        label={props.verifyFieldLabel}
        type="text"
        onChange={props.onChange}
        value={props.verifyFieldValue}
        error={props.verifyFieldError}
        labelTooltip={verifyTooltip}
      />
    </div>
  );
};

RegisterMerchantForm.propTypes = {
  merchantIdFieldName: PropTypes.string.isRequired,
  merchantIdFieldLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  merchantIdFieldValue: PropTypes.string.isRequired,
  merchantIdFieldError: PropTypes.string,
  verifyFieldName: PropTypes.string.isRequired,
  verifyFieldLabel: PropTypes.string.isRequired,
  verifyFieldValue: PropTypes.string.isRequired,
  verifyFieldError: PropTypes.string,
  optionalMerchantIdTooltip: PropTypes.string,
  optionalMerchantIdTooltipTitle: PropTypes.string,
  optionalVerifyTooltip: PropTypes.string,
  optionalVerifyTooltipTitle: PropTypes.string,
};

RegisterMerchantForm.defaultProps = {
  merchantIdFieldError: '',
  optionalMerchantIdTooltip: '',
  optionalMerchantIdTooltipTitle: '',
  verifyFieldError: '',
  optionalVerifyTooltip: '',
  optionalVerifyTooltipTitle: '',
};

export default RegisterMerchantForm;
