// IS NEGATIVE OR ODD

// Problem: Check if a number is negative OR odd (or both)
// Returns true if either condition is met

export function isNegativeOrOdd(value) {
  // Check if odd (remainder when divided by 2 is not 0) OR if negative (less than 0)
  if (value % 2 !== 0 || value < 0) return true;
  
  return false;
}

// Examples:
console.log(isNegativeOrOdd(1));   // true (odd)
console.log(isNegativeOrOdd(-2));  // true (negative)
console.log(isNegativeOrOdd(2));   // false (even and positive)
console.log(isNegativeOrOdd(-3));  // true (both negative AND odd)

// Key concepts:
// - % (modulo) operator - finds remainder after division
// - || (OR) operator - returns true if EITHER condition is true
// - Checking odd: value % 2 !== 0
// - Checking negative: value < 0

// Could also be written as one line:
// return value % 2 !== 0 || value < 0;