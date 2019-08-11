'use strict';

// include dependencies
const factory = require('./factory');

// export as commonjs module
module.exports = factory;
module.exports.ErrorArray = factory('isError', 'value must be an Error');
module.exports.FunctionArray = factory('isFunction', 'value must be a Function');
module.exports.PromiseArray = factory('isPromise', 'value must be a Promise');