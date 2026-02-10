// IS ODD
// Problem: Determines if the number is odd
// Return: true if odd, false if even

const isOdd = (num) => {
  if(num % 2 !== 0) {
    return true 
  } else {
    return false
  }
}

// Cleaner version
const isOddCleaner = (num) => {
  return num % 2 !== 0
}

// Examples:
console.log(isOdd(4)); // -> false
console.log(isOdd(5)); // -> true

// Key concepts:
// - Modulo operator (%) - gets remainder after division
// - num % 2 !== 0 checks if the remainder is not 0
// - Can simplify: just return the bolean expression directly 

// When to use:
// - Filtering odd numbers
// - Alternating patterns
// - Checking divisibility