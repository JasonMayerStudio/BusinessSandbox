import counterpart from 'counterpart';
import { initCommonTranslate } from 'Utils/languages';

export function setUpExportFormatList(language) {
  counterpart.setLocale(language);
  initCommonTranslate();

  const exportFormatList = [
    {
      value: counterpart('globalTranslate.statements.zip'),
      text: counterpart('globalTranslate.statements.zip'),
    },
    {
      value: counterpart('globalTranslate.statements.pdf'),
      text: counterpart('globalTranslate.statements.pdf'),
    },
  ];
  return exportFormatList;
}

export default setUpExportFormatList;
