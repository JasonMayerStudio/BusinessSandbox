/* eslint-disable func-names, prefer-arrow-callback, dot-notation, no-unused-expressions */
import { expect } from 'chai';
import moxios from 'moxios';
import sinon from 'sinon';

// SUT
import {
  getDashboardVisualizations,
} from './dashboardApi';

describe('dashboardApi', function () {
  const callbackDelay = 5;

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('getDashboardVisualizations', function () {
    it('should make an API call to get Dashboard visualizations', function (done) {
      const query = {
        filters: [
          {},
        ],
      };
      const expectedURL = 'dashboards/primary_dashboard';
      const expectedUrlRegex = /dashboards\/primary_dashboard$/;
      const expectedRequestBody = JSON.stringify('https://looker-dev.globalpay.com/login/embed/%2Fembed%2Fdashboards%2F15%3F?nonce=%22cete870bgi8lop36076dp5dmcm%22&time=1520878983&session_length=86400&external_user_id=%221%22&permissions=%5B%22access_data%22%2C%22see_looks%22%2C%22see_lookml_dashboards%22%2C%22see_user_dashboards%22%5D&models=%5B%22disputes_np%22%2C%22settled_transactions_np%22%2C%22batches_np%22%2C%22authorizations_np%22%2C%22equipment_details_np%22%2C%22eu_transaction_np%22%2C%22authorizations_paginated%22%2C%22batch_paginated%22%2C%22settled_transactions_paginated%22%2C%22chargebacks_paginated%22%5D&access_filters=%7B%7D&group_ids=%5B%5D&external_group_id=%5B%5D&user_attributes=%7B%22email%22%3A%22gp_tech_support_admin%40globalpay.com%22%7D&force_logout_login=false&signature=Yt9863cMr8dTRqCA%2FKiwJdRWCEs%3D');
      moxios.stubRequest(expectedURL);
      const onFulfilled = sinon.spy();

      getDashboardVisualizations(query)
        .then(onFulfilled);

      moxios.wait(function () {
        const request = moxios.requests.mostRecent();
        expect(request.url).to.match(expectedUrlRegex);

        request.respondWith({
          status: 200,
          responseText: expectedRequestBody,
        }).then(function () {
          done();
        });
      }, callbackDelay);
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, dot-notation */
