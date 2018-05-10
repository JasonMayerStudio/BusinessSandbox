export function selectCurrentPreferences(preferences = { data: {} }) {
  const defaultPreferences = {
    language: 'en-US',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: 'HH:mm',
    firstName: '',
    lastName: '',
  };

  const foundPreferences = (preferences.data.dateFormat && preferences.data.timeFormat)
    ? preferences.data
    : defaultPreferences;

  return foundPreferences;
}

export default {
  selectCurrentPreferences,
};
