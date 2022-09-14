const D = require('../declarations');

/**
 * A set of extremely simple default HTML documents.
 * 
 * @see {@link module:@lumjs/tests-dom/documents/frameset} For `frameset` docs.
 * @see {@link module:@lumjs/tests-dom/documents/doctypes} For `docType` docs.
 * @see {@link module:@lumjs/tests-dom/documents/xml} For `XML` docs.
 * @see {@link module:@lumjs/tests-dom/declarations} For the declarations.
 * 
 * @module @lumjs/tests-dom/documents/default
 */

/**
 * A default test HTML document.
 */
exports.HTML = `
<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <h1>Test</h1>
    <section id="main">
      <p id="p1" class="a">Paragraph 1</p>
      <p id="p2" class="a">Paragraph 2</p>
      <p id="p3" class="b">Paragraph 3</p>
      <p id="p4" class="b">Paragraph 4</p>
    </section>
  </body>
</html>
`;

/**
 * A version of the default test HTML with appropriate XHTML 1.0
 * attributes set on the <html/> element.
 */
exports.XHTML_10 = D.xhtml10Tag(exports.HTML);

/**
 * A version of the default test HTML with appropriate XHTML 1.1
 * attributes set on the <html/> element.
 */
exports.XHTML_11 = D.xhtml11Tag(exports.HTML);
