import React from 'react';

const AttachmentIcon = () => {
  return (
    <svg width="32px" height="36px" viewBox="0 0 32 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <desc>Attachment Icon</desc>
      <defs>
        <filter x="-1.4%" y="-2.0%" width="102.8%" height="109.9%" filterUnits="objectBoundingBox" id="filter-1">
          <feOffset dx="0" dy="6" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.05 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1" />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g id="Message-Center" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Message-Center---Message-Selected-3" transform="translate(-1075.000000, -288.000000)" fillRule="nonzero" fill="#3A3D46">
          <g id="Messages" transform="translate(326.000000, 174.000000)">
            <g id="Messages-Table" filter="url(#filter-1)">
              <g id="Table">
                <path d="M769.019686,135.307801 C766.942275,136.508634 764.455389,136.108357 763.476253,134.407176 L757.527349,124.106028 C756.205816,121.816439 757.454264,118.612216 760.309578,116.963072 C763.164891,115.313927 766.563836,115.835289 767.885369,118.124878 L773.951409,128.632169 C774.058119,128.83907 773.983536,129.093266 773.781931,129.209789 C773.580325,129.326313 773.322707,129.264123 773.196533,129.068472 L767.130493,118.561181 C766.041229,116.674872 763.169897,116.284601 760.731067,117.693579 C758.292237,119.102556 757.193962,121.783417 758.283226,123.670726 L764.23213,133.971874 C764.978997,135.266773 766.935267,135.539962 768.599198,134.580296 C770.263129,133.62063 771.001986,131.788359 770.256121,130.49346 L764.311222,120.186308 C763.690158,119.600683 762.758069,119.492191 762.018993,119.919501 C761.279917,120.34681 760.909278,121.208497 761.107504,122.038594 L765.39548,129.466748 C765.50219,129.673649 765.427607,129.927845 765.226002,130.044368 C765.024397,130.160892 764.766778,130.098702 764.640604,129.903051 L760.352628,122.474896 C759.931995,121.221806 760.452597,119.845974 761.597589,119.184748 C762.742581,118.523522 764.195091,118.759895 765.071103,119.750006 L771.016002,130.057158 C771.992135,131.752334 771.099099,134.106968 769.019686,135.307801 Z" id="Attachment" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default AttachmentIcon;
