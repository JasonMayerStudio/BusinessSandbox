import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from 'Components/Button/PrimaryButton';

import Listener from 'Utils/listener';

import { setUserTermsAccepted } from '../../api/userApi';

import './TermsAndConditions.scss';

class TermsAndConditions extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.acceptTermsAndConditions = this.acceptTermsAndConditions.bind(this);
  }

  acceptTermsAndConditions() {
    // @TODO This should not be hardcoded numbers.
    let termsId;
    switch (this.props.language) {
      case 'en-US':
        termsId = 2;
        break;
      case 'en-GB':
        termsId = 1;
        break;
      case 'fr-CA':
        termsId = 3;
        break;
      case 'zh-Hans':
        termsId = 4;
        break;
      case 'zh-Hant':
        termsId = 5;
        break;
      default:
        termsId = 2;
    }

    setUserTermsAccepted(termsId)
      .then(() => {
        Listener.trigger('TERMS_ACCEPTED');
      });
  }

  render() {
    return (
      <div className="terms-and-conditions-wrapper">
        <div className="terms-and-conditions">
          <h1 className="terms-and-conditions-header">Terms & Conditions</h1>
          <div className="terms-and-conditions-content">
            <span className="terms-and-conditions-content-header">
              Introduction
            </span>
            These Website Standard Terms and Conditions written on this webpage shall manage your use of this website. These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

            Minors or people below 18 years old are not allowed to use this Website.
            <span className="terms-and-conditions-content-header">Intellectual Property Rights</span>

            Other than the content you own, under these Terms, Something and/or its licensors own all the intellectual property rights and materials contained in this Website.

            You are granted limited license only for purposes of viewing the material contained on this Website.

            <span className="terms-and-conditions-content-header">Restrictions</span>

            You are specifically restricted from all of the following:

            publishing any Website material in any other media;

            selling, sublicensing and/or otherwise commercializing any Website material;

            publicly performing and/or showing any Website material;

            using this Website in any way that is or may be damaging to this Website;

            using this Website in any way that impacts user access to this Website;

            using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;

            engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;

            using this Website to engage in any advertising or marketing.

            Certain areas of this Website are restricted from being access by you and Something may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.

            <span className="terms-and-conditions-content-header">Your Content</span>

            In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Something a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.

            Your Content must be your own and must not be invading any third-party’s rights. Something reserves the right to remove any of Your Content from this Website at any time without notice.

            <span className="terms-and-conditions-content-header">No warranties</span>

            This Website is provided “as is,” with all faults, and Something express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.

            <span className="terms-and-conditions-content-header">Limitation of liability</span>

            In no event shall Something, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  Something, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.

            <span className="terms-and-conditions-content-header">Indemnification</span>

            You hereby indemnify to the fullest extent Something from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.

            <span className="terms-and-conditions-content-header">Severability</span>

            If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
            <span className="terms-and-conditions-content-header">Variation of Terms</span>

            Something is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.

            <span className="terms-and-conditions-content-header">Assignment</span>

            The Something is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.

            <span className="terms-and-conditions-content-header">Entire Agreement</span>

            These Terms constitute the entire agreement between Something and you in relation to your use of this Website, and supersede all prior agreements and understandings.

            <span className="terms-and-conditions-content-header">Governing Law & Jurisdiction</span>

            These Terms will be governed by and interpreted in accordance with the laws of the State of Everywhere, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Everywhere for the resolution of any disputes.

            These terms and conditions have been generated at termsandcondiitionssample.com.
          </div>
          <div className="terms-and-conditions-footer">
            <PrimaryButton
              action={this.acceptTermsAndConditions}
            >
              Accept
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
}

TermsAndConditions.propTypes = {
  language: PropTypes.string.isRequired,
};

export default TermsAndConditions;
