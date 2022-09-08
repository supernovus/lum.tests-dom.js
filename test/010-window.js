const core = require('@lumjs/core');
const {O} = core.types;

const plan = 8;

const t = require('@lumjs/tests').new({module, plan});
const lib = require('../lib');

const window = lib.getWindow();

t.isa(window, O, 'getWindow() returns an object');
t.isa(window.document, O, 'window.document is an object');
t.isa(window.document.body, O, 'document.body is an object');
const body = window.document.body;
t.is(body.firstElementChild.tagName, 'H1', 'correct first element tag');
t.is(body.firstElementChild.textContent, 'Test', 'correct first element text content');

const h1 = window.document.querySelector('h1');
t.isa(h1, O, 'document.querySelector() returns an object');
t.ok(h1 instanceof window.Element, 'result is an Element');
t.is(h1.textContent, 'Test', 'result.textContent is correct');

t.done();
