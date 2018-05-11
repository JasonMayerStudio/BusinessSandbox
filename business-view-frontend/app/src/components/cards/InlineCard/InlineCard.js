import React from 'react';
import PropTypes from 'prop-types';

import SelectInput from 'Components/forms/select-input/SelectInput.js';
import SmallButton from 'Components/Button/SmallButton';
import ReportIcon from 'Components/icons/ReportIcon';
import Badge from 'Components/badge/';

import './InlineCard.scss';

const moreList = [
  {
    value: 'edit_report',
    text: 'Edit Report',
  },
  {
    value: 'schedule',
    text: 'Schedule',
  },
  {
    value: 'share',
    text: 'Share',
  },
  {
    value: 'delete',
    text: 'Delete',
  },
];

const InlineCard = ({
  title,
  description,
  primaryAction,
  primaryActionText,
  cardType,
  isDraft,
  isNew,
  selectedInput,
  secondaryOptions,
}) => {
  let newBadge = null;
  let draftBadge = null;

  if (isNew) {
    newBadge = (<Badge badgeType="success" info>New</Badge>);
  }

  if (isDraft) {
    draftBadge = (<Badge badgeType="warning" info>Draft</Badge>);
  }

  function onSelectionChange(option) {
    if (option === 'edit_report') {
      secondaryOptions[0].action();
    }
  }

  return (
    <div className="card report">
      <div className="card__leftside-wrap">
        <ReportIcon />
        <span className="card__info">
          <span className="card__title">
            {title}
            {newBadge}{draftBadge}
          </span>
          <span className="card__description">{description}</span>
        </span>
        {cardType ?
          <span className="card__type">
            {cardType}
          </span>
          : ''
        }
      </div>
      <div className="card__rightside-wrap">
        <SmallButton action={primaryAction}>
          {primaryActionText}
        </SmallButton>
        <SelectInput
          dataList={secondaryOptions}
          promptText="More"
          wrapperClass="select-menu__form reports"
          handleSelection={onSelectionChange}
          selectedItem={selectedInput}
        />
      </div>
    </div>
  );
};

InlineCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  primaryAction: PropTypes.func.isRequired,
  primaryActionText: PropTypes.string.isRequired,
  cardType: PropTypes.string,
  isDraft: PropTypes.bool,
  isNew: PropTypes.bool,
  selectedInput: PropTypes.object,
  secondaryOptions: PropTypes.array,
};

InlineCard.defaultProps = {
  cardType: '',
  description: '',
  isDraft: false,
  isNew: false,
  selectedInput: {
    value: '',
    text: '',
    action: () => { },
  },
  secondaryOptions: moreList,
};

export default InlineCard;
