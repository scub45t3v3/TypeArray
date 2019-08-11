'use strict';

// include dependencies
const debug = require('debug')('TypeArray:factory');
const isInteger = require('@scuba-squad/validation/isInteger');
const toCallable = require('@scuba-squad/validation/util/toCallable');

const factory = (validator, message = 'invalid value') => {
  validator = toCallable(validator);

  return function TypeArray(...args) {
    const instance = new Proxy([], {
      set: (array, key, value) => {
        debug('call:set(%o, %o, %o)', array, key, value);
        if (isInteger(key, {min: 0}) && !validator(value)) {
          throw new TypeError(message);
        }

        array[key] = value;

        return true;
      },
    });

    instance.push(...args);

    return instance;
  };
}; // end factory

// export as commonjs module
module.exports = factory;