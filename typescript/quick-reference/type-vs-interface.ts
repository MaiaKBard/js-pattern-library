// @ts-nocheck - tells TypeScript to ignore errors in that file
// TYPE VS INTERFACE - When to use which

// TYPE ALIAS - use for simple types and unions
type Color = 'red' | 'blue' | 'green';
type ID = number | string;

// INTERFACE - use for objects that might be extended
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

// RULE OF THUMB:
// - Use TYPE for unions, primitives, simple stuff
// - Use INTERFACE for objects you might extend later
// - Both work for objects, pick one style and stick with it