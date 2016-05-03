import test from 'ava';
import { pkgMain, pkgMainAsync } from './index';

test('basic', t => t.is(
  pkgMain('unicorns'),
  'unicorns'
));

test('empty input', t => t.throws(() => { pkgMain(); }, TypeError));
test('invalid input', t => t.throws(() => { pkgMain(2); }, TypeError));

test('async :: basic', async t => t.is(
  await pkgMainAsync('unicorns'),
  'unicorns'
));

test('async :: empty input', t => t.throws(pkgMainAsync(), TypeError));
test('async :: invalid input', t => t.throws(pkgMainAsync(2), TypeError));
