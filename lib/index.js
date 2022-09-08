const core = require('@lumjs/core');
const {S} = core.types;
const {JSDOM} = require('jsdom');
const TEST_DOC = require('./documents/default').HTML;

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

