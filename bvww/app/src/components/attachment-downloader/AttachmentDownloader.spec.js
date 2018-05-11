/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import AttachmentDownloader from './AttachmentDownloader';

/**
 * The actual component unit test
 */
describe('AttachmentDownloader', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        message: {
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
        },
        attachmentLocation: '',
      };
      wrapper = shallow(<AttachmentDownloader {...props} />);
    });

    it('should display a AttachmentDownloader', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let handler;
    let wrapper;

    beforeEach(function () {
      handler = sinon.spy();

      props = {
        message: {
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
        },
        downloadAttachment: handler,
        attachmentLocation: '',
      };

      wrapper = mount(<AttachmentDownloader {...props} />);
    });

    it('should download on click', function () {
      const downloadTarget = wrapper.find('.attachment-downloader__content').first();

      downloadTarget.simulate('click');

      wrapper.setProps({ attachmentLocation: wrapper.props().message.attachments[0].link });

      expect(handler.calledOnce).to.be.true;
      expect(wrapper.props().attachmentLocation).to.not.be.empty;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
