import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LockIcon extends Component {
  constructor(props) {
    super(props);

    this.attachBindings();
  }

  attachBindings() {
    this.onMouseOver = this.props.onMouseOver.bind(this);
  }

  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" onMouseOver={this.onMouseOver} className="mobile-logo-icon" width="20" height="24" viewBox="0 0 20 24">
        <path fill="#3A3D46" fillRule="evenodd" d="M9.856 8.557c1.416-.318 2.589-1.136 2.61-1.832.02-.697-1.106-.987-2.529-.67-1.422.318-2.589 1.136-2.609 1.833-.02.696 1.106.993 2.528.669zm4.247 11.77h-.276v.568h.283c.297 0 .432-.067.432-.277 0-.21-.142-.29-.439-.29zm.014-.601a1.212 1.212 0 0 0-.87.358c-.237.242-.37.567-.37.906-.002.334.13.655.363.892.228.238.542.372.87.372.332 0 .65-.134.883-.372.235-.231.366-.548.364-.879a1.297 1.297 0 0 0-.357-.905 1.222 1.222 0 0 0-.883-.372zm.687 2.062h-.296l-.337-.71h-.344v.71h-.27v-1.643h.594c.445 0 .674.149.674.453a.427.427 0 0 1-.378.44l.357.75zM15.782.91H3.229S0 .91 0 4.21v16.165s0 3.299 3.23 3.299h12.552s3.222 0 3.222-3.3V4.21s0-3.3-3.222-3.3zm-1.726 2.137c.668-.081 1.2.122 1.187.453-.014.331-.567.662-1.234.743-.667.082-1.207-.121-1.187-.446.007-.331.56-.669 1.234-.75zM3.822 13.749c.027-.703.87-1.548 2.084-2.204a4.602 4.602 0 0 1-.897-2.752 4.487 4.487 0 0 1 4.327-4.402 4.485 4.485 0 0 1 4.616 4.097 4.49 4.49 0 0 1-3.833 4.842 9.012 9.012 0 0 1-2.515 1.163c-2.123.608-3.815.277-3.782-.744zm.627 6.112c.075-1.4 2.36-3.347 5.104-4.347 2.744-1 4.908-.683 4.834.716-.075 1.4-2.36 3.347-5.104 4.348-2.744 1-4.908.682-4.834-.717zm10.666 2.143a1.41 1.41 0 0 1-.998.426c-.377 0-.737-.153-.998-.426a1.457 1.457 0 0 1-.411-1.014c0-.384.153-.751.425-1.02.256-.27.613-.42.984-.413.376-.005.737.147.998.419.262.271.408.636.404 1.014.007.379-.138.745-.404 1.014zm-5.623-8.627c.21-.002.42-.018.627-.047.83-.575 1.369-1.224 1.389-1.785.034-1.014-1.659-1.345-3.782-.737a8.767 8.767 0 0 0-1.82.737 4.445 4.445 0 0 0 3.586 1.832z" />
      </svg>
    );
  }
}

LockIcon.propTypes = {
  onMouseOver: PropTypes.func,
};

LockIcon.defaultProps = {
  onMouseOver: () => {},
};

export default LockIcon;
