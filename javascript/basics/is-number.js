// IS NUMBER
// Problem: Returns boolean of whether argument is a number
// Return: true if number, false otherwise

const isNumber = (value) => {
  if (typeof value === 'number') {
    return true
  } else {
    return false
  }
}

// Cleaner version:
const isNumberCleaner = (value) => {
  return typeof value === 'number'
}

// Examples:
console.log(isNumber(5)); // -> true
console.log(isNumber('hi')); // -> false

// Key concepts:
// - typeof operator returns the type as a string 
// - typof 5 -> 'number
// - typeof 'hi' -> 'string'
// - Can return the boolean expression directly

// Edge cases:
// - typeof NaN === 'number' (true! NaN is technically a number type)
// - typeof Infinity === 'number' (also true)

// When to use:
// - Type checking before operations
// - Input validation
// - Preventing type errors