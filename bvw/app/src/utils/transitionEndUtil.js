export default function whichTransitionEvent() {
  let t;
  const el = document.createElement('fakeelement');

  const transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
  };

  for (t in transitions) { // eslint-disable-line no-restricted-syntax
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }

  return transitions;
}
