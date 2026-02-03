// TYPE SYNTAX - The basics you'll use constantly

// PRIMITIVES - the building blocks
let age: number = 25;
let name: string = 'Alice';
let isStudent: boolean = true;

// ARRAYS - two ways to write them
let numbers: number[] = [1, 2, 3];
let colors: Array<string> = ['red', 'blue']; // same thing

// UNION TYPES - this OR that
let id: number | string;
id = 123;    // OK
id = 'ABC';  // OK

// LITERAL TYPES - only exact values
type Status = 'pending' | 'approved' | 'rejected';
let orderStatus: Status = 'pending'; // must be one of these three

// FUNCTIONS - type inputs and outputs
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters with ?
function greet(name: string, greeting?: string): string {
  return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;
}

// OBJECTS - define structure
type User = {
  id: number;
  name: string;
  email?: string;  // optional property
};

const user: User = {
  id: 1,
  name: 'Alice'
  // email is optional, so this is valid
};