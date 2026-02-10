// IS NEGATIVE
// Problem: Determines if the number is negative
// Returns: true if negative, false if zero or positive

const isNegative = (num) => {
  if (num < 0) {
    return true
  } else {
    return false
  }
}

// Cleaner version:
const isNegativeCleaner = (num) => {
  return num < 0
}

// Examples:
console.log(isNegative(-1)); // -> true
console.log(isNegative(1)); // -> false
console.log(isNegative(0)); // -> false

// Key concepts:
// - Comparison operator (<)
// - Retuns boolean
// - Can simplify by returning the comparison directly

// When to use:
// - Input validation
// - Checking for valid values
// - Financial calculations (debts/credits)