// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //check if obj is boolean, number, string, array, obj
  var str = '';
  if (typeof obj === 'string') {
    str += '\"' + obj.toString() + '\"';
    return str;
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    str = obj.toString();
    return str;
  } else if (obj === null || obj === Infinity || obj === NaN) {
    return 'null';
  } else if (Array.isArray(obj)) {
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
  } else if (typeof obj === 'object') {
    str += '{';
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        var keyStr = stringifyJSON(key);
        var valueStr = stringifyJSON(obj[key]);
        str += keyStr + ':' + valueStr + ',';
      }
    }
    if (str.length > 1) {
      var slicedStr = str.slice(0, (str.length - 1));
      slicedStr += '}';
      return slicedStr;
    } else {
      str += '}';
      return str;
    } 
  }
  return str;
};