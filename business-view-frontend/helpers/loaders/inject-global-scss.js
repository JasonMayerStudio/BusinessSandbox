export default function (source) {
  this.cacheable();
  return `@import './app/src/assets/scss/_global';
    ${source}`;
}
