// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  //document.body, element.childNodes, and element.classList
  var arr = [];
  var recursivelyCallChildnode = function(node) {
    if (node.classList) {
      if (node.classList.contains(className)) {
        arr.push(node);
      }
    }
    for (var i = 0; i < node.childNodes.length; i++) {
      recursivelyCallChildnode(node.childNodes[i]);
    }
    var childNodes = node.childNodes;
  };
  recursivelyCallChildnode(document.body);
  return arr;
};
  

  //console.log(arr, "arrfinal")
 
  
  

  
  

// base case - check if className of element is correct

  // if (node.classList === /* contains*/ className) {
  //   arr.push(node);
  // }
//use recursion or forloop to check below:
//does it have a child

  
// recursive case - look into the child nodes and call the function again

//navigate through the DOM tree to child nodes
// call the function again to check lower nodes

  

//use recursion to make an array that contains all elements in document.body
//iterate over array to check for elements contains className
////if so push in new array
//
//return array






