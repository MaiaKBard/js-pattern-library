// REPEAT

// Problem: Repeat a string a specific number of times
// Returns the concatenated result

export function repeat(string, count) {
  // Create empty string to build up result
  let newString = '';
  
  // Loop 'count' times, adding string each iteration
  for (let i = 0; i < count; i++) {
    newString += string;
  }
  
  return newString;
}

// Examples:
console.log(repeat('abc', 3));  // 'abcabcabc'
console.log(repeat('*', 3));    // '***'
console.log(repeat('abc', 0));  // '' (loop runs 0 times)
console.log(repeat('', 3));     // '' (adding empty string 3 times)

// Key concepts:
// - for loop: for (let i = 0; i < count; i++)
// - += operator for string concatenation
// - Building up a result string gradually

// Note: There's also a built-in method .repeat() you could use:
// 'abc'.repeat(3) // 'abcabcabc'
// But building it yourself shows you understand loops!