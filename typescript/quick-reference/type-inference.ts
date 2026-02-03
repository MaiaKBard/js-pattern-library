// TYPE INFERENCE - TypeScript is smart! You don't always need to write types

// TypeScript can INFER (figure out) types from values:
let age = 25;  // TypeScript knows this is a number
let name = 'Alice';  // TypeScript knows this is a string
// You could write: let age: number = 25; but it's redundant!

// When to write types explicitly:
// 1. Function parameters - TypeScript can't guess what you want
function greet(name: string) { // ✅ MUST type this
  return `Hello, ${name}`;
}

// 2. When the initial value doesn't show the full type you want
let id: number | string;  // ✅ Need to specify union
id = 123;  // could be number or string later

// 3. Empty arrays - TypeScript doesn't know what will go in them
let numbers: number[] = [];  // ✅ Specify type
numbers.push(1);  // Now TypeScript knows

// When you DON'T need types (TypeScript infers):
let count = 0;  // inferred as number
let message = 'hello';  // inferred as string
let items = [1, 2, 3];  // inferred as number[]
let user = { name: 'Alice', age: 25 };  // inferred as { name: string; age: number }

// Function return types are often inferred:
function double(n: number) {  // return type inferred as number
  return n * 2;
}

// But it's good practice to write return types for public functions:
function double(n: number): number {  // ✅ explicit is clearer
  return n * 2;
}

// RULE OF THUMB:
// - Parameters: always type them
// - Return values: type them for functions others will use
// - Variables: only type when TypeScript can't figure it out