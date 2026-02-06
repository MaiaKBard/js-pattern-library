// @ts-nocheck
//TYPESCRIPT BASCICS

//Core syntax reference

// TYPING FUNCTION PARAMETERS & RETURN VALUES

// Basic function typing
const add = (a:number, b:number): number => {
  return a + b
}

//String input, boolean output(like palindrome)
const palindrome = (str:string): boolean => {
  //your logic
  return true
}


// Number input, boolean output(like isPrime)
const isPrime = (num:number):boolean => {
  //your logic
  return false
}

// TYPING OBJECTS

// Simple object types // Use semicolons (more common in typing docs)
type Musician = {
  artistName: string;
  age: number;
  deceased: boolean;
}

const frankZappa: Musician = {
  artistName: 'Frank Zappa', 
  age: 53, 
  deceased: true
}

// Function that takes an object parameter
const getMusicianInfo = (musicianObj: Musician): string => {
  const { artistName, age, deceased } = musicianObj // Deconstructing the object
  return `${artistName}, age ${age}`
}

// INDEX SIGNATURES (objects with unknown keys)

// When you know the type of keys and values but not specifici keys
type GroceryList = {
  [key:string]: number // any string key, number value
}

const groceryList: GroceryList = {
  carrots: 5,
  potatoes: 12,
  onions: 3,
}

// Array values
type InappropriateActions = {
  [key: string]: string[] // any string key, string array value
}

const actions: InappropriateActions = {
  funeral: ['excessive laughter', 'bad jokes'],
  date: ['checking phone', 'talking about ex'],
}

// RECORD TYPE (cleaner index signature)

// Instead of: { [key: number]: Character}
// Use: Record<number, Character>

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
}

type CharcterById = Record<number, Character>

const characters: CharactersById = {
  1: { id: 1, name: 'Rick', status: 'Alive', species: 'Human' },
  2: { id: 2, name: 'Morty', status: 'Alive', species: 'Human' },
}

// LITERAL TYPES (exact values only)

// --- LITERAL TYPES (exact values only) ---

type CapreseSalad = {
  name: 'Caprese Salad';  // ONLY this exact string
  price: 14.99;           // ONLY this exact number
  inStock: true;          // ONLY true, not any boolean
};

// GENERICS (type parameters)

//  Think of generics like function parameters but for types
// <Name, City> are placeholders that get filled in when you use the type

type GroceryStore<Name, City> = {
  name: Name;
  city: City;
}

// When you use it, you pass in the actual types:
type Kroger = GroceryStore<'Kroger', 'Detroit'>
// Results: { name: 'Kroger', city: 'Detroit'}

type StopNShop = GroceryStore<"Stop 'N Shop", 'Massachusetts'>
// Results: { name: "Stop 'N Shop"; city: 'Massachusetts' }

// Function generic typing
function getFirst<T>(arr: T[]) {  // T is a TYPE parameter
  return arr[0]
}
// It's like:
  // <T> = "Hey TypeScript, I'm going to use a placeholder type called T"
  // arr: T[] = "Now use that T here"
  // : T = "And use it here too"

// TYPING ARRAYS

// Array of numbers
const numbers: number[] = [1, 2, 3]

// Array of strings
const names: string[] = ['Alice', 'Bob']

// Array of objects
const users: Musician[] = [
  { artistName: 'Bob', age: 30, deceased: false },
  { artistName: 'Sam', age: 25, deceased: false }
]

// Generic array (works with any type)
function getFirst<T>(arr: T[]): T | undefined {
  return arr[0]
}

// TYPING CLASSES ????

class Board {
  board: boolean[][] // property type

  constructor(n: number) { // parameter type
    this.board = []
    // logic
  }
}

function visitSpace(i: number, j: number): void {  // void = returns nothing
  this.board[i][j] = !this.board[i][j]
}

function hasBeenVisited(i: number, j: number): boolean {  // returns boolean
  return !!this.board[i][j]
}

// TYPING CALLBACKS

// Callback that takes two parameters and returns a number
type Callback = (acc: number, cur: number) => number

const reduce = (array: number[], callback: Callback): number => {
  let result = aray[0]
  for (let i = 1; i < array.length; i++) {
    result = callback(result, array[i])
  }

  return result
}

// MEMOIZATION PATTERN

// Cache with number keys and number values
const cache: Record<number, number> = {}

// Memoize function with generic Function type
function memoize(fn: Function): Function {
  const cache: Record<string, number> = {}

  return function(...args: number[]) {
    const key = JSON.stringify(args)
    if(key in cache) {
      return cache[key]
    }

    const result = fn(...args)
    cache[key] = result
    return result
  }
}

// WHEN TO USE WHAT

// Use 'type' for:
  // - Objects
  // - Unions (string | number)
  // - Primitives

// Use 'interface' for:
  // - Objects that might be extended
  // - (Both waork for objects, pick one and stick wit it)

// Use 'Record<K, V>' for:
  // - Objects with unknown keys but known types
  // - Cleaner than { [key:string]: value }

// Use generics (<T>) for:
  // - Functions/types that work with multiple types
  // - When the exact type should be determined by usage
