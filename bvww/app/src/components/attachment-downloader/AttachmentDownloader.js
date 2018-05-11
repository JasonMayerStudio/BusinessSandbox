import React from 'react';
import PropTypes from 'prop-types';

import './AttachmentDownloader.scss';

const AttachmentDownloader = ({ message, downloadAttachment, attachmentLocation }) => {
  const attachments = message.attachments.map((attachment) => {
    const name = attachment.name.toLowerCase().replace(/\s/g, '');
    return (
      <div
        key={`${message.id}-${name}`}
        className="attachment-downloader"
      >
        <div
          role="button"
          tabIndex={0}
          className="attachment-downloader__content"
          onClick={() => downloadAttachment(attachment)}
        >
          {attachment.name && <p className="emphasis emphasis-filename">{name}</p>}
          <p className="emphasis emphasis-size">{attachment.size.toLowerCase()}</p>
        </div>
        <div className="attachment-downloader__icon" />
      </div>
    );
  });

  return (
    <section className="attachment-downloader__wrapper">
      {attachments}
      {attachmentLocation && `Your last download was from ${attachmentLocation}`}
    </section>
  );
};

AttachmentDownloader.propTypes = {
  message: PropTypes.object.isRequired,
  downloadAttachment: PropTypes.func,
  attachmentLocation: PropTypes.string,
};

AttachmentDownloader.defaultProps = {
  downloadAttachment: () => {},
  attachmentLocation: '',
};

export default AttachmentDownloader;
