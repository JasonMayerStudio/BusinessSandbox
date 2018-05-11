import React from 'react';
import './BallSyncLoader.scss';

const BallSyncLoader = () => {
  return (
    <div className="ball-sync-loader">
      <div className="loader">
        <div className="loader-inner ball-pulse-sync">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>
    </div>
  );
};

export default BallSyncLoader;
