// OBJECT METHODS

// bracket notation - access/set property with variable or string 
const obj = { name: 'Alice', age: 25 }
obj['name'] // 'Alice'
const key = 'age'
obj[key] // 25
obj['new-key'] = 'value' // can use hyphens with brackets

// dot notation - access/set property
obj.name // 'Alice'
obj.age // 25
obj.city = 'NYC' // add new property

// Object.keys(obj) - get array of keys
Object.keys({a: 1, b: 2}) // ['a', 'b']

// Object.values(object) - get array of values
Object.values({a: 1, b: 2}) // [1, 2]

// Object.enteries(obj) - get array of [key, value] pairs
Object.entries({a: 1, b: 2})  // [['a', 1], ['b', 2]]

// delete - remove property
const obj2 = {a: 1, b: 2}
delete obj2.a // obj is now { b: 2 }

// 'in' operator - check if property exists
'name' in {name: 'Alice', age: 25} // true
'city' in {name: 'Alice', age: 25} // false

// Object.assign(target, source) - copy properties (shallow copy)
Object.assign({}, {a: 1, b: 2}) // { a: 1, b: 2 } (new object)