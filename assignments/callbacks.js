// Create a higher order function and invoke the callback function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// CHALLENGE 1 // 


// getLength passes the length of the array into the callback.
// Higher order function using "cb" as the call back 
function getLength(arr, cb) {
  return cb(arr.length); 
}

// function invocation 
getLength(items, function(length) {
  console.log(length); 
}); 

// CHALLENGE 2 // 

 // Last passes the last item of the array into the callback.
 // Higher order function using "cb" as the call back 
 function last(arr, cb) {
  return cb(arr[arr.length - 1]);
 }

 // Function invocation 
 last (items, function(final){
  console.log(final); 
 }); 

// CHALLENGE 3 // 

// sumNums adds two numbers (x, y) and passes the result to the callback.
// Higher order function using "cb" as the call back 
function sumNums(x, y, cb) {
  return cb(x + y); 
 }

 // Function invocation 
 sumNums(2,5, function(add){
   console.log(add); 
 }); 



 // MultiplyNums multiplies two numbers and passes the result to the callback.
 // Higher order function using "cb" as the call back 
 function multiplyNums(x, y, cb) {
  return cb(x*y); 
}

 // Function invocation 
multiplyNums(2,5, function(product) {
  console.log(product);
}); 

// CHALLENGE 5 // 

 // Contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
 // Higher order function using "cb" as the call back 
 function contains(item, list, cb) {
    // TRUE OR FALSE 
    return cb(list.includes(item)); 
 }

 // Function invocation 

contains ('Pencil', items, function(check) {
  console.log(check); 
}); 

// // /* STRETCH PROBLEM */

// // Creating an array with duplicates to test
// instruments = [mandolin, mandolin, guitar, drums]; 

//   // removeDuplicates removes all duplicate values from the given array.
//   function removeDuplicates(array, cb) {

//   }

// // Pass the duplicate free array to the callback function.
 
