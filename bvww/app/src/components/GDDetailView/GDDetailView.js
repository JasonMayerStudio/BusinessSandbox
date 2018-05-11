import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Badge from 'Components/badge/Badge.js';
import Button from 'Components/Button';
import CloseIcon from 'Components/icons/CloseIcon';
import DownArrowIcon from 'Components/icons/DownArrowIcon';
import InformationBubble from 'Components/information-bubble/InformationBubble';
import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon';
import UpArrowIcon from 'Components/icons/UpArrowIcon';
import './GDDetailView.scss';

const buttonText = '';

const GDDetailView = ({
  data,
  extraClass,
  translations,
  goToPreviousRecord,
  goToNextRecord,
  goBack,
  hierarchyContent,
  hierarchyTitle,
  structure,
  subtitleContent,
  subtitleTitle,
  type,
}) => {
  const wrapperClass = classnames('gd-detail-view', {
    [extraClass]: extraClass,
  });

  const hierarchy = `${translations.corp} ${data.corp} > ${
    translations.region
    } ${data.region} > ${translations.principal} ${data.principal} > ${
    translations.associate
    } ${data.associate} > ${translations.chain} ${data.chain}`;

  function getItemData(item) {
    if (data[`${item.columnKey}`]) {
      if (typeof data[`${item.columnKey}`] === 'string') {
        if (item.displayType === 'BADGE') {
          return (
            <Badge
              badgeType={data[`${item.columnKey}`]}
              key={`${item.columnKey}`}
              square={false}
            >
              {data[`${item.columnKey}`]}
            </Badge>
          );
        } else {
          return <span>{data[`${item.columnKey}`]}</span>;
        }
      } else if (typeof data[`${item.columnKey}`] === 'object') {
        return <span>{data[`${item.columnKey}`].value}</span>;
      }
    }

    return <span>--</span>;
  }

  const categories = structure.map((category) => {
    return (
      <div className="gd-detail-view__items-wrapper" key={category.categoryKey}>
        <h1>{category.categoryName}</h1>
        <div className="gd-detail-view__items">
          {category.data.map((item) => {
            return (
              <div className="gd-detail-view__item" key={item.id}>
                <span id={`${translations.title}_GDDetailView_lbl_${item.name}`} className="gd-detail-view__item-title">{item.name}</span>
                <span id={`${translations.title}_GDDetailView_${item.name}_value_${data[`${item.columnKey}`]}`} className="gd-detail-view__item-data">
                  {getItemData(item)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className={wrapperClass}>
      <div className="gd-detail-view__controls">
        <div className="gd-detail-view__controls--left">
          <Button
            id={`${translations.title}_GDDetailView_btn_return`}
            action={goBack}
            category="hollow toggled"
            icon={LeftPointerIcon}
            iconDirection="left"
          >
            {buttonText}
          </Button>
          <h2 className="gd-detail-view__controls-title">
            {translations.returnToText}
          </h2>
        </div>
        <div className="gd-detail-view__controls--right">
          <Button
            id={`${translations.title}_GDDetailView_btn_DownArrow`}
            action={goToPreviousRecord}
            category="hollow toggled"
            iconDirection="left"
            icon={DownArrowIcon}
          >
            {buttonText}
          </Button>
          <Button
            id={`${translations.title}_GDDetailView_btn_UpArrow`}
            action={goToNextRecord}
            category="hollow toggled"
            iconDirection="left"
            icon={UpArrowIcon}
          >
            {buttonText}
          </Button>
          <Button
            id={`${translations.title}_GDDetailView_btn_close`}
            action={goBack}
            category="primary toggled"
            iconDirection="left"
            icon={CloseIcon}
          >
            {buttonText}
          </Button>
        </div>
      </div>
      <div className="gd-detail-view__header">
        <h1>{translations.title}</h1>
      </div>
      <div className="gd-detail-view__hierarchy" id={`${translations.title}_GDDetailView_lbl_hierarchy`}>
        <InformationBubble
          id="hierarchy"
          info
          position="top"
          tooltipTitle={hierarchyTitle}
          tooltipContent={hierarchyContent}
        />
        {translations.hierarchy}: {hierarchy}
      </div>
      <div className="gd-detail-view__subtitle">
        {translations.subtitle}{' '}
        <InformationBubble
          id="subtitle"
          info
          position="top"
          tooltipTitle={subtitleTitle}
          tooltipContent={subtitleContent}
        />
      </div>
      {type === 'report' && (
        <div className="gd-detail-view__section">{categories}</div>
      )}
    </div>
  );
};

GDDetailView.propTypes = {
  data: PropTypes.object,
  extraClass: PropTypes.string,
  goToPreviousRecord: PropTypes.func.isRequired,
  goToNextRecord: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  hierarchyContent: PropTypes.string,
  hierarchyTitle: PropTypes.string,
  structure: PropTypes.array,
  subtitleTitle: PropTypes.string,
  subtitleContent: PropTypes.string,
  translations: PropTypes.object,
  type: PropTypes.string,
};

GDDetailView.defaultProps = {
  data: {},
  extraClass: '',
  hierarchyTitle: '',
  hierarchyContent: '',
  subtitleContent: '',
  subtitleTitle: '',
  structure: [],
  translations: {
    returnToText: 'Return',
  },
  type: '',
};

export default GDDetailView;
