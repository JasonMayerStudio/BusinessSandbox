import dateHelper from 'Utils/ordinalDateHelper';

export default function (date) {
  const dateToParse = new Date(date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formatted = dateHelper(dateToParse.getDate());
  const month = months[dateToParse.getMonth()];
  const hours = dateToParse.getHours() > 12 ? dateToParse.getHours() - 12 : dateToParse.getHours();
  const minutes = dateToParse.getMinutes() < 10 ? `0${dateToParse.getMinutes()}` : dateToParse.getMinutes();
  const amOrPm = dateToParse.getHours() >= 12 ? 'PM' : 'AM';
  return `${month} ${formatted}, ${hours}:${minutes}${amOrPm}`;
}
