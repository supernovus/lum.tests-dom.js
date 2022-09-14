const D = require('../declarations');
const DEF = require('./default');
const FS = require('./frameset');

/**
 * Versions of the `default` and `frameset` test documents with various
 * **DocType declarations** prepended.
 * 
 * @see {@link module:@lumjs/tests-dom/documents/default} For *default* docs.
 * @see {@link module:@lumjs/tests-dom/documents/frameset} For `frameset` docs.
 * @see {@link module:@lumjs/tests-dom/documents/xml} For `XML` docs.
 * @see {@link module:@lumjs/tests-dom/declarations} For the declarations.
 * 
 * @module @lumjs/tests-dom/documents/doctypes
 */

/**
 * Modern HTML (HTML 5)
 */
exports.HTML = `${D.DOCTYPE_HTML}\n${DEF.HTML}`;

/**
 * HTML 4 Transitional
 */
exports.HTML_4_TRANS = `${D.DOCTYPE_HTML_4_TRANS}\n${DEF.HTML}`;

/**
 * HTML 4 Strict
 */
exports.HTML_4_STRICT = `${D.DOCTYPE_HTML_4_STRICT}\n${DEF.HTML}`;

/**
 * HTML 4 Frameset
 */
exports.HTML_4_FRAMESET = `${D.DOCTYPE_HTML_4_FRAMESET}\n${FS.HTML}`;

/**
 * XHTML 1.0 Transitional
 */
exports.XHTML_10_TRANS = `${D.DOCTYPE_XHTML_10_TRANS}\n${DEF.XHTML_10}`;

/**
 * XHTML 1.0 Strict
 */
exports.XHTML_10_STRICT = `${D.DOCTYPE_XHTML_10_STRICT}\n${DEF.XHTML_10}`;

/**
 * XHTML 1.0 Frameset
 */
exports.XHTML_10_FRAMESET = `${D.DOCTYPE_XHTML_10_FRAMESET}\n${FS.XHTML}`;

/**
 * XHTML 1.1
 */
exports.XHTML_11 = `${D.DOCTYPE_XHTML_11}\n${DEF.XHTML_11}`;
