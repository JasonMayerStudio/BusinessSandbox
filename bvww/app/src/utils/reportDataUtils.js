export function parseTotalRecords(contentRange = '') {
  const postSlashString = contentRange.split('/').pop();

  const totalRecords = (postSlashString)
    ? parseInt(postSlashString, 10)
    : 0;

  return (Number.isNaN(totalRecords))
    ? 0
    : totalRecords;
}
export function getSummaryRowTitle(currencyCode, title, summaryData) {
  if (currencyCode) {
    return `${title} (${currencyCode})`;
  }

  const firstSummaryDataRow = summaryData[0] || [];
  const consistentCurrencyCode = Object.keys(firstSummaryDataRow).reduce((currentCurrency, key) => {
    // if this is the first record found with a currency save it
    if (!currentCurrency.codeFound &&
        firstSummaryDataRow[key].units) {
      return {
        codeFound: true,
        code: firstSummaryDataRow[key].units,
      };
    // if an additional record is found with a different currency, clear it
    } else if (currentCurrency.codeFound &&
        firstSummaryDataRow[key].units &&
        firstSummaryDataRow[key].units !== currentCurrency.code) {
      return {
        codeFound: true,
        code: '',
      };
    // default is to pass the current state through
    } else {
      return currentCurrency;
    }
  }, { codeFound: false, code: '' });

  return (consistentCurrencyCode.code)
    ? `${title} (${consistentCurrencyCode.code})`
    : title;
}

export default {
  parseTotalRecords,
  getSummaryRowTitle,
};
