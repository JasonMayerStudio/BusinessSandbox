/* eslint-disable func-names, prefer-arrow-callback */

import { expect } from 'chai';

import { createStore } from 'redux';

import {
  getDataAccess,
  getGlobalFilterFirstTwoMerchantsSelected } from 'Helpers/testHelpers/testMocks.js';

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as globalFilterActions from '../actions/globalFilterActions';
import * as authActions from '../actions/authActions';

describe('Store', function () {
  it('should handle adding to the global filter', function () {
    // arrange
    const store = createStore(rootReducer, initialState);
    const dataAccess = getDataAccess();
    const newBranch = getGlobalFilterFirstTwoMerchantsSelected(dataAccess);

    // act
    const action = globalFilterActions.addToGlobalFilter(newBranch);
    store.dispatch(action);

    // assert
    const actual = store.getState().globalFilter;
    const expected = {
      filters: [newBranch],
      orgIds: [323, 324],
    };
    expect(actual).to.eql(expected);
  });

  it('should handle accepting an auth object on login', function () {
    // arrange
    const store = createStore(rootReducer, initialState);
    const newSessionFromLogin = {
      sessionToken: 5,
      user: {
        firstName: 'GP Tech',
        lastName: 'Admin',
        email: 'gp_tech support_admin',
        role: {
          description: 'string',
          id: 0,
          key: 'string',
          name: 'string',
          permissions: [
            {
              abbreviation: 'string',
              description: 'string',
              id: 0,
              key: 'string',
              name: 'string',
              optional: true,
            },
          ],
        },
        status: 'ACTIVE',
        userId: 0,
      },
    };

    // act
    const action = authActions.loginSuccess(newSessionFromLogin);
    store.dispatch(action);

    // assert
    const actual = store.getState().auth;
    const expected = {
      isFetching: false,
      session: {
        sessionToken: 5,
        user: {
          firstName: 'GP Tech',
          lastName: 'Admin',
          email: 'gp_tech support_admin',
          role: {
            description: 'string',
            id: 0,
            key: 'string',
            name: 'string',
            permissions: [
              {
                abbreviation: 'string',
                description: 'string',
                id: 0,
                key: 'string',
                name: 'string',
                optional: true,
              },
            ],
          },
          status: 'ACTIVE',
          userId: 0,
        },
      },
      error: null,
    };
    expect(actual).to.eql(expected);
  });
});

/* eslint-enable func-names, prefer-arrow-callback */
