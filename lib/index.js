const core = require('@lumjs/core');
const {S} = core.types;

const TEST_DOC = require('@lumjs/html-xml/documents/default').HTML;

/**
 * A module of helper functions for tests using the `DOM`.
 * @module @lumjs/tests-dom
 */

/**
 * Get a `window` object from the `jsdom` library.
 * @param {string} [doc=TEST_DOC] - The document to parse.
 *   If not specified, we'll use the default test document.
 */
exports.getWindow = function (doc=TEST_DOC)
{
  const {JSDOM} = require('jsdom');
  const {window} = new JSDOM(doc);
  return window;
}

/**
 * Get an initialized `jQuery` function.
 *
 * @param {(string|Window)} [window] - The `window` or an HTML string.
 *
 *   If this is a `string` it will be passed to `getWindow()` to get
 *   an actual `window` object to pass to the `jQuery` initializer.
 *
 *   If not specified, we'll use the default test document.
 *
 * @returns {function} A `jQuery` function with the specified `window`.
 */
exports.getJQuery = function (window=TEST_DOC)
{
  if (typeof window === S)
  {
    window = exports.getWindow(window);
  }
  return require('jquery')(window);
}

/**
 * Get a `LumDOM` instance.
 *
 * @param {(string|Window)} [window] - The `window` or an HTML string.
 *
 *   If this is a `string` it will be passed to `getWindow()` to get
 *   an actual `window` object to pass to the `LumDOM` constructor.
 *
 *   If not specified we'll use the default test document.
 *
 * @returns {object} A `LumDOM` instance with the specified `window`.
 */
exports.getLumDOM = function (window=TEST_DOC, options={})
{
  if (typeof window === S)
  {
    window = exports.getWindow(window);
  }
  return require('@lumjs/dom').new(window, options);
}

/**
 * Get a `DOMTest` instance.
 * 
 * @param {object} [opts] Options to pass to constructor.
 * 
 * @returns {module:@lumjs/tests-dom/test}
 */
exports.getTest = function (opts={})
{
  return require('./test').new(opts);
}

/**
 * Get a *Functional API* object for the `DOMTest` class.
 * 
 * @param {object} [opts] Options to pass to constructor.
 * 
 * @returns {object} See `@lumjs/tests/functional` documentation.
 */
exports.getFunctional = function (opts={})
{
  return require('./test').functional(opts);
}
