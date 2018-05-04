/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

/**
 * Import components to be tested
 */
import CardType from './CardType';

/**
 * The actual component unit test
 */
describe('CardType', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        type: '',
        abbreviation: '',
      };
      wrapper = shallow(<CardType {...props} />);
    });

    it('should display a CardType', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;

    describe('with a mapped icon', function () {
      beforeEach(function () {
        props = {
          type: 'Visa',
          abbreviation: 'VI',
        };

        wrapper = mount(<CardType {...props} />);
      });

      it('should display an icon', function () {
        const image = wrapper.find('img');
        expect(image).to.have.lengthOf(1);
      });
    });

    describe('without a mapped icon', function () {
      beforeEach(function () {
        props = {
          type: 'Disney',
          abbreviation: 'DISN',
        };

        wrapper = mount(<CardType {...props} />);
      });

      it('should display a span', function () {
        const span = wrapper.find('span');
        expect(span).to.have.lengthOf(1);
      });
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
