const D = require('../declarations');
const DT = require('./doctypes');

/**
 * Versions of the `XHTML` test documents with both the **XML declaration** 
 * and the **DocType declaration**.
 * 
 * @see {@link module:@lumjs/tests-dom/documents/default} For *default* docs.
 * @see {@link module:@lumjs/tests-dom/documents/frameset} For `frameset` docs.
 * @see {@link module:@lumjs/tests-dom/documents/doctype} For `docType` docs.
 * @see {@link module:@lumjs/tests-dom/declarations} For the declarations.
 * 
 * @module @lumjs/tests-dom/documents/xml
 */

/**
 * XHTML 1.0 Transitional
 */
exports.XHTML_10_TRANS = `${D.XML_DEC}\n${DT.XHTML_10_TRANS}`;

/**
 * XHTML 1.0 Strict
 */
exports.XHTML_10_STRICT = `${D.XML_DEC}\n${DT.XHTML_10_STRICT}`;

/**
 * XHTML 1.0 Frameset
 */
exports.XHTML_10_FRAMESET = `${D.XML_DEC}\n${DT.XHTML_10_FRAMESET}`;

/**
 * XHTML 1.1
 */
exports.XHTML_11 = `${D.XML_DEC}\n${DT.XHTML_11}`;
