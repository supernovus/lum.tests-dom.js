const core = require('@lumjs/core');
const {F,O} = core.types;

const plan = 5;

const t = require('@lumjs/tests').new({module, plan});
const lib = require('../lib');

const jq = lib.getJQuery();

t.isa(jq, F, 'getJQuery() returns a function');
const h1 = jq('h1');
t.isa(h1, O, 'jQuery() result is an object');
t.is(h1.length, 1, 'result.length is correct');
t.isa(h1.text, F, 'result.text is a functionn');
t.is(h1.text(), 'Test', 'result.text() returns correct value');

t.done();
