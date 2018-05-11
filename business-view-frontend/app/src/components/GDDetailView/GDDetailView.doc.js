import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import GDDetailView from 'Components/GDDetailView';

import {
  getSingleReportv2,
  getDetailViewDatav2,
} from 'Helpers/testHelpers/testReportAPIv2Mocks';

import { getDetailViewStructure } from './data/detailViewStructure';

const report = getSingleReportv2();
const data = getDetailViewDatav2();

class GDDetailViewDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
      report,
    };
  }

  render() {
    return (
      <Page>
        <h2>GDDetailView</h2>

        <p>
          Use this component for presenting in depth data in a detail view
          drawer.
        </p>

        <ReactSpecimen span={6}>
          <GDDetailView
            type="report"
            data={data}
            goPrevious={() => {}}
            goNext={() => {}}
            goBack={() => {}}
            hierarchyTitle="Hierarchy"
            hierarchyContent="Lorem ipsum dolor"
            translations={{
              corp: 'Corp',
              region: 'Region',
              principal: 'Principal',
              associate: 'Associate',
              chain: 'Chain',
              title: report.name,
              returnToText: 'Return to Users',
              hierarchy: 'Hierarchy',
              subtitle: `${report.name} Details`,
            }}
            structure={getDetailViewStructure()}
            subtitleTitle={`${report.name} Details`}
            subtitleContent="Lorem ipsum dolor"
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Optional Parameters</h4>
        <ul>
          <li>
            <strong>data</strong>: dataset to be represented in detail view
          </li>
          <li>
            <strong>extraClass</strong>: an extra style class that will go on
            the component root element
          </li>
          <li>
            <strong>hierarchyContent</strong>: text description of hierachy
            breakdown
          </li>
          <li>
            <strong>hierarchyTitle</strong>: title of text description of
            hierachy content
          </li>
          <li>
            <strong>subtitleTitle</strong>: title of text description of
            subtitle
          </li>
          <li>
            <strong>subtitleContent</strong>: text description of subtitle
          </li>
          <li>
            <strong>translations</strong>: object for translations of all string
            content
          </li>
          <li>
            <strong>type</strong>: string to allow checks for what type of
            detail view content should be shown
          </li>
        </ul>
      </Page>
    );
  }
}

export default GDDetailViewDoc;
