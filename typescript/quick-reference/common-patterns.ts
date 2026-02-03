// @ts-nocheck - tells TypeScript to ignore errors in that file
// COMMON PATTERNS - Patterns you'll use over and over

// PATTERN 1: Array of objects
type Product = {
  name: string;
  price: number;
};

const products: Product[] = [
  { name: 'Book', price: 10 },
  { name: 'Pen', price: 2 }
];

// PATTERN 2: Function that might return nothing
function findById(id: number): User | null {
  // Returns User if found, null if not
  return null; // example
}

// PATTERN 3: Type alias for reusable types
type ID = number | string;
type Callback = (result: string) => void;

// PATTERN 4: Object with unknown keys
type Dictionary = {
  [key: string]: number;  // any string key, number value
};

const scores: Dictionary = {
  'Alice': 100,
  'Bob': 85
};