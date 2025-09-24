// This function expression divides 2000 by 100.
const divide = function() {
  return 2000 / 100;
};

// This is an arrow function that takes one parameter and multiplies it by itself.
const square = (x) => x * x;

// This is an arrow function that takes two parameters and adds them together.
const add = (a, b) => a + b;

// Export all the functions so they can be tested.
module.exports = {
  divide,
  square,
  add
};
 