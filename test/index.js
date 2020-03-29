'use strict';

// include dependencies
const unit = require('unit.js');
const TypeArray = require('../index');

describe('Factory', () => {
  it('should be a function', () => {
    const test = TypeArray;

    unit
      .function(test);
  }); // end it

  it('should return a function', () => {
    const test = TypeArray('isRegExp');

    unit
      .function(test);
  }); // end it

  it('should only accept values that are valid', () => {
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
  }); // end it

  it('should throw an error when setting a value that is not valid', () => {
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
  }); // end it
}); // end descibe Factory

describe('#ErrorArray', () => {
  it('should be a function', () => {
    const test = TypeArray.ErrorArray;

    unit
      .function(test);
  }); // end it

  it('should only accept values that are Error', () => {
    const test = TypeArray.ErrorArray();

    unit
      .array(test)
      .isEmpty()
      .given(test.push(new Error('help')))
      .array(test)
      .hasLength(1);
  }); // end it

  it('should throw an error when setting a value that is not a Error', () => {
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
  }); // end it
}); // end describe ErrorArray

describe('#FunctionArray', () => {
  it('should be a function', () => {
    const test = TypeArray.FunctionArray;

    unit
      .function(test);
  }); // end it

  it('should only accept values that are Function', () => {
    const test = TypeArray.FunctionArray();

    unit
      .array(test)
      .isEmpty()
      .given(test.push(Number))
      .array(test)
      .hasLength(1);
  }); // end it

  it('should throw an error when setting a value that is not a Function', () => {
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
  }); // end it
}); // end descibe FunctionArray

describe('#PromiseArray', () => {
  it('should be a function', () => {
    const test = TypeArray.PromiseArray;

    unit
      .function(test);
  }); // end it

  it('should only accept values that are Promises', () => {
    const test = TypeArray.PromiseArray();

    unit
      .array(test)
      .isEmpty()
      .given(test.push(Promise.resolve(5)))
      .array(test)
      .hasLength(1);
  }); // end it

  it('should throw an error when setting a value that is not a Promise', () => {
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
  }); // end it
}); // end descibe PromiseArray