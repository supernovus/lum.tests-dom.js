/**
 * The full sample document module set.
 * 
 * This is probably more than you really need. 
 * The `default` set is probably fine for most tests.
 * If you really want everything, this is the way to go.
 * 
 * @module @lumjs/tests-dom/documents
 */

exports.declarations = require('../declarations');
exports.DECLARATIONS = exports.declarations;

exports.default = require('./default');
exports.DEFAULT = exports.default;

exports.frameset = require('./frameset');
exports.FRAMESET = exports.frameset;

exports.doctypes = require('./doctypes');
exports.DOCTYPES = exports.doctypes;

exports.xml = require('./xml');
exports.XML = exports.xml;
