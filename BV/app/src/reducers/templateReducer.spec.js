/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';
import sinon from 'sinon';

import * as templateActions from '../actions/templateActions';
import templateReducer from './templateReducer';

describe('Template reducer', function () {
  let clock;

  beforeEach(function () {
    const now = new Date().getTime();
    clock = sinon.useFakeTimers(now);
  });

  afterEach(function () {
    clock.restore();
  });

  describe('receiving all templates', function () {
    it('should set the templates state for requesting templates', function () {
      const stateBefore = {
        data: [],
        isFetching: false,
        lastUpdated: null,
        error: { message: 'This earlier call failed.' },
      };

      const action = templateActions.requestTemplates();

      const result = templateReducer(stateBefore, action);

      expect(result.isFetching).to.be.true;
      expect(result.data).to.eql(stateBefore.data);
      expect(result.lastUpdated).to.eql(stateBefore.lastUpdated);
      expect(result.error).to.eql(null);
    });

    it('should set the templates on state when templates are received', function () {
      const stateBefore = {
        data: [],
        isFetching: true,
        lastUpdated: null,
        error: {},
      };
      const templates = [
        {
          id: 9,
        },
        {
          id: 11,
        },
      ];

      const action = templateActions.receiveTemplatesSuccess(templates);

      const result = templateReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.data).to.eql(templates);
      expect(result.lastUpdated).to.equal(Date.now());
      expect(result.error).to.eql(null);
    });

    it('should set the error object on state when getting templates fails', function () {
      const stateBefore = {
        data: [{ id: 3 }],
        isFetching: true,
        lastUpdated: Date.now(),
        error: {},
      };
      const error = {
        message: 'Cannot retrieve templates at this time',
      };

      const action = templateActions.receiveTemplatesFailure(error);

      clock.tick(500); // simulate 0.5 second wait, to make sure lastUpdated remains the same

      const result = templateReducer(stateBefore, action);

      expect(result.isFetching).to.be.false;
      expect(result.data).to.eql(stateBefore.data);
      expect(result.lastUpdated).to.equal(stateBefore.lastUpdated);
      expect(result.error).to.eql(error);
    });
  });
});
