/* eslint-disable no-param-reassign */
/* eslint-disable global-require, class-methods-use-this */

import counterpart from 'counterpart';

export function initLanguage(language) {
  if (language === undefined) {
    language = 'en_us';
  }

  return language;
}

export function initCommonTranslate() {
  counterpart.registerTranslations('en-US', require('./translations/en-us.json'));
  counterpart.registerTranslations('en-GB', require('./translations/en-gb.json'));
  counterpart.registerTranslations('fr-CA', require('./translations/fr-ca.json'));
  counterpart.registerTranslations('zh-Hans', require('./translations/zh-Hans.json'));
  counterpart.registerTranslations('zh-Hant', require('./translations/zh-Hant.json'));
}

export default {
  initLanguage,
  initCommonTranslate,
};
