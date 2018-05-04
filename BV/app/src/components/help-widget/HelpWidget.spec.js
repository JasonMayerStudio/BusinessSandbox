/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import HelpWidget from './HelpWidget';

/**
 * The actual component unit test
 */
describe('HelpWidget', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        isDrawerOpen: false,
        isSecondaryDrawerOpen: false,
        location: {
          pathname: '/reports/1',
        },
      };

      wrapper = shallow(<HelpWidget {...props} />);
    });

    it('should display a HelpWidget', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        isDrawerOpen: false,
        isSecondaryDrawerOpen: false,
        location: {
          pathname: '/reports/1',
        },
      };

      wrapper = mount(<HelpWidget {...props} />);
    });

    it('should show a help widget on toggle', function () {
      wrapper.setState({ isToggled: true });

      expect(wrapper.find('.help-widget-topics')).to.have.lengthOf(1);
    });

    it('should show the correct badge depending on the pathname', function () {
      wrapper.setState({ isToggled: true });

      const badgeTarget = wrapper.find('.page-path');

      expect(badgeTarget.text().toLowerCase()).to.equal('reports');
    });

    it('should hide the help widget on toggle', function () {
      wrapper.setState({ isToggled: false });

      expect(wrapper.find('.help-widget-topics')).to.have.lengthOf(0);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
