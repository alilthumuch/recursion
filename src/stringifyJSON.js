// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //check if obj is boolean, number, string, array, obj
  var str = '';
  if (typeof obj === "function" || obj === undefined) {
    return '{}';
  } else if (typeof obj === 'string') {
    str += '\"' + obj.toString() + '\"';
    return str;
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    str = obj.toString();
    return str;
  } else if (obj === null || obj === Infinity || obj === NaN) {
    return 'null';
  } else if (Array.isArray(obj)) {
    //create new array 
    //iterate over each item in the array calling stringifyJSON on each item
    //add to str 
    // make sure to add brackets to str first
    str += '[';
    obj.forEach(function(value) {
      var addToStr = stringifyJSON(value);
      str += addToStr + ',';
    });
    if (str.length > 1) {
      var slicedStr = str.slice(0, (str.length - 1));
      slicedStr += ']';
      return slicedStr;
    } else {
      str += ']';
      return str;
    }
    

    // var slicedStr = str.slice(0, (str.length - 1));
    // slicedStr += ']';
    // return slicedStr;

  } else if (typeof obj === 'object') {
    str += '{';
    // console.log(str, 'str1');
    for (var key in obj) {
      var keyStr = stringifyJSON(key);
      var valueStr = stringifyJSON(obj[key]);
      str += keyStr + ':' + valueStr + ',';
    // console.log(str, 'str2');
    }
    if (str.length > 1) {
      var slicedStr = str.slice(0, (str.length - 1));
      slicedStr += '}';
      return slicedStr;
    } else {
      str += '}';
      return str;
    } 

    // else if {
    // }
    //     str = str.slice(0, (str.length - 1));
    //   }
    // console.log(str, 'str3');
    
  }
  return str;
};