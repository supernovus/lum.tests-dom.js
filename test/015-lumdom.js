const core = require('@lumjs/core');
const {O} = core.types;

const plan = 8;

const t = require('@lumjs/tests').new({module, plan});
const lib = require('../lib');

const ld = lib.getLumDOM();

t.isa(ld, O, 'getLumDOM() returns an object');

const h1 = ld.get('h1');
t.isa(h1, O, 'lumDOM.get() result is an object');
t.ok(ld.isElement(h1), 'result is an Element');
t.is(h1.textContent, 'Test', 'result.textContent was correct');

const ps = ld.find('p');
t.isa(ps, O, 'lumDOM.find() result is an Object');
t.is(ps.length, 4, 'result has correct element count');

t.is(ld.find('.a').length, 2, 'a .class query');
t.is(ld.find('#p1').length, 1, 'an #id query');

t.done();
