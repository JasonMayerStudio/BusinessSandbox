import React from 'react';
import PropTypes from 'prop-types';
import counterpart from 'counterpart';
import moment from 'moment';
import striptags from 'striptags';

import AttachmentIcon from 'Components/icons/attachment-icon/AttachmentIcon.js';
import SmallButton from 'Components/Button/SmallButton';
import Checkbox from 'Components/forms/checkbox/Checkbox.js';
import ConfirmationModal from 'Components/confirmation-modal/ConfirmationModal.js';
import GarbageIcon from 'Components/icons/GarbageIcon';

import { initCommonTranslate } from 'Utils/languages';

import './TableMessages.scss';

const TableMessages = (props) => {
  const rows = props.dataList.map((row) => {
    const checkStatus = row.status.toLowerCase() === 'unread' ? 'message-row unread' : 'message-row';
    return (
      <tr key={row.id} onClick={(event) => props.triggerDrawer(event, row)}>
        <td className="message-row">
          <Checkbox
            id={row.id.toString()}
            onChange={props.onChange}
            isChecked={row.isChecked}
          />
        </td>
        <td className={checkStatus}>{row.type}</td>
        <td className="message-row message-row__body">
          <div className={`${checkStatus} show-xs message-type`}>{row.type}</div>
          {striptags(row.body)}
        </td>
        <td className="message-row">{row.attachments && row.attachments.length && <AttachmentIcon />}</td>
        <td className={checkStatus}>{row.status}</td>
        <td className={checkStatus}>
          <span className="hidden-s">{moment(row.receivedDate).format(props.dateFormat)}</span>
          <span className="show-s">{moment(row.receivedDate).format('MM/DD/YY')}</span>
        </td>
      </tr>
    );
  });

  let statusClass = 'sort';
  let receivedDateClass = 'sort';
  if (props.sort.key === 'status') {
    statusClass += (props.sort.order) ? ' sort-desc' : ' sort-asc';
  } else if (props.sort.key === 'receivedDate') {
    receivedDateClass += (props.sort.order) ? ' sort-desc' : ' sort-asc';
  }

  initCommonTranslate();

  return (
    <article className="table-messages">
      <table className="pure-table table-messages">
        <thead className="pure-table__header">
          <tr>
            <th />
            <th>{counterpart('globalTranslate.messages.type')}</th>
            <th>{counterpart('globalTranslate.messages.message')}</th>
            <th />
            <th className={statusClass} onClick={() => props.handleSort('status')}>{counterpart('globalTranslate.messages.readStatus')}</th>
            <th className={receivedDateClass} onClick={() => props.handleSort('receivedDate')}>{counterpart('globalTranslate.messages.received')}</th>
          </tr>
        </thead>
        <tbody className="pure-table__body">
          <tr className="row-plain">
            <td colSpan={6}>
              <span
                role="button"
                tabIndex={0}
                className="select-all"
                onClick={props.selectAllMessages}
              >
                {props.buttonTranslations[0]}
              </span>
            </td>
          </tr>
          {rows}
        </tbody>
      </table>
      <section className="pure-table__footer">
        <div className="read-actions">
          {props.messageCount === 0 && <span className="hidden-xs"><SmallButton
            action={props.markAllAsRead}
            type="button"
          >
            {props.buttonTranslations[1]}
          </SmallButton></span>}
          {props.messageCount !== 0 && <div>
            {props.unreadToggled && <span className="hidden-xs"><SmallButton
              action={props.markAsRead}
              type="button"
            >
              {props.buttonTranslations[2]}
            </SmallButton></span>}
            {props.readToggled && <span className="hidden-xs"><SmallButton
              action={props.markAsUnread}
              type="button"
            >
              {props.buttonTranslations[3]}
            </SmallButton></span>}
            {
              (props.readToggled || props.unreadToggled) &&
              <ConfirmationModal
                isToggled={props.modalToggled}
                toggleModal={props.toggleModal}
                title={counterpart('globalTranslate.messages.deleteTitle')}
                actionText={counterpart('globalTranslate.messages.deleteActionText')}
                cancelButtonText={counterpart('globalTranslate.drawer.cancel')}
                dangerButtonText={counterpart('globalTranslate.drawer.delete')}
                dangerAction={props.dangerAction}
              >
                <GarbageIcon />
              </ConfirmationModal>
            }
          </div>}
        </div>

        {(props.readToggled || props.unreadToggled) && props.messageCount !== 0 &&
          <div className="footer-right">
            <span className="selected-count">{props.messageCount} {props.messageCount > 1 ?
                      props.selectedTextTranslations[1] :
                      props.selectedTextTranslations[0]} {props.selectedTextTranslations[2]}</span> | <span
                        key="clearAccess"
                        role="button"
                        tabIndex={0}
                        className="clear-button"
                        onClick={props.deselectAllMessages}
                      >{props.buttonTranslations[4]}</span>
          </div>}
      </section>
      <section className="pure-table__data">
        <span className="total-messages hidden-xs">
          {props.totalMessages.length} {props.totalMessages.length > 1 ?
          props.selectedTextTranslations[1] :
          props.selectedTextTranslations[0]}</span>
        <span className="messages-pagination">{props.paginator}</span>
      </section>
    </article>
  );
};

TableMessages.propTypes = {
  totalMessages: PropTypes.array.isRequired,
  dataList: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired, // eslint-disable-line
  // because only used in constructor, this prop type is not detected as being used even though it is on line 22
  selectAllMessages: PropTypes.func.isRequired,
  deselectAllMessages: PropTypes.func.isRequired,
  readToggled: PropTypes.bool,
  unreadToggled: PropTypes.bool,
  messageCount: PropTypes.number,
  markAllAsRead: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired,
  markAsUnread: PropTypes.func.isRequired,
  paginator: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.element,
  ]),
  dateFormat: PropTypes.string,
  handleSort: PropTypes.func.isRequired,
  sort: PropTypes.shape({
    key: PropTypes.string,
    order: PropTypes.oneOf([0, 1]),
  }),
  buttonTranslations: PropTypes.array,
  selectedTextTranslations: PropTypes.array,
  modalToggled: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  dangerAction: PropTypes.func.isRequired,
  triggerDrawer: PropTypes.func, // eslint-disable-line
  // because only used in constructor, this prop type is not detected as being used even though it is on line 17
};

TableMessages.defaultProps = {
  messageCount: 0,
  readToggled: false,
  unreadToggled: false,
  paginator: null,
  dateFormat: 'MM/DD/YYYY',
  buttonTranslations: [
    'Select All',
    'Mark All As Read',
    'Mark As Read',
    'Mark As Unread',
    'Clear',
  ],
  selectedTextTranslations: [],
  triggerDrawer: () => {},
  sort: {
    key: null,
    order: 0,
  },
};

export default TableMessages;
