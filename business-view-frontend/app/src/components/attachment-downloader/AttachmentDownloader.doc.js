import React, { Component } from 'react';
import { Page, ReactSpecimen } from 'catalog';
import AttachmentDownloader from './AttachmentDownloader.js';

const message = {
  id: 1,
  subject: 'Message subject',
  body: '<b>Message body</b> can contain HTML',
  status: 'Unread',
  type: 'System message',
  receivedDate: '2017-09-22 13:24:40.622144',
  attachments: [
    {
      name: 'Monthly statement',
      link: 'http://test.download-attachment.com/monthlyStatement',
      size: '1024KB',
    },
    {
      name: 'Quarterly statement',
      link: 'http://test.download-attachment.com/quarterlyStatement',
      size: '2048KB',
    },
  ],
  isChecked: false,
};

export default class AttachmentDownloaderDoc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attachmentLocation: '',
    };

    this.downloadAttachment = this.downloadAttachment.bind(this);
  }

  downloadAttachment(attachment) {
    this.setState({
      attachmentLocation: attachment.link,
    });
  }

  render() {
    return (
      <Page>
        <h2>AttachmentDownloader</h2>

        <p>Use this component for downloading attachments in a message</p>

        <ReactSpecimen span={3}>
          <AttachmentDownloader
            message={message}
            downloadAttachment={this.downloadAttachment}
            attachmentLocation={this.state.attachmentLocation}
          />
        </ReactSpecimen>

        <h3>Parameters</h3>

        <h4>Required Parameters</h4>
        <ul>
          <li><strong>message</strong>: message object to fetch attachments from</li>
        </ul>

        <h4>Optional Parameters</h4>
        <ul>
          <li><strong>downloadAttachment</strong>: function to handle downloading of attachment (eventually to be hooked up to a service)</li>
          <li><strong>attachmentLocation</strong>: prop used to display url of last downloaded item (not needed when hooked up to service)</li>
        </ul>

      </Page>
    );
  }
}
