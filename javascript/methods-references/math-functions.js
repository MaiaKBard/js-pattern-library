// MATH FUNCTIONS

// Math.round() - round to nearest integer
Math.round(4.7) // 5
Math.round(4.4) // 4
Math.round(4.5) // 5

// Math.floor() - round DOWN to nearest integer
Math.floor(4.9) // 4
Math.floor(4.1) // 4

// Math.ceil() - round UP to nearest integer
Math.ceil(4.1) // 5
Math.ceil(4.9) // 5

// Math.abs() - absolute value (remove negative sign)
Math.abs(-5) // 5
Math.abs(5) // 5

// Math.max() - find largest number
Math.max(1, 5, 3) // 5
Math.max(...[1, 5, 3]) // 5 (with array, use spread operator)

// Math.min() - find the smallest integer
Math.min(1, 5, 3) // 1
Math.min(...[1, 5, 3]) // 1 (with array, use spread operator)

// Math.sqrt() - square root
Math.sqrt(16) // 4
Math.sqrt(25) // 5

// Math.pow(base, exponent) - raise to power
Math.pow(2, 3) // 8 (2 cubed)
Math.pow(5, 2) // 25 (5 squared)
// Alternative: use ** operator
2 ** 3 // 8
5 ** 2 // 25

// Math.random() - random decimal between 0 and 1
Math.random() // e.g., 0.792...
//Random integer between 0 and 9
Math.floor(Math.random() * 10) 
// Random integer between 1 and 10
Math.floor(Math.random() * 10) + 1

