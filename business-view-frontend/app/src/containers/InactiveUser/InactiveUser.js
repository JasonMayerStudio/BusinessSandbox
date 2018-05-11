import React from 'react';
import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon';

import './InactiveUser.scss';

const InactiveUser = () => {
  return (
    <article className="inactive-user__wrapper">
      <section className="inactive-user__content">
        Your account has been deactivated.
        <a className="link-inline" href="/login">
          <LeftPointerIcon /><span>Return to login</span>
        </a>
      </section>
    </article>
  );
};

export default InactiveUser;
