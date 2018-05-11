export function getMerchantsForTable(merchants = []) {
  return merchants.map((merchant) => {
    const newMerchant = Object.assign({}, merchant);

    const csvAddressParts = [
      'address1',
      'address2',
      'city',
      'state',
    ].map((part) => {
      return merchant[part];
    }).filter(Boolean);  // remove missing address fields

    let fullAddress = csvAddressParts.join(', ');
    fullAddress = (merchant.postalCode)
      ? `${fullAddress} ${merchant.postalCode} ${merchant.country}`
      : `${fullAddress} ${merchant.country}`;
    newMerchant.fullAddress = fullAddress.trim();
    newMerchant.dbaName = merchant.businessName;
    newMerchant.merchant_id = merchant.merchantNumber;
    newMerchant.hasAccess = false;

    return newMerchant;
  });
}

export function getMerchantById(merchants, id) {
  return merchants.find((merchant) => {
    return merchant.merchantId === parseInt(id, 10);
  }) || {
    role: {},
  };
}

export default {
  getMerchantsForTable,
  getMerchantById,
};
