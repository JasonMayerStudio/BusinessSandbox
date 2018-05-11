export function updateFromObfuscatedString(savedStr, obfuscatedStr) {
  let updatedString = savedStr;

  if (obfuscatedStr.length < savedStr.length) {
    updatedString = savedStr.slice(0, obfuscatedStr.length);
  } else if (obfuscatedStr.length > savedStr.length) {
    updatedString += obfuscatedStr.slice(-(obfuscatedStr.length - savedStr.length));
  }

  return updatedString;
}

export function getObscuredString(originalStr) {
  const strLen = (originalStr && originalStr.length) || 1;

  return '*'.repeat(strLen - 1) + originalStr.slice(-1);
}

export default {
  updateFromObfuscatedString,
  getObscuredString,
};
