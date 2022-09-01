# TypeArray

<a name="status"></a>
## Status
[![Build Status](https://github.com/scub45t3v3/typearray/workflows/CI/badge.svg?event=push)](https://github.com/scub45t3v3/typearray/actions)
[![Coverage Status](https://coveralls.io/repos/github/scub45t3v3/TypeArray/badge.svg)](https://coveralls.io/github/scub45t3v3/TypeArray)

<a name="toc"></a>
## Table of Content
  * [Status](#status)
  * [Purpose](#purpose)
  * [Installation](#installation)
  * [API](#api)
  * [Test](#test)
  * [License](#license)

<a name="purpose"></a>
## Purpose
TypeArray class definition

<a name="installation"></a>
## Installation
Via [npm](https://www.npmjs.com/)

```bash
npm install @scuba-squad/type-array
```

<a name="api"></a>
## API
### `TypeArray(validator: function | string | RegExp | Array, message?: string | null)`
**Added in:** v1.0.0

Factory method to get a function to create a Typed|Validated Array

**arguments:**
1. `validator: function | string | RegExp | Array`
2. `message: string | null = 'invalid value'`

**returns:** Function

**throws:** TypeError

```javascript
const TypeArray = require('@scuba-squad/type-array');
const NumberArray = TypeArray((value) => {
  return typeof value === 'number';
});
const test = NumberArray(1, 5.4, -9);
console.log(test.length); // 3
console.log(test[0]); // 1
test.push(0); // 4
console.log(test[3]); // 0
test.shift(); // 3
console.log(test[0]); // 5.4
test.push('5'); // TypeError: invalid value
```

```javascript
const TypeArray = require('@scuba-squad/type-array');
const NumberArray = TypeArray('isFloat');
const test = NumberArray(1, 5.4, -9);
console.log(test.length); // 3
console.log(test[0]); // 1
test.push(0); // 4
console.log(test[3]); // 0
test.shift(); // 3
console.log(test[0]); // 5.4
test.push('5'); // 4 (value is castable to float so passes isFloat validation)
test.push('asd'); // TypeError: invalid value
```

```javascript
const TypeArray = require('@scuba-squad/type-array');
const NumberArray = TypeArray(/^-?\d+(?:\.\d+)?$/);
const test = NumberArray(1, 5.4, -9);
console.log(test.length); // 3
console.log(test[0]); // 1
test.push(0); // 4
console.log(test[3]); // 0
test.shift(); // 3
console.log(test[0]); // 5.4
test.push('5'); // 4 (value passes validation)
test.push('asd'); // TypeError: invalid value
```

```javascript
const TypeArray = require('@scuba-squad/type-array');
const NumberArray = TypeArray(['isFloat', {min: -10, max: 10}]);
const test = NumberArray(1, 5.4, -9);
console.log(test.length); // 3
console.log(test[0]); // 1
test.push(0); // 4
console.log(test[3]); // 0
test.shift(); // 3
console.log(test[0]); // 5.4
test.push('5'); // 4 (value is castable to float so passes isFloat validation)
test.push(11); // TypeError: invalid value
```

### `TypeArray.ErrorArray(...args: Error)`
**Added in:** v1.0.0

Function to create a predefined ErrorArray

**arguments:**
1. `...args: Error`

**returns:** Array

**throws:** TypeError

```javascript
const {ErrorArray} = require('@scuba-squad/type-array');
const test = ErrorArray(new Error('a'));
console.log(test.length); // 1
console.log(test[0]); // Error: a
test.push(new TypeError('invalid'));
console.log(test[1]); // TypeError: invalid
test.push('hello'); // TypeError: value must be an Error
```

### `TypeArray.FunctionArray(...args: Function)`
**Added in:** v1.0.0

Function to create a predefined FunctionArray

**arguments:**
1. `...args: Function`

**returns:** Array

**throws:** TypeError

```javascript
const {FunctionArray} = require('@scuba-squad/type-array');
const test = FunctionArray(Number);
console.log(test.length); // 1
console.log(test[0]); // [Function: Number]
test.push(() => {});
console.log(test[1]); // [Function]
test.push('hello'); // TypeError: value must be a Function
```

### `TypeArray.PromiseArray(...args: Promise)`
**Added in:** v1.0.0

Function to create a predefined PromiseArray

**arguments:**
1. `...args: Promise`

**returns:** Array

**throws:** TypeError

```javascript
const {PromiseArray} = require('@scuba-squad/type-array');
const test = PromiseArray(Promise.resolve(5));
console.log(test.length); // 1
console.log(test[0]); // Promise { 5 }
test.push(Promise.reject('fail'));
console.log(test[1]); // Promise { <rejected> 'fail' }
test.push('hello'); // TypeError: value must be a Promise
```

<a name="test"></a>
## Test
[tests](TEST.md)
```bash
npm install
npm test
```

<a name="license"></a>
## License
[MIT](LICENSE)