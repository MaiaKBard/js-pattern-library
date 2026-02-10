// RETURN EVENS
// Problem: Returns array of only the even numbers from input array
// Returns: New array containing only even numbers

const returnEvens = (array) => {
  const evenArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    }
  }
  return evenArray;
};

// Examples:
console.log(returnEvens([1, 2, 3, 4, 5, 6, 7])); // -> [2, 4, 6]

// Key concepts:
// - For loop to iterate
// - num % 2 === 0 checks if even
// - Build new array with matching elements

// Alternative using filter:
const returnEvensFilter = (array) => {
  return array.filter(num => num % 2 === 0);
};

// When to use:
// - Filtering even numbers
// - Data separation
// - Pattern matching