// @ts-nocheck - tells TypeScript to ignore errors in that file

// ANY vs UNKNOWN - When you don't know the type

// ❌ any - turns off ALL type checking (dangerous!)
let data: any = 'hello';
data = 123;  // OK
data = true;  // OK
data.anything.goes.here();  // TypeScript won't catch errors!

// ✅ unknown - safe "I don't know" type
let value: unknown = 'hello';
value = 123;  // OK
value = true;  // OK

// But you MUST check the type before using it:
// value.toUpperCase();  // ❌ ERROR - TypeScript makes you check first!

// ✅ CORRECT - check the type:
if (typeof value === 'string') {
  value.toUpperCase();  // OK now!
}

// WHEN TO USE EACH:
// any: Almost never! Only for quick prototypes or gradual migration
// unknown: When you truly don't know the type (API responses, user input)

// EXAMPLE: API response
async function fetchData(): Promise<unknown> {
  const response = await fetch('/api/data');
  return response.json();  // We don't know what shape this is!
}

const data = await fetchData();
// Now we check before using:
if (typeof data === 'object' && data !== null && 'name' in data) {
  console.log(data.name);  // Safe!
}