import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Parser from 'react-html-parser';
import striptags from 'striptags';
import counterpart from 'counterpart';
import moment from 'moment';

import printerImg from 'Assets/img/printer.svg';

import AttachmentDownloader from 'Components/attachment-downloader/AttachmentDownloader';
import BallSyncLoader from 'Components/loaders/BallSyncLoader';
import Button from 'Components/Button';
import ConfirmationModal from 'Components/confirmation-modal/ConfirmationModal.js';
import GarbageIcon from 'Components/icons/GarbageIcon';
import HollowInvertedButton from 'Components/Button/HollowInvertedButton';
import LeftPointerIcon from 'Components/icons/left-pointer-icon/LeftPointerIcon.js';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import { initCommonTranslate } from 'Utils/languages';
import Listener from 'Utils/listener';

import { fetchMessages } from '../../actions/messageActions';

import './MessageDetailDrawer.scss';

function initTranslations() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

class MessageDetailDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalToggled: false,
    };
    this.attachBindings();

    initTranslations();
    initCommonTranslate();
  }

  componentWillMount() {
    this.setState({ loading: true });
    this.useExtendedDrawer();

    this.props.getMessages()
      .then(() => {
        const message = this.props.messages.filter((singleMessage) => {
          return singleMessage.id === this.props.messageId;
        });

        this.setState({
          message: message[0],
          loading: false,
        });
      });
  }

  componentDidMount() {
    this.toggleDrawer();
  }

  componentWillUnmount() {
    this.toggleDrawer();
    this.useExtendedDrawer();
  }

  attachBindings() {
    this.closeDrawer = this.closeDrawer.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.markAsUnread = this.markAsUnread.bind(this);
    this.dangerAction = this.dangerAction.bind(this);
    this.printMessage = this.printMessage.bind(this);
    this.toggleDrawer = this.props.toggleDrawer.bind(this);
    this.useExtendedDrawer = this.props.useExtendedDrawer.bind(this);
    this.downloadAttachment = this.downloadAttachment.bind(this);
  }

  closeDrawer(event) {
    event.preventDefault();
    this.props.history.push('/messages');
  }

  markAsUnread() {
    Listener.trigger('MARK_AS_UNREAD', this.state.message);
  }

  dangerAction(event) {
    Listener.trigger('DELETE_MESSAGE', this.state.message);
    this.closeDrawer(event);
  }

  toggleModal() {
    this.setState({
      modalToggled: !this.state.modalToggled,
    });
  }

  printMessage() {
    const attachments = this.state.message.attachments;
    const messageWindow = window.open('', 'Print Message', 'height=600,width=800');
    messageWindow.document.write(`<html><head><title>${this.state.message.type}</title>`);
    messageWindow.document.write('</head></body>');
    messageWindow.document.write(`<strong>${this.state.message.type}</strong><br>`);
    messageWindow.document.write(`${moment(this.state.message.receivedDate).format(this.props.preferences.dateFormat)}<br>`);
    messageWindow.document.write(`${striptags(this.state.message.body)}<br>`);
    if (attachments) {
      for (let i = 0; i < attachments.length; i += 1) {
        messageWindow.document.write(`Attachment Name: ${attachments[i].name}<br>`);
      }
    }
    messageWindow.document.write('</body></html');

    messageWindow.document.close();
    messageWindow.focus();
    messageWindow.print();
    messageWindow.close();

    return true;
  }

  get heroButton() {
    return (
      <div className="message-detail-drawer-hero-buttons">
        <HollowInvertedButton
          type="button"
          action={() => this.markAsUnread(event)}
        >
          {counterpart('messageDetail.markAsUnread')}
        </HollowInvertedButton>
        <ConfirmationModal
          isToggled={this.state.modalToggled}
          toggleModal={this.toggleModal}
          title={counterpart('globalTranslate.messages.deleteTitle')}
          actionText={counterpart('globalTranslate.messages.deleteActionText')}
          cancelButtonText={counterpart('globalTranslate.drawer.cancel')}
          dangerButtonText={counterpart('globalTranslate.drawer.delete')}
          dangerAction={this.dangerAction}
          buttonCategory="hollow inverted"
        >
          <GarbageIcon />
        </ConfirmationModal>
      </div>
    );
  }

  downloadAttachment(attachment) {
    window.open(attachment.link);
  }

  render() {
    const allowedTags = ['b', 'i', 'em', 'strong', 'a', 'p', 'br'];

    if (this.state.loading) {
      return (
        <BallSyncLoader />
      );
    } else {
      return (
        <section className="drawer-content message-detail-drawer">
          <div className="drawer-heading">
            <Button
              type="button"
              iconDirection="left"
              icon={LeftPointerIcon}
              action={this.closeDrawer}
            >
              {counterpart('messageDetail.return')}
            </Button>
          </div>
          <div className="drawer-hero">
            <div className="drawerTitles">
              <h1 className="drawer-title">{this.state.message.type}</h1>
              <h4 className="drawer-subtitle">
                {moment(this.state.message.receivedDate).format(this.props.preferences.dateFormat)}
              </h4>
            </div>
            {this.heroButton}
          </div>
          <div className="drawer-data">
            <p className="message-content">
              {Parser(striptags(this.state.message.body, allowedTags))}
            </p>
            {this.state.message.attachments && this.state.message.attachments.length && <AttachmentDownloader
              message={this.state.message}
              downloadAttachment={this.downloadAttachment}
            />}
            <button
              type="button"
              className="button button-primary icon-only button-print"
              onClick={this.printMessage}
            >
              <img style={{ height: '60%' }} src={printerImg} alt="Print Message" />
            </button>
          </div>
        </section>
      );
    }
  }
}

MessageDetailDrawer.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  useExtendedDrawer: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  messages: PropTypes.array,
  messageId: PropTypes.number.isRequired,
  getMessages: PropTypes.func.isRequired,
  preferences: PropTypes.object.isRequired,
};

MessageDetailDrawer.defaultProps = {
  messages: [],
};

function mapStateToProps(state, ownProps) {
  const messageId = parseInt(ownProps.match.params.messageId, 10);
  return {
    messages: state.messages.data,
    messageId,
    preferences: selectCurrentPreferences(state.preferences),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMessages: () => dispatch(fetchMessages()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageDetailDrawer));
