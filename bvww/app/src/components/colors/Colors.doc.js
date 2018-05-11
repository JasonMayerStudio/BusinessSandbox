import React from 'react';
import {
  Page,
  ColorSpecimen,
  ColorPaletteSpecimen,
} from 'catalog';

// primary color variables
const primaryBaseColor = {
  name: 'Base Primary Color — SASS mixin: brand-color(primary)',
  value: '#007dc3',
};
const primaryExtraDarkColor = {
  name: 'Extra Dark Primary Color — SASS mixin: brand-color(primary, x-dark)',
  value: '#00467e',
};
const primaryColorSpectrum = [
  {
    name: 'Extra Extra Dark Primary Color — SASS mixin: brand-color(primary, xx-dark)',
    value: '#00355e',
  },
  primaryExtraDarkColor,
  {
    name: 'Dark Primary Color — SASS mixin: brand-color(primary, dark)',
    value: '#0a61ad',
  },
  primaryBaseColor,
  {
    name: 'Light Primary Color — SASS mixin: brand-color(primary, x-light)',
    value: '#139ceb',
  },
  {
    name: 'Extra Light Primary Color — SASS mixin: brand-color(primary, xx-light)',
    value: '#21b7ff',
  },
];

// gray scale variables
const grayExtraExtraDarkColor = {
  name: 'Extra Extra Dark Gray Color — SASS mixin: brand-color(gray, xx-dark)',
  value: '#222129',
};
const grayExtraDarkColor = {
  name: 'Extra Dark Gray Color — SASS mixin: brand-color(gray, x-dark)',
  value: '#3a3c44',
};
const grayExtraExtraLightColor = {
  name: 'Extra Extra Light Gray Color — SASS mixin: brand-color(gray, xx-light)',
  value: '#e3e7ea',
};
const whiteColor = {
  name: 'White Color — SASS variable: $white',
  value: '#ffffff',
};
const grayColorSpectrum = [
  grayExtraExtraDarkColor,
  grayExtraDarkColor,
  {
    name: 'Dark Gray Color — SASS mixin: brand-color(gray, dark)',
    value: '#565963',
  },
  {
    name: 'Base Gray Color — SASS mixin: brand-color(gray)',
    value: '#7c7c89',
  },
  {
    name: 'Light Gray Color — SASS mixin: brand-color(gray, light)',
    value: '#9a9fac',
  },
  {
    name: 'Extra Light Gray Color — SASS mixin: brand-color(gray, x-light)',
    value: '#c6c9d1',
  },
  grayExtraExtraLightColor,
  whiteColor,
];

// secondary color variables
const purpleColor = {
  name: 'Purple Color — SASS variable: $purple',
  value: '#644a94',
};
const tealColor = {
  name: 'Teal Color — SASS variable: $teal',
  value: '#77c9c0',
};
const greenColor = {
  name: 'Green Color — SASS variable: $green',
  value: '#5aa832',
};
const redColor = {
  name: 'Red — SASS variable: $red',
  value: '#d31c3c',
};
const orangeColor = {
  name: 'Orange — SASS variable: $orange',
  value: '#ec9a2f',
};

export default () => {
  return (
    <Page>
      <h3>Primary Colors</h3>
      <p>The primary colors should be used as a base for the navigation, typography, and over-arching UI elements.</p>
      <ColorSpecimen
        name={primaryBaseColor.name}
        value={primaryBaseColor.value}
        span={2}
      />
      <ColorSpecimen
        name={primaryExtraDarkColor.name}
        value={primaryExtraDarkColor.value}
        span={2}
      />
      <ColorPaletteSpecimen
        colors={primaryColorSpectrum}
        span={6}
      />

      <h3>Gray Scale</h3>
      <ColorSpecimen
        name={grayExtraExtraDarkColor.name}
        value={grayExtraExtraDarkColor.value}
        span={2}
      />
      <ColorSpecimen
        name={grayExtraDarkColor.name}
        value={grayExtraDarkColor.value}
        span={2}
      />
      <ColorSpecimen
        name={grayExtraExtraLightColor.name}
        value={grayExtraExtraLightColor.value}
        span={2}
      />
      <ColorSpecimen
        name={whiteColor.name}
        value={whiteColor.value}
        span={2}
      />
      <ColorPaletteSpecimen
        colors={grayColorSpectrum}
        span={6}
      />

      <h3>Secondary Colors</h3>
      <p>The secondary colors are used for graphical and data visualization elements. Although the red, orange, and green will be used for graph states accounting for negative or positive connotations (ex. sparkline style graph), they will also be used for error, success, and alert states.</p>
      <ColorSpecimen
        name={purpleColor.name}
        value={purpleColor.value}
        span={2}
      />
      <ColorSpecimen
        name={tealColor.name}
        value={tealColor.value}
        span={2}
      />
      <ColorSpecimen
        name={greenColor.name}
        value={greenColor.value}
        span={2}
      />
      <ColorSpecimen
        name={redColor.name}
        value={redColor.value}
        span={2}
      />
      <ColorSpecimen
        name={orangeColor.name}
        value={orangeColor.value}
        span={2}
      />
    </Page>
  );
};
