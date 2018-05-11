import uniqBy from 'lodash/uniqBy';

export function createSelectorBar(merchants) {
  const hierarchy = [];
  merchants.map((data) => { // eslint-disable-line array-callback-return
    hierarchy.push({
      corp: data.corp,
      region: data.region,
      principal: data.principal,
      associate: data.associate,
      chain: data.chain,
    });
  });

  const trueHierarchy = uniqBy(hierarchy, (instance) => [instance.corp, instance.region, instance.principal, instance.associate, instance.chain].join());

  trueHierarchy.forEach((item) => {
    item.ids = []; // eslint-disable-line no-param-reassign
    merchants.forEach((content) => {
      if (item.corp === content.corp &&
         item.region === content.region &&
         item.principal === content.principal &&
         item.associate === content.associate &&
         item.chain === content.chain) {
        item.ids.push(content);
      }
    });
  });
  return trueHierarchy;
}

export default {
  createSelectorBar,
};
