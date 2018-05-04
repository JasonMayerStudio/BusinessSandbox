export default function updateDimensions() {
  const dimensions = {};
  const w = window;
  const d = document;
  const documentElement = d.documentElement;
  const body = d.getElementsByTagName('body')[0];
  const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
  const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

  dimensions.width = width;
  dimensions.height = height;

  return dimensions;
}
