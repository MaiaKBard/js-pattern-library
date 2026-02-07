// REVERSE OBJECT

// Problem: Accepts an object and returns a new object with keys and values swapped.
// You can assume all values are strings or numbers with no duplicates.
// Return: A new object with the keys and values swapped

// Input: { a:1, b: 'c', d: 4 }
// Output: { '1': 'a', '4': 'd', 'c': 'b' }
export function reversedObject(obj) {
  const output = {}

  for (let key in obj) {
    output[obj[key]] = key
  }

  return output
}

// Examples:
console.log(reverseObject({ a: 1, b: 'c', d: 4 })); 
// -> { '1': 'a', '4': 'd', 'c': 'b' }

// Key Concepts:
// - for ... in loop iterates over object keys
// - Bracket notation for dynamic keys: output[object[key]]
// - Swapping pattern: new[oldValue] = oldKey
// - Values become keys, keys become values

// Alternative approaches:

// Approach 2: Using Object.keys/values with forEach
function reverseObjectAlt1(obj) {
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  const output = {}

  keys.forEach((key, i) => {
    output[values[i]] = keys[i]
  })

  return output
}

// Approach 3: for ... in with explicit value variable
function reverseObjectAlt2(object) {
  const newObj = {};

  for (let key in object) {
    const value = object[key];
    newObj[value] = key;
  }

  return newObj;
}

// When to use:
// - When you need to invert a lookup table
// - When keys and values need to be swapped
// - Dictionary/mapping transformations

// Edge Cases:
// - Assumes all values are unique (duplcates will overwrite)
// - Values can be strings or numbers (both work as keys)