# pkg-entry

[![NPM version][npm-image]][npm-url]
[![Unix Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> expose `jsnext:main`, `main` from object, defaults to `index.js`

## Install

    npm install --save pkg-entry

## Usage

```js
import { pkgEntry, pkgEntryAsync } from 'pkg-entry';

pkgEntry('unicorns'); // unicorns
pkgEntryAsync('unicorns')
  .then(result => console.log(result)); // unicorns
```

## API

### pkgEntry(input, [options])

### pkgEntryAsync(input, [options])

Return a promise that resolves to `result`.

#### input

*Required*  
Type: `String`

Lorem ipsum.

#### options

##### foo

Type: `Boolean`  
Default: `false`

Lorem ipsum.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/pkg-entry
[npm-image]: https://img.shields.io/npm/v/pkg-entry.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/pkg-entry
[travis-image]: https://img.shields.io/travis/iamstarkov/pkg-entry.svg?style=flat-square&label=unix

[appveyor-url]: https://ci.appveyor.com/project/iamstarkov/pkg-entry
[appveyor-image]: https://img.shields.io/appveyor/ci/iamstarkov/pkg-entry.svg?style=flat-square&label=windows

[coveralls-url]: https://coveralls.io/r/iamstarkov/pkg-entry
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/pkg-entry.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/pkg-entry
[depstat-image]: https://david-dm.org/iamstarkov/pkg-entry.svg?style=flat-square
