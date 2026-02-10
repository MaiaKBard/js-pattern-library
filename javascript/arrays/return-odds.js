// RETURN ODDS
// Problem: Returns array of only the odd numbers from input array
// Return: New array containing only odd numbers

const returnOdds = (array) => {
  const oddArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i])
    }
  }
  return oddArray
}

// Examples:
console.log(returnOdds([1, 2, 3, 4, 5, 6, 7])); // -> [1, 3, 5, 7]

// Key concepts:
// - For loop to iterate through array
// - Modulo operator (%) to check if odd
// - .push() to add to result array
// - Build new array rather than modifying original 

// Alternative using filter:
const returnOddsFilter = (array) => {
  return array.filter(num => num % 2 !== 0)
}

// When to use:
// - Filtering arrays by condition
// - Selecting specific elements
// - Data processing