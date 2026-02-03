// STRING METHODS

// .length - get string length (property, not a method)
'hello'.length //5

// .split(seperator) - turn string into array
'hello world'.split(' ') // ['hello', 'world']
'a,b,c'.split(',') // ['a', 'b', 'c']

// .slice(start, end) - extract part of string
'hello'.slice(0, 2) // 'he'
'hello'.slice(2) // 'llo' (from index to end)

// breacket notation - access character at index
'hello'[0] // 'h'
'hello'[1] // 'e'

// .toUpperCase() / .toLowerCase()
'hello'.toUpperCase() // 'HELLO'
'HELLO'.toLowerCase() // 'hello'

// .trim() - remove whitespace from both ends
'     hello   '.trim() // 'hello'

// .includes(substring) - check if contains substring
'hello world'.includes('world') // true

// .repeat(count) - repeat string n times
'ha'.repeat(3) // 'hahaha'

// .indexOf(substring) - find index of firat occurrence
'hello'.indexOf('l') // 2
'hello'.indexOf('c') // -1 (not found)

// /charAt(index) - get character at specific index (alternative to bracket notation)
'hello'.chartAt(0) // 'h'

// .replace(search, replacement) - replace first occurence
'hello'.replace('l', 'x') // 'hexlo' (only replaces FIRST 'l')

// .replaceAll(search, replacement) - replace ALL occurences
'hello'.replace('l', 'x') // 'hexxo' 

//NO .reverse() for string! Must convert to array first:
// Pattern: string -> array -> reverse -> string
'hello'.split('').reverse().join('')
//.split('') splits into array of characters
// .reverse() reverses the array
// .join('') joins array back into string 