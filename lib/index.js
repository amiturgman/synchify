"use strict";
var util = require('util');


module.exports = 
// a generic function to call async methods on an object
async function callAsyncFunc(obj, func) {
   return new Promise((resolve, reject) => {
    
    // callback for the function invoked
    var cb = (err, result) => {
      if (err) {
        return reject(err);
      }
      
      return resolve(result);
    };

    var params = Array.prototype.slice.call(arguments, 2);
    params.push(cb);

    return obj[func].apply(obj, params);
  });
}


