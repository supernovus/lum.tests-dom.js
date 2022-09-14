// Tests of the DOMTest class.
const core = require('@lumjs/core');
const {O,F} = core.types;

const plan = 27;

const lib = require('../lib');
const t = lib.getTest({module, plan});

// Most basic sanity check for a sub-class of Test.
t.ok(true, 'DOMTest loaded and ok works');

// Now make sure the `dom` property is valid.
t.isa(t.dom, O, 'test.dom is an object');
t.isa(t.dom.get, F, 'test.dom.get() is a function');

// Let's do some type tests against a known element.
const h1 = t.dom.get('h1');
t.isNode(h1, 'isNode()');
t.isElement(h1, 'isElement()');
t.isDocument(h1.ownerDocument, 'isDocument()');
t.isWindow(h1.ownerDocument.defaultView, 'isWindow()');
t.isContainer(h1.parentElement.children, 'isContainer(HTMLCollection)');
t.isContainer(h1.parentElement.childNodes, 'isContainer(NodeList)');

// got() tests
t.got('h1', 'got(tagName)');
t.got('#p3', 'got(#id)');
t.got('.a', 'got(.class)');

// found() tests
t.found('section', 0, 'found(tagName, 0)');
t.found('p', 4, 'found(tagName, numElems)');
t.found('#p2', 0, 'found(id, 0)');
t.found('#p4', 1, 'found(#id, 1)');
t.found('.a', 0, 'found(.class, 0)');
t.found('.b', 2, 'found(.class, numElems)');

// notFound() and notGot()
t.notFound('h3', 'notFound(tagName)');
t.notFound('#noId', 'notFound(#id)');
t.notGot('div', 'notGot(tagName)');
t.notGot('.c', 'notGot(.class)');

// gotIn() and foundIn() tests.
const section = t.dom.get('section');
t.gotIn(section, 'p', 'gotIn(node, tagName)');
t.foundIn(section, 'p', 0, 'foundIn(node, tagName, 0)');
t.foundIn(section, 'p', 4, 'foundIn(node, tagName, numElems)');

// notFoundIn() and notGot()
t.notGotIn(h1, 'p', 'notGotIn(node, tagName)');
t.notFoundIn(section, 'h1', 'notFoundIn(node, tagName)');

// That's all folks!
t.done();
