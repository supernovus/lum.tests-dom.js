/**
 * The full sample document module set.
 * 
 * This is probably more than you really need. 
 * The `default` set is probably fine for most tests.
 * If you really want **everything**, requiring this
 * module is the way to go.
 * 
 * **Additional note:**
 * 
 * For every *lowercase* property defined in this `module`,
 * there is an *uppercase* version as well.
 * So for example, the `default` property can also be
 * referenced as `DEFAULT`. 
 * 
 * This is the only module using this dual-name syntax.
 * I only did it as the *lowercase* name is the actual
 * name of the **module** that the property is referring to,
 * but all of the properties of those are used as **constants**,
 * which are conventionally UPPERCASE in modern coding standards.
 * 
 * @module @lumjs/tests-dom/documents
 */

/**
 * @see {@link module:@lumjs/tests-dom/declarations}
 */
exports.declarations = require('../declarations');
exports.DECLARATIONS = exports.declarations;

/**
 * @see {@link module:@lumjs/tests-dom/documents/default}
 */
exports.default = require('./default');
exports.DEFAULT = exports.default;

/**
 * @see {@link module:@lumjs/tests-dom/documents/frameset}
 */
exports.frameset = require('./frameset');
exports.FRAMESET = exports.frameset;

/**
 * @see {@link module:@lumjs/tests-dom/documents/doctypes}
 */
exports.doctypes = require('./doctypes');
exports.DOCTYPES = exports.doctypes;

/**
 * @see {@link module:@lumjs/tests-dom/documents/xml}
 */
exports.xml = require('./xml');
exports.XML = exports.xml;
