/* eslint-disable func-names, prefer-arrow-callback, no-unused-expressions */

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

/**
 * Import components to be tested
 */
import ConfirmationModal from './ConfirmationModal';

/**
 * The actual component unit test
 */
describe('ConfirmationModal', function () {
  describe('smoke test', function () {
    let props;
    let wrapper;

    beforeEach(function () {
      props = {
        isToggled: false,
        toggleModal: () => {},
        title: '',
        actionText: '',
        cancelButtonText: '',
        dangerButtonText: '',
        dangerAction: () => {},
      };
      wrapper = shallow(<ConfirmationModal {...props}>Delete</ConfirmationModal>);
    });

    it('should display a ConfirmationModal', function () {
      expect(wrapper).to.have.lengthOf(1);
    });
  });

  describe('props tests', function () {
    let props;
    let toggleHandler;
    let dangerHandler;
    let wrapper;

    beforeEach(function () {
      toggleHandler = sinon.spy();
      dangerHandler = sinon.spy();

      props = {
        isToggled: false,
        toggleModal: toggleHandler,
        title: 'Delete Message(s)',
        actionText: 'This action cannot be undone. Are you sure?',
        cancelButtonText: 'Cancel',
        dangerButtonText: 'Delete',
        dangerAction: dangerHandler,
        buttonCategory: 'link-inline',
      };

      wrapper = mount(<ConfirmationModal {...props}>Delete</ConfirmationModal>);
    });

    it('should display its children props', function () {
      expect(wrapper.text()).to.equal('Delete');
    });

    it('should display the button with an optional button category style', function () {
      const buttonElement = wrapper.find('button');
      expect(buttonElement.hasClass('button-link-inline')).to.be.true;
    });

    it('toggles the modal on click', function () {
      const buttonTarget = wrapper.find('.button-link-inline');

      buttonTarget.simulate('click');

      wrapper.setProps({ isToggled: true });

      const wrapperTarget = wrapper.find('.confirmation-modal-wrapper');

      expect(wrapperTarget).to.have.lengthOf(1);

      expect(toggleHandler.calledOnce).to.be.true;
    });

    it('should have text in tags where their props are strings', function () {
      wrapper.setProps({ isToggled: true });
      expect(wrapper.props().title).to.be.a('string');
      expect(wrapper.props().cancelButtonText).to.be.a('string');
      expect(wrapper.props().actionText).to.be.a('string');
      expect(wrapper.props().dangerButtonText).to.be.a('string');

      const titleTarget = wrapper.find('.headline');
      expect(titleTarget.text()).to.equal(wrapper.props().title);

      const contentTarget = wrapper.find('.content');
      expect(contentTarget.text()).to.equal(wrapper.props().actionText);

      const cancelTarget = wrapper.find('.button-link');
      expect(cancelTarget.text()).to.equal(wrapper.props().cancelButtonText);

      const dangerTarget = wrapper.find('.button-small').at(1);
      expect(dangerTarget.text()).to.equal(wrapper.props().dangerButtonText);
    });

    it('should close the modal on cancel', function () {
      wrapper.setProps({ isToggled: true });

      const cancelTarget = wrapper.find('.button-link');

      cancelTarget.simulate('click');

      expect(toggleHandler.calledOnce).to.be.true;
    });

    it('should close the modal when the dangerous action is completed', function () {
      wrapper.setProps({ isToggled: true });

      const dangerTarget = wrapper.find('.button-small').at(1);

      dangerTarget.simulate('click');

      expect(dangerHandler.calledOnce).to.be.true;
    });
  });
});

/* eslint-enable func-names, prefer-arrow-callback, no-unused-expressions */
