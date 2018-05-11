/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import { expect } from 'chai';

import initialState from './initialState';

describe('initialState constants', function () {
  it('should supply a feature flags object', function () {
    expect(Object.keys(initialState)).to.contain('featureFlags');
  });

  it('should supply an empty global filter object', function () {
    expect(initialState.globalFilter.orgIds).to.eql([]);
    expect(initialState.globalFilter.filters).to.eql([]);
  });

  it('should supply a basic object to hold roles and permissions', function () {
    expect(initialState.rolesPermissions.data).to.eql([]);
    expect(initialState.rolesPermissions.isFetching).to.be.false;
    expect(initialState.rolesPermissions.lastUpdated).to.not.be.ok;
    expect(initialState.rolesPermissions.error).to.not.be.ok;
  });

  it('should start with an empty auth object', function () {
    expect(initialState.auth.isFetching).to.be.false;
    expect(initialState.auth.session).to.not.be.ok;
    expect(initialState.auth.error).to.not.be.ok;
  });

  it('should start with an empty user list', function () {
    expect(initialState.users.data).to.eql([]);
    expect(initialState.users.isFetching).to.be.false;
    expect(initialState.users.lastUpdated).to.not.be.ok;
    expect(initialState.users.error).to.not.be.ok;
  });

  it('should start with an empty merchant list', function () {
    expect(initialState.merchants.data).to.eql([]);
    expect(initialState.merchants.lastMerchantRegistered).to.not.be.ok;
    expect(initialState.merchants.isFetching).to.be.false;
    expect(initialState.merchants.lastUpdated).to.not.be.ok;
    expect(initialState.merchants.error).to.not.be.ok;
  });

  it('should start with an empty report list', function () {
    expect(initialState.reports.data).to.eql([]);
    expect(initialState.reports.isFetching).to.be.false;
    expect(initialState.reports.lastUpdated).to.not.be.ok;
    expect(initialState.reports.error).to.not.be.ok;
  });

  it('should start with an empty current report', function () {
    expect(initialState.currentReport.reportId).to.eq(0);
    expect(initialState.currentReport.data).to.eql({});
    expect(initialState.currentReport.visualizations).to.eql([]);
    expect(initialState.currentReport.isFetching).to.be.false;
    expect(initialState.currentReport.lastUpdated).to.not.be.ok;
    expect(initialState.currentReport.error).to.not.be.ok;
  });

  it('shoulds tart with an empty current report detail', function () {
    expect(initialState.currentReportDetail.rowId).to.eq(0);
    expect(initialState.currentReportDetail.data).to.eql({});
    expect(initialState.currentReportDetail.isFetching).to.be.false;
    expect(initialState.currentReportDetail.lastUpdated).to.not.be.ok;
    expect(initialState.currentReportDetail.error).to.not.be.ok;
  });

  it('should start with an empty array of filters for reports', function () {
    expect(initialState.currentReportFilters).to.eql([]);
  });

  it('should start with an empty saved report filters indexed object', function () {
    expect(initialState.savedReportFilters).to.eql({});
  });

  it('should start with an empty message list', function () {
    expect(initialState.messages.data).to.eql([]);
    expect(initialState.messages.isFetching).to.be.false;
    expect(initialState.messages.lastUpdated).to.not.be.ok;
    expect(initialState.messages.error).to.not.be.ok;
  });

  it('should start with an empty statement list', function () {
    expect(initialState.statements.data).to.eql([]);
    expect(initialState.statements.isFetching).to.be.false;
    expect(initialState.statements.lastUpdated).to.not.be.ok;
    expect(initialState.statements.error).to.not.be.ok;
  });

  it('should start with an empty templates list', function () {
    expect(initialState.templates.data).to.eql([]);
    expect(initialState.templates.isFetching).to.be.false;
    expect(initialState.templates.lastUpdated).to.not.be.ok;
    expect(initialState.templates.error).to.not.be.ok;
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
