// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //Input: object
  //Output: string
  //Edge cases: null (classified as object), arrays (classified as an object), undefined/functions (invalid)
  //Plan:

  var stringified = '';

  //HELPER FUNCTIONS

  //Stringifies Base Cases: strings, numbers, booleans
  var stringify = function () {
    if (obj === undefined || typeof obj === typeof function(){}) {
      return '';
    }
    if (typeof obj === typeof '') {
      return '"' + obj + '"';
    } else {
      return '' + obj; //numbers and booleans
    }
  };

  //MAIN
  if (typeof obj === 'object') { //Accepts NULL, objects, and arrays

  } else { //Base Cases
    stringified += stringify(obj);
  }

  return stringified;
};
