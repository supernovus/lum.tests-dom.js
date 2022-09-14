/**
 * A bunch of string values and helper functions related to DOM testing.
 * 
 * @module @lumjs/tests-dom/declarations
 */

/**
 * The Modern HTML (HTML 5) docType.
 */
exports.DOCTYPE_HTML = '<!DOCTYPE html>';

/**
 * The HTML 4 Transitional (loose) docType.
 */
exports.DOCTYPE_HTML_4_TRANS = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
 "http://www.w3.org/TR/html4/loose.dtd">
`;
 
/**
 * The HTML 4 Strict docType.
 */
exports.DOCTYPE_HTML_4_STRICT = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
 "http://www.w3.org/TR/html4/strict.dtd">
`;
 
/**
 * The HTML 4 Frameset docType.
 */
exports.DOCTYPE_HTML_4_FRAMESET = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN"
 "http://www.w3.org/TR/html4/frameset.dtd">
`;

/**
 * The XHTML 1.0 Strict docType.
 */
exports.DOCTYPE_XHTML_10_STRICT = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
`;

/**
 * The XHTML 1.0 Transitional docType.
 */
exports.DOCTYPE_XHTML_10_TRANS = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
`;

/**
 * The XHTML 1.0 Frameset docType.
 */
exports.DOCTYPE_XHTML_10_FRAMESET = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
`;

/**
 * The XHTML 1.1 docType.
 */
exports.DOCTYPE_XHTML_11 = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
`;

/**
 * The XML 1.0 declaration with UTF-8 encoding.
 */
exports.XML_DEC = '<?xml version="1.0" encoding="UTF-8"?>';

/**
 * Opening `<html>` element tag for HTML documents.
 */
exports.HTML_TAG = '<html>';

/**
 * Opening `<html>` element tag with extra attributes for XHTML 1.0 documents.
 */
exports.XHTML_10_TAG = `
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
`;

/**
 * Opening `<html>` element tag with extra attributes for XHTML 1.1 documents.
 */
exports.XHTML_11_TAG = `
<html version="-//W3C//DTD XHTML 1.1//EN"
      xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.w3.org/1999/xhtml
                          http://www.w3.org/MarkUp/SCHEMA/xhtml11.xsd">
`;

/**
 * Replace the `<html>` opening tag with an extended version.
 * 
 * @param {string} doc - The full document we are updating.
 * @param {string} tag - The replacement `<html>` tag.
 * @returns {string} The `doc` with the replacement done.
 */
exports.replaceHtml = function(doc, tag)
{
  return doc.replace(exports.HTML_TAG, tag);
}

/**
 * Replace the `<html>` opening tag with a version that has the recommended 
 * [XHTML 1.0]{@link module:@lumjs/tests-dom/declarations.XHTML_10_TAG} 
 * attributes added.
 * 
 * @param {string} doc - The full document we are updating.
 * @returns {string} The `doc` with the replacement done.
 */
exports.xhtml10Tag = function(doc)
{
  return exports.replaceHtml(doc, exports.XHTML_10_TAG);
}

/**
 * Replace the `<html>` opening tag with a version that has the recommended
 * [XHTML 1.1]{@link module:@lumjs/tests-dom/declarations.XHTML_11_TAG} 
 * attributes added.
 * 
 * @param {string} doc - The full document we are updating.
 * @returns {string} The `doc` with the replacement done.
 */
exports.xhtml11Tag = function(doc)
{
  return exports.replaceHtml(doc, exports.XHTML_11_TAG);
}
