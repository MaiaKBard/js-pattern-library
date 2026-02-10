// POSITIVE (Absolute Value)
// Problem: Returns the absolute value of the inputted number
// Return: Always a positive number

const positive = (num) => {
  if (num < 0) {
    return Math.abs(num)
  } else {
    return num
  }
}

// Cleaner version:
const positiveClean = (num) => {
  return Math.abs(num)
}

// Examples:
console.log(positive(-1)); // -> 1
console.log(positive(1)); // -> 1

// Key concepts:
// - Math.abs() returns absolute value
// - Absolute value = distance from zero (always positive)
// - No need for if/else - Math.abs() handles both cases

// When to use:
// - Distance calculations 
// - Ensuring positive values
// - Comparing magnitudes without sign