import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';

import PrimaryButton from 'Components/Button/PrimaryButton';
import ReportsIcon from 'Components/icons/ReportsIcon';

import SummaryBox, {
  SummaryBoxHeading,
  SummaryBoxBody,
  SummaryBoxSection,
  SummaryBoxFooter,
} from 'Components/SummaryBox';

const report = {
  id: 68,
  type: 'Batch Report',
  dataset: 'Batch Report',
  columnsSelected: [
    {
      name: 'Batch Date',
    },
    {
      name: 'Batch Amount',
    },
    {
      name: 'Purchase Count',
    },
    {
      name: 'Refund Amount',
    },
    {
      name: 'Adjustment Amount',
    },
  ],
};

class SummaryBoxDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSection: '',
    };
  }

  sectionHandler = (identifier) => {
    this.setState({
      activeSection: identifier,
    });
  }

  render() {
    const sections = [];

    /* eslint-disable comma-dangle */
    // 1st section
    sections.push(
      <SummaryBoxSection
        buttonAction={this.sectionHandler}
        buttonText="Edit"
        identifier="report-type"
        key="report-type"
        title="Report Type"
      >
        {report.type}
      </SummaryBoxSection>
    );

    // 2nd section
    const columnList = report.columnsSelected.length
      ? (
        <ol>
          {
            report.columnsSelected.reduce((list, column, index) => {
              if (index < 3) {
                return list.concat(<li key={column.name}>{column.name}</li>);
              } else if (index === 4) {
                return list.concat(<li key="additional-column-count"><strong>{`+ ${report.columnsSelected.length - 3} others`}</strong></li>);
              } else {
                return list;
              }
            }, [])
          }
        </ol>
      )
      : (
        <span className="danger-text">None selected</span>
      );
    sections.push(
      <SummaryBoxSection
        buttonAction={this.sectionHandler}
        buttonText="Edit"
        identifier="data-set"
        key="data-set"
        title="Data Set"
      >
        {columnList}
      </SummaryBoxSection>
    );

    // 3rd section
    sections.push(
      <SummaryBoxSection
        identifier="report-filters"
        key="report-filters"
        title="Report Filters"
      >
        <span className="danger-text">None selected</span>
      </SummaryBoxSection>
    );
    /* eslint-enable comma-dangle */

    return (
      <Page>
        <h2>SummaryBox</h2>

        <p>Use this component to build a summary box for a multi-step processes.</p>

        {
          this.state.activeSection &&
          <p>The current active section is: <strong>{this.state.activeSection}</strong>.</p>
        }

        <h3>SummaryBox Example</h3>

        <ReactSpecimen span={3}>
          <SummaryBox>
            <SummaryBoxHeading
              title="Report Summary"
              icon={ReportsIcon}
            />
            <SummaryBoxBody>
              {sections}
            </SummaryBoxBody>
            <SummaryBoxFooter>
              <PrimaryButton
                action={() => {}}
              >
                Create Report
              </PrimaryButton>
            </SummaryBoxFooter>
          </SummaryBox>
        </ReactSpecimen>

        <h3>Subcomponents and Parameters</h3>

        <h4>SummaryBox</h4>
        <p>This wrapper is mainly to scope the styling. The wrapper’s children will control the actual content.</p>
        <h5>Required Parameters</h5>
        <ul>
          <li><strong>children</strong>: React components that actually display the title, search functionality, actions, and lists</li>
        </ul>

        <h5>Optional Parameters</h5>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>

        <h4>SummaryBoxHeading</h4>
        <p>This controls the title area for the whole summary box. You can optional include any component icon, which will appear before the title, and any extra child componenets, which will appear after the title.</p>
        <h5>Required Parameters</h5>
        <ul>
          <li><strong>title</strong>: the title for the whole summary box</li>
        </ul>

        <h5>Optional Parameters</h5>
        <ul>
          <li><strong>children</strong>: React components that actually the subsections of each panel</li>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
          <li><strong>icon</strong>:
            an icon component from the pattern library, which will be displayed in front of the title
          </li>
        </ul>

        <h4>SummaryBoxBody</h4>
        <p>This wrapper is mainly to scope the styling. The wrapper’s children will control the actual content.</p>
        <h5>Required Parameters</h5>
        <ul>
          <li><strong>children</strong>: React components that actually display the title, search functionality, actions, and lists</li>
        </ul>

        <h5>Optional Parameters</h5>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>

        <h4>SummaryBoxSection</h4>
        <p>Put one or more of these components inside a SummaryBoxBody. Each SummaryBoxSection accepts a title, an optional set of children elements, and text and action for an optional button.</p>
        <h5>Required Parameters</h5>
        <ul>
          <li><strong>children</strong>: React components that actually display the title, search functionality, actions, and lists</li>
          <li><strong>identifier</strong>: a string or number unique among all the SummaryBoxSection components in the SummaryBox</li>
        </ul>

        <h5>Optional Parameters</h5>
        <ul>
          <li><strong>buttonAction</strong>: handler function for the optional button</li>
          <li><strong>buttonText</strong>: already-translated text label for the optional button</li>
          <li><strong>children</strong>: React components that actually display the title, search functionality, actions, and lists</li>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>

        <h4>SummaryBoxFooter</h4>
        <p>This wrapper is mainly to scope the styling. The wrapper’s children will control the actual content.</p>
        <h5>Required Parameters</h5>
        <ul>
          <li><strong>children</strong>: React components that actually display the title, search functionality, actions, and lists</li>
        </ul>

        <h5>Optional Parameters</h5>
        <ul>
          <li><strong>extraClass</strong>:
            an extra style class that will go on the component root element
          </li>
        </ul>

      </Page>
    );
  }
}

export default SummaryBoxDoc;
