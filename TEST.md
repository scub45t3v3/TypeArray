# TOC
   - [Factory](#factory)
   - [#ErrorArray](#errorarray)
   - [#FunctionArray](#functionarray)
   - [#PromiseArray](#promisearray)
<a name=""></a>
 
<a name="factory"></a>
# Factory
should be a function.

```js
const test = TypeArray;
unit
  .function(test);
```

should return a function.

```js
const test = TypeArray('isRegExp');
unit
  .function(test);
```

should only accept values that are valid.

```js
const test = TypeArray('isRegExp')();
unit
  .array(test)
  .isEmpty()
  .given(test.push(/^asd/iu))
  .array(test)
  .hasLength(1)
  .given(test.push(new RegExp('asd', 'imu')))
  .array(test)
  .hasLength(2);
```

should throw an error when setting a value that is not valid.

```js
const test = TypeArray('isRegExp')();
unit
  .error(() => {
    test.push('hello');
  })
  .error(() => {
    test.push(5);
  })
  .error(() => {
    test.push(new Error('help'));
  })
  .error(() => {
    test.push(Number);
  })
  .error(() => {
    test.push([/asd/u]);
  })
  .error(() => {
    test.push(Promise.resolve(5));
  });
```

<a name="errorarray"></a>
# #ErrorArray
should be a function.

```js
const test = TypeArray.ErrorArray;
unit
  .function(test);
```

should only accept values that are Error.

```js
const test = TypeArray.ErrorArray();
unit
  .array(test)
  .isEmpty()
  .given(test.push(new Error('help')))
  .array(test)
  .hasLength(1);
```

should throw an error when setting a value that is not a Error.

```js
const test = TypeArray.ErrorArray();
unit
  .error(() => {
    test.push('hello');
  })
  .error(() => {
    test.push(5);
  })
  .error(() => {
    test.push(Promise.resolve(5));
  })
  .error(() => {
    test.push(Number);
  })
  .error(() => {
    test.push([new Error('help')]);
  })
  .error(() => {
    test.push(/asd/u);
  });
```

<a name="functionarray"></a>
# #FunctionArray
should be a function.

```js
const test = TypeArray.FunctionArray;
unit
  .function(test);
```

should only accept values that are Function.

```js
const test = TypeArray.FunctionArray();
unit
  .array(test)
  .isEmpty()
  .given(test.push(Number))
  .array(test)
  .hasLength(1);
```

should throw an error when setting a value that is not a Function.

```js
const test = TypeArray.FunctionArray();
unit
  .error(() => {
    test.push('hello');
  })
  .error(() => {
    test.push(5);
  })
  .error(() => {
    test.push(new Error('help'));
  })
  .error(() => {
    test.push(Promise.resolve(5));
  })
  .error(() => {
    test.push([Number, String]);
  })
  .error(() => {
    test.push(/asd/u);
  });
```

<a name="promisearray"></a>
# #PromiseArray
should be a function.

```js
const test = TypeArray.PromiseArray;
unit
  .function(test);
```

should only accept values that are Promises.

```js
const test = TypeArray.PromiseArray();
unit
  .array(test)
  .isEmpty()
  .given(test.push(Promise.resolve(5)))
  .array(test)
  .hasLength(1);
```

should throw an error when setting a value that is not a Promise.

```js
const test = TypeArray.PromiseArray();
unit
  .error(() => {
    test.push('hello');
  })
  .error(() => {
    test.push(5);
  })
  .error(() => {
    test.push(new Error('help'));
  })
  .error(() => {
    test.push(Number);
  })
  .error(() => {
    test.push([Promise.resolve(1)]);
  })
  .error(() => {
    test.push(/asd/u);
  });
```

