// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// Global Scope (the whole world of our code) 

// Block scope, block of code, "kingdom of code"
function sundae() {
  // The lexical scope of sprinkles is sundae () because that's where it was initially defined. 
  const toppings = "sprinkles";
  console.log(`Ice cream with cherries and ${toppings}!`);
  
  function cone() {
    console.log(`Ice cream in a cone but still with ${toppings}!`);

  }// cone block ends
  
  // Calling within sundae so it still runs 
  cone(); 

}// sundae block ends 

sundae();



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
