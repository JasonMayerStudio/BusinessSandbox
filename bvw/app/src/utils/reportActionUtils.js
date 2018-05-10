export function divideReportActionTypes(actions = []) {
  return actions.reduce((dividedActions, action) => {
    const newReportActions = (action.actionType === 'REPORT')
      ? dividedActions.reportActions.concat(action)
      : dividedActions.reportActions;
    const newRowActions = (action.actionType === 'ROW')
      ? dividedActions.reportRowActions.concat(action)
      : dividedActions.reportRowActions;

    return {
      reportActions: newReportActions,
      reportRowActions: newRowActions,
    };
  }, {
    reportActions: [],
    reportRowActions: [],
  });
}

export default {
  divideReportActionTypes,
};
