import React from 'react';
import PropTypes from 'prop-types';

const EyeIcon = ({ slash }) => {
  return (
    <svg className="eye-icon" width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>Eye Icon</title>
      <defs>
        <path d="M1.5,15.5 L16.5332964,0.466703622" id="eyeball-slash" />
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-996.000000, -554.000000)" stroke="currentColor">
          <g transform="translate(254.000000, 210.000000)">
            <g transform="translate(0.000000, 67.000000)">
              <g transform="translate(1.000000, 76.000000)">
                <g transform="translate(25.000000, 2.000000)">
                  <g transform="translate(281.000000, 24.000000)">
                    <g transform="translate(14.000000, 166.000000)">
                      <g transform="translate(423.000000, 12.000000)">
                        <path d="M15.3050392,4.92967819 C13.837626,3.59237187 11.5518477,2 9,2 C6.4481523,2 4.16237402,3.59237187 2.69496081,4.92967819 C1.74350725,5.78927904 0.87369536,6.7683854 0.100783875,7.84982122 L0,8 L0.100783875,8.15017878 C0.87369536,9.2316146 1.74350725,10.210721 2.69496081,11.0703218 C4.16237402,12.4076281 6.4481523,14 9,14 C11.5518477,14 13.837626,12.4052443 15.3050392,11.0703218 C16.2564927,10.210721 17.1263046,9.2316146 17.8992161,8.15017878 L18,8 L17.8992161,7.84982122 C17.1263046,6.7683854 16.2564927,5.78927904 15.3050392,4.92967819 Z" fillRule="nonzero" />
                        <path d="M8.95520925,5.50006466 L8.95973161,5.50001226 C7.58448643,5.5221691 6.48543498,6.65114187 6.50014658,8.02658506 C6.51485818,9.40202782 7.63780547,10.5072311 9.01320947,10.4999642 C10.3886137,10.4926973 11.4998215,9.37568953 11.5000199,8.00469003 C11.4875937,6.61082184 10.3489987,5.49021816 8.95520925,5.50006466 Z" fillRule="nonzero" />
                        {
                          slash &&
                          <g strokeLinecap="square">
                            <use stroke="#FFFFFF" strokeWidth="4" xlinkHref="#eyeball-slash" />
                            <use stroke="#D31C3C" strokeWidth="1" xlinkHref="#eyeball-slash" />
                          </g>
                        }
                      </g>
                    </g>
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

EyeIcon.propTypes = {
  slash: PropTypes.bool,
};

EyeIcon.defaultProps = {
  slash: false,
};

export default EyeIcon;
