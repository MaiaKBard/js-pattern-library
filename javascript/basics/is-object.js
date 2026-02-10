// IS OBJECT
// Problem: Returns boolean of whether argument is an object
// Return: true if object (including arrays and functions), false otherwise

const isObject = (value) => {
  return (typeof value === 'object' && value !== null) || typeof value === 'function'
}

// Examples:
console.log(isObject(5)); // -> false
console.log(isObject([1, 2, 3])); // -> true (arrays are objects)
console.log(isObject({})); // -> true
console.log(isObject(() => {})); // -> true (functions are objects)
console.log(isObject(null)); // -> false (null excluded)

// Key concepts:
// - typeof value === 'object' catches objects and arrays
// - && value !== null excludes null (fixes JavaScript quirk)
// - || typeof value === 'function' also includes functions
// - Parentheses ensure correct order of operations

// Breaking it down:
// (typeof value === 'object' && value !== null) - true for objects/arrays, excludes null
// || typeof value === 'function' - also accepts functions

// Common mistake (DON'T do this):
const isObjectWrong = (value) => {
  if (typeof value === 'object' && value !== null && Array.isArray(value)) return true;
  return false;
};
// This ONLY returns true for arrays! Plain objects {} fail the Array.isArray() check.

// When to use:
// - Checking if something is an object type (including arrays/functions)
// - Before using object methods
// - Type validation in functions