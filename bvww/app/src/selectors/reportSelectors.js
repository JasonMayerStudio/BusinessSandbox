export function getSortedReports(reports = []) {
  return reports
    .filter((report) => {
      return report.displayOrder;
    })
    .sort((report1, report2) => {
      if (report1.displayOrder < report2.displayOrder) {
        return -1;
      } else if (report1.displayOrder > report2.displayOrder) {
        return 1;
      } else {
        return 0;
      }
    });
}

export function getViewableReports(reportList = []) {
  return reportList
      .filter((report) => {
        return report.isListable;
      });
}

export function getReportById(reportId, reportList = []) {
  return reportList.find((item) => {
    return item.reportId === reportId;
  });
}

export default {
  getSortedReports,
  getViewableReports,
  getReportById,
};
