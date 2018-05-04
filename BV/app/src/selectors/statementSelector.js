import { initMonth } from '../utils/statementDateUtils.js';

export function selectStatementData(statements = []) {
  return statements.map((statement) => {
    return Object.assign({}, statement, {
      statementId: statement.statementId,
      merchantNumber: statement.merchantNumber,
      month: statement.month,
      year: statement.year,
      geoLocation: statement.geoLocation,
      fileSize: statement.fileSize,
      merchantDBAName: statement.merchantDBAName,
      merchantCity: statement.merchantCity,
      merchantState: statement.merchantState,
      heartlandMerchant: statement.heartlandMerchant,
      monthYear: `${initMonth(statement.month)}-${statement.year}`,
    });
  });
}

export default {
  selectStatementData,
};
