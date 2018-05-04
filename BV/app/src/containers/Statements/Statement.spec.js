/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import rootReducer from '../../reducers';
import Statements from './';

describe('Statements', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
      };
      const store = createStore(rootReducer);
      wrapper = shallow(
        <Provider store={store}>
          <MemoryRouter>
            <Statements {...props} />
          </MemoryRouter>
        </Provider>,
      );
    });

    it('should display a Statement container', function () {
      expect(wrapper).to.have.length(1);
    });
  });
});

 /* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
