import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Badge from '../../badge';

const GDHierarchySelectorBadge = (props) => {
  const { extraClass, count } = props;
  const wrapperClass = classnames('gd-hierarchy-selector-badge', {
    [extraClass]: extraClass,
  });

  return (
    <div className={wrapperClass}>
      <Badge
        badgeType="settled"
      >
        {count}
      </Badge>
    </div>
  );
};

GDHierarchySelectorBadge.propTypes = {
  extraClass: PropTypes.string,
  count: PropTypes.number,
};

GDHierarchySelectorBadge.defaultProps = {
  extraClass: '',
  count: 0,
};

export default GDHierarchySelectorBadge;
