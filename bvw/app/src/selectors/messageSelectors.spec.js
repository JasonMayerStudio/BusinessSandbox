/* eslint-disable func-names, prefer-arrow-callback, no-prototype-builtins, no-unused-expressions */

import { expect } from 'chai';

// mocks
import { getMessageStoreState } from 'Helpers/testHelpers/testMessageMocks';

import { normalizeMessages } from './messageSelectors';

describe('Message selectors', function () {
  describe('normalizeMessages', function () {
    it('should return an empty array when given a state with an empty data array', function () {
      const messagesResponse = { data: [] };
      const expectedList = [];

      const parsedMessages = normalizeMessages(messagesResponse);

      expect(parsedMessages).to.eql(expectedList);
    });

    it('should return messages with added isChecked key set to false', function () {
      const messagesResponse = getMessageStoreState();

      const parsedMessages = normalizeMessages(messagesResponse);

      const allHaveFalsedCheckedProperty = parsedMessages.every((message) => {
        return (message.hasOwnProperty('isChecked') && !message.isChecked);
      });
      expect(allHaveFalsedCheckedProperty).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-prototype-builtins, no-unused-expressions */
