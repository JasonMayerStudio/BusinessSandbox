/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import moxios from 'moxios';

import * as templateActions from './templateActions';
import * as types from './actionTypes';

describe('Template actions', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('should create an action to request templates', function () {
    const expectedAction = {
      type: types.REQUEST_TEMPLATES,
    };

    const action = templateActions.requestTemplates();

    expect(action).to.eql(expectedAction);
  });

  it('should create an action to receive templates successfully', function () {
    /* eslint-disable quote-props, quotes */
    const templates = [
      {
        "description": "English description of Authorizations ",
        "id": 7,
        "table": "authorizations_paginated",
        "name": "Authorizations ",
        "type": "LOOKER",
        "schema": "authorizations",
      },
      {
        "description": "English description of Batches ",
        "id": 8,
        "table": "batch_paginated",
        "name": "Batches ",
        "type": "LOOKER",
        "schema": "batches",
      },
    ];
    /* eslint-enable quote-props, quotes */

    const expectedAction = {
      type: types.RECEIVE_TEMPLATES_SUCCESS,
      templates,
      receivedAt: Date.now(),
    };

    const action = templateActions.receiveTemplatesSuccess(templates);

    expect(action).to.eql(expectedAction);
  });

  it('should create an action that handles failure to receive templates successfully', function () {
    const error = 'Failed to fetch templates successfully';

    const expectedAction = {
      type: types.RECEIVE_TEMPLATES_FAILURE,
      error,
    };

    const action = templateActions.receiveTemplatesFailure(error);

    expect(action).to.eql(expectedAction);
  });

  it('should create a series of actions to successfully receive templates', function (done) {
    /* eslint-disable quote-props, quotes */
    const templates = [
      {
        "description": "English description of Authorizations ",
        "id": 7,
        "table": "authorizations_paginated",
        "name": "Authorizations ",
        "type": "LOOKER",
        "schema": "authorizations",
      },
      {
        "description": "English description of Batches ",
        "id": 8,
        "table": "batch_paginated",
        "name": "Batches ",
        "type": "LOOKER",
        "schema": "batches",
      },
    ];
    /* eslint-enable quote-props, quotes */

    const dispatch = sinon.spy();

    moxios.withMock(() => {
      templateActions.fetchTemplates()(dispatch);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();

        request.respondWith({
          status: 200,
          response: {
            data: templates,
          },
        })
        .then(() => {
          expect(request.url).to.eql('http://localhost:3009/templates');
          expect(request.config.method).to.eql('get');
          expect(dispatch.called).to.be.true;
          done();
        });
      }, callbackDelay);
    });
  });
});
/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
