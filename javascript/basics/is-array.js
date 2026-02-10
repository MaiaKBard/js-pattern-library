// ISARRAY
// Problem: Returns boolean of whether argument is an array
// Return: true if array, false otherwise

const isArray = (value) => {
  return Array.isArray(value)
}

// Examples:
console.log(isArray(5)); // -> false
console.log(isArray([1, 2, 3])); // -> true


// Key concepts:
// - Array.isArray() is the CORRECT way to check for arrays
// - DONT use the typeof - it returns 'object' for arrays!
// - typeof [1, 2, 3] === 'object' (true, but not helpful)

// Why Array.isArray():
// - typeof cant distinquish arrays from objects
// - Array.isArray() specifically checks for arrays

// When to use:
// - Before using array methods (.push, .map, etc.)
// - Type checking in functions
// - Input validation