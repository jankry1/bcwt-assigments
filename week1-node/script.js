'use strict';

const _ = require('lodash');

//Exr.1
console.log('Hello World, Im Node');

// Exr.2
let output = 'Just testing nodemon' +
    'this is camel case';
console.log(output);
output = _.camelCase(output);
console.log(output);

