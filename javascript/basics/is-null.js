// IS NULL
// Problem: Returns boolean of whether argument is null
// Return: true if null, false otherwise

const isNull = (value) => {
  if (value === null) {
    return true
  } else {
    return false
  }
}

// Cleaner version:
const isNullClean = (value) => {
  return value === null
}

// Examples:
console.log(isNull(null)); // -> true
console.log(isNull(5)); // -> false

// Key concepts:
// - Use === (strict equality) to check for null
// - typeof null === 'object' (DONT use typeof!)
// - null vs undefined: both mean 'no value' but are different 

// null vs undefinded:
// - null: explicitly set to 'no value'
// - unefined: hasnt been assigned yet

// When to use:
// - Checking if value was explicitly set to null
// - API responses that return null
// - Databases queries that return null