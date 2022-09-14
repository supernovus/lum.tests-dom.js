// The same DOMTest class tests, but using the functional API.
const core = require('@lumjs/core');
const {O,F} = core.types;

const plan = 27;

const lib = require('../lib');
const func = lib.getFunctional({module, plan});
const 
{
  ok, isa, isNode, isElement, isDocument, isWindow, isContainer,
  got, found, foundIn, gotIn, notFound, notFoundIn, notGot, notGotIn,
  test, 
} = func;

//console.debug('func', func);

// Most basic sanity check for a sub-class of Test.
ok(true, 'DOMTest loaded and ok works');

// Now make sure the `dom` property is valid.
isa(test.dom, O, 'test.dom is an object');
isa(test.dom.get, F, 'test.dom.get() is a function');

// Let's do some type tests against a known element.
const h1 = test.dom.get('h1');
isNode(h1, 'isNode()');
isElement(h1, 'isElement()');
isDocument(h1.ownerDocument, 'isDocument()');
isWindow(h1.ownerDocument.defaultView, 'isWindow()');
isContainer(h1.parentElement.children, 'isContainer(HTMLCollection)');
isContainer(h1.parentElement.childNodes, 'isContainer(NodeList)');

// got() tests
got('h1', 'got(tagName)');
got('#p3', 'got(#id)');
got('.a', 'got(.class)');

// found() tests
found('p', 0, 'found(tagName, 0)');
found('p', 4, 'found(tagName, numElems)');
found('#p2', 0, 'found(id, 0)');
found('#p4', 1, 'found(#id, 1)');
found('.a', 0, 'found(.class, 0)');
found('.b', 2, 'found(.class, numElems)');

// notFound() and notGot()
notFound('h3', 'notFound(tagName)');
notFound('#noId', 'notFound(#id)');
notGot('div', 'notGot(tagName)');
notGot('.c', 'notGot(.class)');

// gotIn() and foundIn() tests.
const section = test.dom.get('section');
gotIn(section, 'p', 'gotIn(node, tagName)');
foundIn(section, 'p', 0, 'foundIn(node, tagName, 0)');
foundIn(section, 'p', 4, 'foundIn(node, tagName, numElems)');

// notFoundIn() and notGot()
notGotIn(h1, 'p', 'notGotIn(node, tagName)');
notFoundIn(section, 'h1', 'notFoundIn(node, tagName)');

// That's all folks!
test.done();
