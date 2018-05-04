import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

export class GAListener extends React.Component {
  constructor(props) {
    super(props);

    /* eslint-disable no-undef */
    ReactGA.initialize(__GA_PROPERTY__, {
      debug: __GA_DEBUG__,
    });
    /* eslint-enable no-undef */
  }

  componentDidMount() {
    this.sendPageView(this.props.history.location);
    this.props.history.listen(this.sendPageView);
  }

  sendPageView(location) {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }
}

GAListener.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(GAListener);
