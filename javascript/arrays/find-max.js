// FIND MAX
// Problem: Returns the maximum element from array of numbers
// Returns: The largest number in the array

const findMax = (array) => {
  let maxNum = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i]
    }
  }
  return maxNum
}

// Examples:
console.log(findMax([1, 25, 6, 3])); // -> 25


// Key concepts:
// - Initialize max to first element
// - Compare each element to current max
// - Update max if larger element found
// - Returns single value, not array

// Alternative using Math.max:
const findMaxAlt = (array) => {
  return Math.max(...array)
}

// Edge casses:
// - Empty arary: returns undefined (no first element)
// - Negative numbers: works correctly
// - All same number: returns that number

// When to use:
// - Finding largest value
// - Statistical analysis
// - Comparision operations