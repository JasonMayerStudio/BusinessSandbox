/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import initialState from '../../reducers/initialState';
import configureStore from '../../store/configureStore';

import MerchantDrawer from '../CreateMerchantDrawer';

/**
 * Import components to be tested
 */
import { EditMerchantDrawer } from './EditMerchantDrawer';

/**
 * The actual component unit test
 */
describe('EditMerchantDrawer', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        toggleSecondaryDrawer: () => {},
      };
      wrapper = shallow(<EditMerchantDrawer {...props} />);
    });

    it('should display a EditMerchantDrawer container', function () {
      expect(wrapper).to.have.length(1);
    });
  });

  describe('props tests', function () {
    let props;
    let wrapper;
    let toggleDrawer;
    let editMerchantDrawerState;
    let store;

    beforeEach(function () {
      toggleDrawer = sinon.spy();

      editMerchantDrawerState = Object.assign({}, initialState);
      store = configureStore(editMerchantDrawerState);

      props = {
        toggleSecondaryDrawer: toggleDrawer,
      };

      wrapper = mount(
        <Provider store={store}>
          <MemoryRouter>
            <EditMerchantDrawer {...props} />
          </MemoryRouter>
        </Provider>,
      );
    });

    it('should toggle the drawer when mounted', function () {
      expect(toggleDrawer.called).to.be.true;
    });

    it('should include a MerchantDrawer', function () {
      const merchantDrawer = wrapper.find(MerchantDrawer);

      expect(merchantDrawer).to.have.lengthOf(1);
    });

    it('should pass an edit flag to MerchantDrawer', function () {
      const merchantDrawer = wrapper.find(MerchantDrawer);

      expect(merchantDrawer.prop('isEditLocation')).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
