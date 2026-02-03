// COMMON TYPESCRIPT ERRORS & FIXES

// ERROR: Type 'string' is not assignable to type 'number'
let age: number = '25';  // ❌ WRONG
let age: number = 25;    // ✅ CORRECT

// ERROR: Property 'email' is missing
type User = { name: string; email: string };
const user: User = { name: 'Alice' };  // ❌ WRONG - missing email
const user: User = { name: 'Alice', email: 'a@b.com' };  // ✅ CORRECT
// OR make it optional:
type User = { name: string; email?: string };  // ✅ now email is optional

// ERROR: Argument of type 'string' not assignable to parameter of type 'number'
function double(n: number) { return n * 2; }
double('5');  // ❌ WRONG
double(5);    // ✅ CORRECT

// ERROR: Object is possibly 'null'
function findUser(id: number): User | null { /* ... */ }
const user = findUser(1);
console.log(user.name);  // ❌ WRONG - might be null!
// ✅ CORRECT - check first:
if (user) {
  console.log(user.name);
}
