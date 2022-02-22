// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //Input: object
  //Output: string
  //Edge cases: null (classified as object), arrays (classified as an object), undefined/functions (invalid)

  var stringified = '';

  //HELPER FUNCTIONS

  //Stringifies Base Cases: strings, numbers, booleans
  var baseCase = function () {
    if (obj === undefined || typeof obj === typeof function(){}) {
      return '';
    }
    if (typeof obj === typeof '') {
      return '"' + obj + '"';
    } else {
      return '' + obj; //numbers and booleans
    }
  };

  //Iterates through objects()
  var iterateObject = function () {
    var objectString = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === function() {}) {
        continue;
      }
      objectString.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
    }
    return objectString.join(',');
  };

  //Iterates through arrays()
  var iterateArray = function () {
    var arrayString = [];
    for (var i = 0; i < obj.length; i++) {
      if(obj[i] === undefined || typeof obj[i] === function(){}) {
        continue;
      }
      arrayString.push(stringifyJSON(obj[i]));
    }
    return arrayString.join(',');
  };


  //MAIN
  if (typeof obj === 'object') { //Accepts NULL, objects, and arrays
    if (obj === null) { //exception NULL case
      stringified += obj;
    } else if (Array.isArray(obj)) { //array case
      //Array to string function
      stringified += '[' + iterateArray() + ']';
    } else { //Object case
      //Object to string function
    }

  } else { //Base Cases
    stringified += baseCase(obj);
  }

  return stringified;
};
