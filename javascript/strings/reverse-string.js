// REVERSE A STRING 

// Problem: Returns a string that is the reverse of the inputted string.
// Returns: A reversed string of the inputted string

export function reverseString(string) {
  // Declare a constant variable
    //apply a string method .split('') to turn each letter into individual elements of an array
    //chain on an array method .reverse() to reverse the array of letters
    //chain on the array method .join('') to join each elemnt in the array as a single string
  const reversedStr = string.split('').reverse().join('')

  // Return the results
  return reversedStr
}

// Examples:
console.log(reverseString('hello')); // -> 'olleh'
console.log(reverseString('will')); // -> 'lliw'
console.log(reverseString('')); // -> ''

// Key Concepts:
// - Method chaining (calling multiple methods in sequence)
// - String -> Array -> String conversion pattern
// - .split('') - converts string to arrya of characters
// - .reverse() - reverses an array (mutates it)
// - .join('') - convets array back to string

// Notes:
// - You could write this in one line: return string.split('').reverse().join('')
// - This pattern (split-reverse-join) is THE standard way to reverse strings 
// in JS since string do not have a .reverse() method 
// - The empty string '' in split/join is important - it splits/joins by 
// individual characters (not words of othe seperators)
// - Edge Cases: empty string returns empty string(works correctly)

// Alternative approaches:
// - For loop iterating backwards
// - Recursion
// - But split-reverse-join is the most concise and readable