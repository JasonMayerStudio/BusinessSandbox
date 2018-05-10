import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

export function setUpExportFormatList(language) {
  counterpart.setLocale(language);
  initCommonTranslate();

  const exportFormatList = [
    {
      value: 'pdf',
      text: 'PDF',
      //text: counterpart('globalTranslate.common.visibleColumns'),
    },
    {
      value: 'csv',
      text: 'CSV',
      //text: counterpart('globalTranslate.common.visibleColumns'),
    },
  ];

  return exportFormatList;
}

export default setUpExportFormatList;
