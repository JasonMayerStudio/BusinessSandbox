import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import InformationBubble from 'Components/information-bubble/InformationBubble';
import Label from './Label.js';

export default () => (
  <Page>
    <h2>Label</h2>

    <p>Use this component for labeling an input field. A label can also enclose an InformationBubble component, which can be utilized to display information or error states.</p>

    <ReactSpecimen span={3}>
      <Label
        htmlFor="foo-bar"
        className="field-label"
      >
        Foo Bar
      </Label>
    </ReactSpecimen>

    <ReactSpecimen span={3}>
      <Label
        htmlFor="foo-bar"
        className="field-label"
      >
        Foo Bar Baz
        <InformationBubble
          info
          position="top"
          tooltipTitle="Foo Bar Baz"
          tooltipContent="Rally, rally, rally get your adverbs here!"
        />
      </Label>
    </ReactSpecimen>

    <h3>Parameters</h3>

    <h4>Required Parameters</h4>
    <ul>
      <li><strong>htmlFor</strong>: the ID of the label&apos;s associated control element</li>
      <li><strong>children</strong>: text of the label</li>
    </ul>

    <h4>Optional Parameters</h4>
    <ul>
      <li><strong>className</strong>: class name to style label</li>
    </ul>

  </Page>
);
