import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import ProgressBar from './ProgressBar.js';


const completed = 2;
const total = 3;

function backButtonHandler() {
  alert('You clicked the back button in the progress bar.'); // eslint-disable-line
}

export default () => (
  <Page>
    <h2>ProgressBar</h2>

    <p>Use this component to indicate progress along a multiple step path.</p>

    <p>It is often used with forms where the information is entered on more than one pane or page, but it can also be used in a read-only fashion, to show where something is a relation to a workflow (for instance, status of user on-boarding).</p>

    <ReactSpecimen span={6}>
      <ProgressBar
        completed={completed}
        total={total}
        extraClass="some-class"
      />
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <ProgressBar
        completed={completed}
        total={total}
        extraClass="some-class"
        goBackHandler={backButtonHandler}
      />
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <ProgressBar
        completed={completed}
        total={total}
        extraClass="some-class"
        goBackHandler={backButtonHandler}
        goBackText="Previous Step: User Profile"
      />
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>completed</strong>: the number of steps that have been completed</li>
      <li><strong>total</strong>: the total number of steps in the process</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>extraClass</strong>:
        an extra style class that will go on the component root element
      </li>
      <li><strong>goBackHandler</strong>:
        if present, a left triangle will be displayed as a button with this handler
      </li>
      <li><strong>goBackText</strong>:
        if present, and a goBackHanlder is present, this text will be added beside the left triangle
      </li>
    </ul>

  </Page>
);
