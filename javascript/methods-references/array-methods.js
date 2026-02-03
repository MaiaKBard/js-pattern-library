// ARRAY METHODS

// .length - get array length (property, not a method)
[1, 2, 3].length // 3

// .push(item) - add to end of the array (mutates the original)
const arr = [1, 2]
arr.push(3) // arr is now [1, 2, 3]
arr.push( 1, 2) // [1, 2, 3, 1, 2]

// .pop() - remove from the end (mutates the original)
const arr2 = [1, 2, 3]
arr2.pop(3) // returns 3, arr is now [1, 2]

// .shift() - remove from the begining (mutates original)
const arr3 = [1, 2, 3]
arr3.shift // returns 1, array is now [2, 3]

// .unshift(item) - add to begining (mutates original)
const arr4 = [2, 3];
arr4.unshift(1) // arr is now [1, 2, 3]

// bracket notation - access element at index
[10, 20, 30][0] // 10
[10, 20, 30][2] // 30

// .slice(start, end) - extract portion (does not mutate)
[1, 2, 3, 4].slice(1, 3) // [2, 3]
[1, 2, 3].slice(1) // [2, 3] (from index 1 to end)

// .includes(item) - check if array contains item
[1, 2, 3].includes(2) // true
[1, 2, 3].includes(5) // false

// indexOf(item) - find index of item
[1, 2, 3].indexOf(2) // 1
[1, 2, 3].indexOf(5) // -1 (not found)

// .join(seperator) - turn array into string
['hello', 'world'].join(' ') // 'hello world'
[1, 2, 3].join('') // '123'

// .reverse() - reverse array (mutates original) 
const arr5 = [1, 2, 3]
arr.reverse() // [3, 2, 1]

// .concat(array) - combine arrays (does not mutate)
[1, 2].concat([3, 4]) // [1, 2, 3, 4]

// .sort() - sort array (mutates original) - careful, sorts as strings by default
[3, 1, 2].sort() // [1, 2, 3]
[10, 2, 1].sort() // [1, 10, 2] - WATCH OUT! Sorts as strings
[10, 2, 1].sort((a, b) => a - b) // [1, 2, 10] - correct number sort