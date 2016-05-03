import test from 'ava';
import pkgEntry from './index';

const main = { main: './main.js' };
const jsnext = { 'jsnext:main': './jsnext.js', main: './jsnext.es5.js' };
const defaults = {};

test('main', t => t.is(pkgEntry(main), './main.js'));
test('jsnext', t => t.is(pkgEntry(jsnext), './jsnext.js'));
test('defaults', t => t.is(pkgEntry(defaults), 'index.js'));

test('empty input', t => t.throws(() => { pkgEntry(); }, TypeError));
test('invalid input', t => t.throws(() => { pkgEntry(2); }, TypeError));
