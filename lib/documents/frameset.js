const D = require('../declarations');

/**
 * A set of simple HTML Frameset documents.
 * 
 * @see {@link module:@lumjs/tests-dom/documents/default} For *default* docs.
 * @see {@link module:@lumjs/tests-dom/documents/doctypes} For `docType` docs.
 * @see {@link module:@lumjs/tests-dom/documents/xml} For `XML` docs.
 * @see {@link module:@lumjs/tests-dom/declarations} For the declarations.
 * 
 * @module @lumjs/tests-dom/documents/frameset
 */

/**
 * A simple test document for **HTML 4 Frameset** doc-type.
 */
exports.HTML = `
<html>
  <head>
    <title>Test</title>
  </head>
  <frameset cols="20%, 80%">
    <frameset ros="100, 200">
      <frame src="#frame-1-1" scrolling="yes" />
      <frame src="#frame-1-2" scrolling="no" />
    </frameset>
    <frame src="#frame-2" />
  </frameset>
</html>
`;

/**
 * A version of the test document for **XHTML 1.0 Frameset** doc-type.
 */
exports.XHTML = D.xhtml10Tag(exports.HTML);
