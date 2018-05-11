import React from 'react';

const DownloadIcon = () => {
  return (
    <svg width="32px" height="20px" viewBox="0 0 32 20" version="1.1">
      <desc>Download Icon</desc>
      <defs>
        <filter x="-1.4%" y="-2.1%" width="102.8%" height="106.9%" filterUnits="objectBoundingBox" id="filter-1">
          <feOffset dx="0" dy="6" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g id="Statements" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Statements---Single-MID---Month-Open" transform="translate(-1328.000000, -593.000000)" fill="#3A3D46">
          <g id="Merchant-Statements" transform="translate(326.000000, 196.000000)">
            <g id="Messages-Table" filter="url(#filter-1)" transform="translate(0.000000, 25.000000)">
              <g id="Table">
                <g id="Table-Header" transform="translate(8.000000, 20.000000)">
                  <g id="Column---Downloads" transform="translate(1001.000000, 73.000000)">
                    <path d="M8.54660412,294.829839 L0.190903528,286.441988 C-0.0587395472,286.191384 -0.0587395472,285.793366 0.190903528,285.542763 C0.440546604,285.292159 0.837038548,285.292159 1.08668162,285.542763 L8.35570059,292.854492 L8.35570059,280.63388 C8.35570059,280.280086 8.63471344,280 8.98715072,280 C9.33958801,280 9.61860086,280.280086 9.61860086,280.63388 L9.61860086,292.839751 L16.9169896,285.542763 C17.1666327,285.292159 17.5631246,285.292159 17.8127677,285.542763 C18.0624108,285.793366 18.0624108,286.191384 17.8127677,286.441988 L9.4570671,294.829839 C9.39832755,294.888804 9.32490312,294.933028 9.25147869,294.962511 L9.2367938,294.962511 C9.16336937,294.991994 9.08994493,295.006735 9.00183561,295.006735 C8.91372629,295.006735 8.84030186,294.991994 8.76687742,294.962511 L8.75219254,294.962511 C8.6787681,294.933028 8.60534367,294.888804 8.54660412,294.829839 Z M0.631450133,297.114754 L0.631450133,297.114754 C0.279012849,297.114754 0,296.819926 0,296.480874 C0,296.127081 0.279012849,295.846995 0.631450133,295.846995 L17.3428513,295.846995 C17.6952886,295.846995 17.9743014,296.127081 17.9743014,296.480874 C17.9743014,296.834668 17.6952886,297.114754 17.3428513,297.114754 L0.631450133,297.114754 Z" id="download" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default DownloadIcon;
