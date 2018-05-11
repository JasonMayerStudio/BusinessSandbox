/* eslint-disable global-require, class-methods-use-this */
// Libs / Helpers
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import counterpart from 'counterpart';

import Checkbox from 'Components/forms/checkbox/Checkbox.js';
import HollowButton from 'Components/Button/HollowButton';
import Panel from 'Components/panel/Panel.js';
import PrimaryButton from 'Components/Button/PrimaryButton';
import RadioButton from 'Components/forms/radio-button/RadioButton.js';
import SelectInput, { findItem } from 'Components/forms/select-input';

import { selectCurrentPreferences } from 'Selectors/preferencesSelectors';

import languageList from 'Utils/constants/languages';
import Listener from 'Utils/listener';

import {
  getUserPreferences,
  saveUserPreferences,
} from '../../actions/preferenceActions';
import { getUserEmailSubscriptions, saveUserSubscriptions } from '../../actions/subscriptionActions';

import './Settings.scss';

export class Settings extends Component {
  constructor(props) {
    super(props);

    counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
    counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
    counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
    counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
    counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));

    this.state = {
      inputDirty: false,
      selectedItem: null,
      emailSubs: [],
      userName: '',
      timeFormat: [
        {
          name: '',
          id: 'time-format-24hr',
          isChecked: false,
        },
        {
          name: '',
          id: 'time-format-ampm',
          isChecked: false,
        },
      ],
      dateFormat: [
        {
          name: 'MM/DD/YYYY (07/15/2017)',
          id: 'date-format-mdy',
          isChecked: false,
        },
        {
          name: 'DD/MM/YYYY (15/07/2017)',
          id: 'date-format-dmy',
          isChecked: false,
        },
      ],
    };

    this.attachBindings();
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentDidMount() {
    this.props.getPreferences(this.props.user.userId)
      .then(() => {
        const preferences = this.props.preferences;

        const timeFormat = [...this.state.timeFormat];
        const timeFormat24Hr = timeFormat[0];
        const timeFormatAmPm = timeFormat[1];

        timeFormat24Hr.isChecked = timeFormat24Hr.isChecked || preferences.timeFormat === 'HH:mm';
        timeFormatAmPm.isChecked = timeFormatAmPm.isChecked || preferences.timeFormat === 'hh:mm a';
        timeFormat24Hr.name = counterpart('preferences.timeFormat24');
        timeFormatAmPm.name = counterpart('preferences.timeFormatAmPm');

        const dateFormat = [...this.state.dateFormat];
        const dateFormatMDY = dateFormat[0];
        const dateFormatDMY = dateFormat[1];

        dateFormatMDY.isChecked = dateFormatMDY.isChecked || preferences.dateFormat === 'MM/DD/YYYY';
        dateFormatDMY.isChecked = dateFormatDMY.isChecked || preferences.dateFormat === 'DD/MM/YYYY';

        this.setState({
          timeFormat,
          dateFormat,
          selectedItem: this.mapSelectedLanguage(preferences.language),
        });
      });

    this.props.getSubscriptions(this.props.user.userId)
      .then(() => {
        this.setState({
          emailSubs: this.props.subscriptions.data,
        });
      });
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  attachBindings() {
    this.handleSelection = this.handleSelection.bind(this);
    this.toggleSubscriptions = this.toggleSubscriptions.bind(this);
    this.toggleRadioTimeFormat = this.toggleRadioTimeFormat.bind(this);
    this.toggleRadioDateFormat = this.toggleRadioDateFormat.bind(this);
    this.mapSelectedLanguage = this.mapSelectedLanguage.bind(this);
    this.savePreferences = this.savePreferences.bind(this);
    this.saveSubscriptions = this.saveSubscriptions.bind(this);
    this.editName = this.editName.bind(this);
    this.saveName = this.saveName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    if (this.personalInfoRef && this.state.inputDirty && !this.personalInfoRef.contains(event.target)) {
      this.setState({
        inputDirty: false,
      });
      this.nameInput.blur();
    }
  }

  handleChange(event) {
    this.setState({
      userName: event.target.value,
    });
  }

  editName() {
    if (!this.state.inputDirty) {
      this.setState({
        inputDirty: true,
      });
      this.nameInput.focus();
    } else {
      this.setState({
        inputDirty: false,
      });
      this.nameInput.blur();
    }
  }

  mapSelectedLanguage(authLanguage) {
    const languageChoice = languageList.find((language) => {
      return language.value === authLanguage;
    });

    return languageChoice;
  }

  saveSubscriptions() {
    this.setState({ subsLoading: true });

    const subscriptionsPayload = {
      updateSubscription: this.state.emailSubs,
      userId: this.props.user.userId,
    };

    this.props.saveSubscriptions(subscriptionsPayload)
      .then(() => {
        this.setState({ subsLoading: false });
      })
      .catch(() => {
        this.setState({ subsLoading: false });
      });
  }

  savePreferences() {
    this.setState({ prefsLoading: true });
    const preferences = Object.assign({}, this.props.preferences);

    this.state.timeFormat.map((option) => {
      if (option.isChecked && option.id === 'time-format-24hr') {
        preferences.timeFormat = 'HH:mm';
      } else if (option.isChecked && option.id === 'time-format-ampm') {
        preferences.timeFormat = 'hh:mm a';
      }
      return false;
    });

    this.state.dateFormat.map((option) => {
      if (option.isChecked && option.id === 'date-format-mdy') {
        preferences.dateFormat = 'MM/DD/YYYY';
      } else if (option.isChecked && option.id === 'date-format-dmy') {
        preferences.dateFormat = 'DD/MM/YYYY';
      }
      return false;
    });

    preferences.language = this.state.selectedItem.value;

    this.props.savePreferences(preferences, this.props.user.userId)
      .then(() => {
        this.setState({
          prefsLoading: false,
        });
        counterpart.setLocale(preferences.language);
        Listener.trigger('UPDATED_PREFERENCES', preferences);
        Listener.trigger('UPDATED_LANGUAGE');
        this.props.getSubscriptions(this.props.user.userId)
          .then(() => {
            this.setState({
              emailSubs: this.props.subscriptions.data,
            });
          });
      });
  }

  saveName() {
    this.setState({
      nameLoading: true,
    });

    const preferences = Object.assign({}, this.props.preferences);
    const firstName = this.state.userName.split(' ').slice(0, -1).join(' ');
    const lastName = this.state.userName.split(' ').slice(-1).join(' ');
    preferences.firstName = firstName;
    preferences.lastName = lastName;

    this.props.savePreferences(preferences, this.props.user.userId)
      .then(() => {
        Listener.trigger('NAME_UPDATED', preferences);
        this.setState({
          inputDirty: false,
          nameLoading: false,
        });
      });
  }

  toggleSubscriptions(e) {
    const id = e.target.id;
    const newSubs = this.state.emailSubs.map((activity) => {
      const newSub = Object.assign({}, activity);

      if (newSub.subscriptionId === Number(id)) {
        newSub.subscribed = !newSub.subscribed;
      }
      return newSub;
    });
    this.setState({
      emailSubs: [...newSubs],
    });
  }

  toggleRadioTimeFormat(e) {
    const id = e.target.id;
    const newTimeFormat = this.state.timeFormat.map((time) => {
      const newTime = Object.assign({}, time);
      newTime.isChecked = false;
      if (newTime.id === id) {
        newTime.isChecked = true;
      }
      return newTime;
    });
    this.setState({
      timeFormat: [...newTimeFormat],
    });
  }

  toggleRadioDateFormat(e) {
    const id = e.target.id;
    const newDateFormat = this.state.dateFormat.map((date) => {
      const newDate = Object.assign({}, date);
      newDate.isChecked = false;
      if (newDate.id === id) {
        newDate.isChecked = true;
      }
      return newDate;
    });
    this.setState({
      dateFormat: [...newDateFormat],
    });
  }

  handleSelection(value, event) {
    event.stopPropagation();
    const newSelection = findItem(languageList, value);

    const emailSubs = [...this.state.emailSubs];

    const timeFormats = [...this.state.timeFormat];
    timeFormats[0].name = counterpart('preferences.timeFormat24');
    timeFormats[1].name = counterpart('preferences.timeFormatAmPm');

    this.setState({
      emailSubs,
      timeFormats,
    });

    if (newSelection) {
      this.setState({ selectedItem: newSelection });
    }
  }

  get personalInfoPanel() {
    const settings = this.props.user;
    const user = this.props.preferences;
    return (
      <div
        ref={(ref) => (this.personalInfoRef = ref)}
      >
        <h4 className="header-top">{counterpart('personalInfo.title')}</h4>
        <Panel extraClass="personal-info">
          <div className="user-nameblock">
            <input
              className="settings-name"
              type="text"
              ref={(input) => { this.nameInput = input; }}
              placeholder={user ? `${user.firstName} ${user.lastName}` : 'Updating name...'}
              readOnly={!this.state.inputDirty}
              onChange={this.handleChange}
              value={this.state.userName}
            />
            <div className="settings-role">
              {counterpart(`personalInfo.${settings.role.name}`)}
            </div>
          </div>
          {this.state.inputDirty ? (
            <span>
              <HollowButton
                action={this.editName}
              >
                {counterpart('personalInfo.cancelButton')}
              </HollowButton>
              <PrimaryButton
                action={this.saveName}
                disabled={this.state.userName.length < 1}
              >
                {this.state.nameLoading ? counterpart('personalInfo.saveChangesProgress') : counterpart('personalInfo.saveChangesButton')}
              </PrimaryButton>
            </span>
          ) : (
            <HollowButton
              action={this.editName}
            >
              {counterpart('personalInfo.editButton')}
            </HollowButton>
          )}
        </Panel>
      </div>
    );
  }

  get preferencesPanel() {
    const timeFormatList = this.state.timeFormat.map((time) => {
      return (
        <RadioButton
          key={time.id}
          label={time.name}
          id={time.id}
          onChange={this.toggleRadioTimeFormat}
          isChecked={time.isChecked}
        />
      );
    });

    const dateFormatList = this.state.dateFormat.map((date) => {
      return (
        <RadioButton
          key={date.id}
          label={date.name}
          id={date.id}
          onChange={this.toggleRadioDateFormat}
          isChecked={date.isChecked}
        />
      );
    });

    return (
      <div>
        <h4>{counterpart('preferences.title')}</h4>
        <div className="panel panel__body preferences">
          <div className="field-group-vertical">
            <div className="field language">
              <h3 className="panel__subhead">{counterpart('preferences.language')}</h3>
              <SelectInput
                dataList={languageList}
                handleSelection={this.handleSelection}
                selectedItem={this.state.selectedItem}
                extraClass="fixed-width"
                wrapperClass="select-menu__form"
              />
            </div>
          </div>

          <div className="radio-button-group">
            <h3 className="panel__subhead">{counterpart('preferences.timeFormat')}</h3>
            {timeFormatList}
          </div>

          <div className="radio-button-group">
            <h3 className="panel__subhead">{counterpart('preferences.dateFormat')}</h3>
            {dateFormatList}
          </div>

          <PrimaryButton
            action={this.savePreferences}
          >
            {this.state.prefsLoading ? counterpart('preferences.savePrefsInProgress') : counterpart('preferences.savePrefs')}
          </PrimaryButton>
        </div>
      </div>
    );
  }

  get subscriptionsPanel() {
    const categories = ['Global Payments', 'BusinessView Activity Alerts'];
    const subscriptions = categories.map((category) => {
      return (
        <div
          className="checkbox-group"
          key={category}
        >
          <h3 className="panel__subhead">{counterpart(`emailSubscriptions.${category}`)}</h3>
          <div className="checkbox-list">
            {this.state.emailSubs.map((subscription) => {
              const REGION_LENGTH = this.props.preferences.language.length + 3;
              const subCategory = /\([^)]*\)|\[[^\]]*\]/g.test(subscription.category) ?
                                  subscription.category.substring(0, subscription.category.length - REGION_LENGTH) :
                                  subscription.category;

              if (subCategory.toLowerCase() === category.toLowerCase()) {
                const displayName = /\([^)]*\)|\[[^\]]*\]/g.test(subscription.displayName) ?
                                    subscription.displayName.substring(0, subscription.displayName.length - REGION_LENGTH) :
                                    subscription.displayName;

                return (
                  <Checkbox
                    id={`${subscription.subscriptionId}`}
                    isChecked={subscription.subscribed}
                    key={subscription.subscriptionId}
                    onChange={this.toggleSubscriptions}
                    label={counterpart(`emailSubscriptions.${displayName}`)}
                  />
                );
              }
              return false;
            }) }
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="panel panel__body email-subscriptions">
          {subscriptions}
          <PrimaryButton
            action={this.saveSubscriptions}
          >
            {this.state.subsLoading ? counterpart('emailSubscriptions.saveSubsInProgress') : counterpart('emailSubscriptions.saveSubs')}
          </PrimaryButton>
        </div>
      </div>
    );
  }

  render() {
    return (
      <section
        className="settings-container"
      >
        {this.personalInfoPanel}
        {this.preferencesPanel}
        {this.subscriptionsPanel}
      </section>
    );
  }
}

Settings.propTypes = {
  getPreferences: PropTypes.func.isRequired,
  getSubscriptions: PropTypes.func.isRequired,
  preferences: PropTypes.object.isRequired,
  savePreferences: PropTypes.func.isRequired,
  saveSubscriptions: PropTypes.func.isRequired,
  subscriptions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    preferences: selectCurrentPreferences(state.preferences),
    subscriptions: state.subscriptions,
    user: state.auth.session.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getSubscriptions: (userId) => dispatch(getUserEmailSubscriptions(userId)),
    saveSubscriptions: (subscriptions, user) => dispatch(saveUserSubscriptions(subscriptions, user)),
    getPreferences: (userId) => dispatch(getUserPreferences(userId)),
    savePreferences: (preferences, userId) => dispatch(saveUserPreferences(preferences, userId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
/* eslint-enable global-require, class-methods-use-this */
