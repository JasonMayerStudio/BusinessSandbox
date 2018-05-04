/* eslint-disable func-names, prefer-arrow-callback */

process.env.NODE_ENV = 'test';

require('babel-register')({
  compact: true,
});

const { JSDOM } = require('jsdom');

/**
 * because React-GA injects the Google Analytics script before the first existing script tag,
 * we have to have a script tag in our test DOM
 */
const jsdom = new JSDOM('<!doctype html><html><body><script></script></body></html>', {
  url: 'http://localhost:8080',
});
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === 'undefined')
    .map((prop) => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.localStorage = {
  getItem() {},
  setItem() {},
};

global.sessionStorage = {
  getItem() {},
  setItem() {},
};

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

/* eslint-disable no-underscore-dangle */
global.__API__ = "'http://localhost:3009/'";
global.__REPORTS_API__ = "'http://localhost:3009/'";
global.__MESSAGES_API__ = "'http://localhost:3009/'";
global.__STATEMENTS_API__ = "'http://localhost:3009/'";
global.__AUTH_API__ = "'http://localhost:3009/'";

global.__REPORTS_API_V2__ = 'http://localhost:3009/';


global.__GA_PROPERTY__ = 'UA-9999999999-1';
global.__GA_DEBUG__ = true;
/* eslint-enable no-underscore-dangle */

copyProps(window, global);

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {};
require.extensions['.scss'] = function () {};
require.extensions['.png'] = function () {};
require.extensions['.svg'] = function () {};

/* eslint-enable func-names, prefer-arrow-callback */
