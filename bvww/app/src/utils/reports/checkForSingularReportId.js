export function checkForSingularReportId(reportIds, reportKey) {
  let checkedReportId = false;

  reportIds.map((reportId) => {
    const reportIdMatch = Object.values(reportId).indexOf(reportKey) > -1;

    if (reportIdMatch) {
      checkedReportId = true;
    }

    return false;
  });
  return checkedReportId;
}

export default {
  checkForSingularReportId,
};
