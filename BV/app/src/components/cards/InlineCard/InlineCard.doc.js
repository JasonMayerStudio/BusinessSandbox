import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import ReportCard from './';

function sampleClickHandler() {
  alert('You clicked the primary button.'); // eslint-disable-line no-alert
}

export default () => (
  <Page>
    <h2>ReportCard</h2>

    <p>Use this component for a ReportCard.</p>

    <ReactSpecimen span={6}>
      <ReportCard
        title="Authorization Reports"
        description="Contains information on authorized transactions from a specified period of time."
        primaryAction={sampleClickHandler}
        primaryActionText="View Report"
      />
    </ReactSpecimen>

    <h3>List of ReportCards</h3>

    <ReactSpecimen span={6}>
      <div className="card-list">
        <ReportCard
          title="Authorization Reports"
          description="Contains information on authorized transactions from a specified period of time."
          primaryAction={sampleClickHandler}
          primaryActionText="View Report"
          badgeType="new"
        />
        <ReportCard
          title="Funding Reports"
          description="Contains information on authorized transactions from a specified period of time."
          primaryAction={sampleClickHandler}
          primaryActionText="View Report"
          cardType="Batch Report"
        />
        <ReportCard
          title="Chargebacks Reports"
          description="Contains information on authorized transactions from a specified period of time."
          primaryAction={sampleClickHandler}
          primaryActionText="View Report"
          cardType="Transaction Report"
          badgeType="draft"
        />
        <ReportCard
          title="Authorization Reports"
          description="Contains information on authorized transactions from a specified period of time."
          primaryAction={sampleClickHandler}
          primaryActionText="View Report"
        />
      </div>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>title</strong>: the text displayed in the header of the ReportCard</li>
      <li><strong>description</strong>: the text displayed in the body of the ReportCard</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>buttonText</strong>: the text to use in the primary button of the ReportCard</li>
    </ul>
  </Page>
);
