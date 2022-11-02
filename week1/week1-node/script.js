'use strict';

const _ = require('lodash');

// Ex. 1
console.log('Hello World, I\'m Node');

// Ex. 2
let output = 'Just testing nodemon, using lodast to conve' +
    'this camel case';
console.log(output);
output = _.camelCase(output);
console.log(output);
