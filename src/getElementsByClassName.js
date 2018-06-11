// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  //document.body, element.childNodes, and element.classList

  //returns an array of elements containing className.
  //recursively checks all of child nodes of that element.
  
  //create empty array
  //for each element, figure out if push or not push in array
  ////check if element contains classname
  //return empty
  var arr = [];
  var element = document.body

// base case - check if className of element is correct

  if (element.classList === /* contains*/ className) {
    arr.push(element);
  }
//use recursion or forloop to check below:
//does it have a child

  
// recursive case - look into the child nodes and call the function again

//navigate through the DOM tree to child nodes
// call the function again to check lower nodes

  return arr;
};
