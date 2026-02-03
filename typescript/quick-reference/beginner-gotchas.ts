// @ts-nocheck - tells TypeScript to ignore errors in that file
// BEGINNER GOTCHAS - Things that trip people up!

// GOTCHA 1: Arrays need parentheses for union types
let mixed: (number | string)[];  // ✅ CORRECT - array of numbers OR strings
let wrong: number | string[];    // ❌ WRONG - this means "number OR array of strings"

// GOTCHA 2: Function return type comes AFTER the parameters
function add(a: number, b: number): number { // ✅ return type here!
  return a + b;
}

// GOTCHA 3: Optional properties use ?, not |
type User = {
  name: string;
  email?: string;        // ✅ CORRECT - optional
  // email: string | undefined;  // this works but ? is cleaner
};

// GOTCHA 4: any turns OFF type checking (avoid it!)
let anything: any = 'hello';
anything = 123;  // TypeScript doesn't check - you lose all safety!
// Use unknown instead if you really don't know the type

// GOTCHA 5: You can't reassign const, but you CAN modify arrays/objects
const numbers: number[] = [1, 2, 3];
numbers.push(4);  // ✅ OK - modifying the array
numbers = [5, 6]; // ❌ ERROR - can't reassign const

const user = { name: 'Alice' };
user.name = 'Bob';  // ✅ OK - modifying the object
user = { name: 'Bob' }; // ❌ ERROR - can't reassign const

// GOTCHA 6: Type after the colon, not before
let name: string = 'Alice';  // ✅ CORRECT
// string name = 'Alice';    // ❌ WRONG - this isn't Java/C++!

// GOTCHA 7: typeof is for checking types at runtime, not defining them
// For type checking:
if (typeof value === 'number') { /* ... */ }
// For defining types, just use the type name:
let age: number = 25;

// GOTCHA 8: Can't use methods that don't exist on a union type
function process(value: string | number) {
  // value.toUpperCase();  // ❌ ERROR - numbers don't have toUpperCase!
  
  // ✅ CORRECT - check the type first:
  if (typeof value === 'string') {
    value.toUpperCase();  // OK now!
  }
}