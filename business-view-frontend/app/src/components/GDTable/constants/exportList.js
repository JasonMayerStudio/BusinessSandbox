import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

export function setupExportList() {
  initCommonTranslate();

  const exportList = [
    {
      value: 'visible-columns',
      text: counterpart('globalTranslate.common.visibleColumns'),
    },
    {
      value: 'all-columns',
      text: counterpart('globalTranslate.common.allColumns'),
    },
  ];

  return exportList;
}

export default setupExportList;
