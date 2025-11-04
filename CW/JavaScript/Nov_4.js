let arr = [10, "20", "hello", 30, "40", "abc", 50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];

  // Convert string numbers to number before checking
  let num = Number(value);

  // Check if it's a valid number (not NaN)
  if (!isNaN(num) && String(value).length > 0) {
    sum += num;
  }
}
console.log("Array:", arr);
console.log("Sum:", sum);
// Using destructuring to extract values
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest); 
console.log("Array:", arr);
console.log("Sum:", sum);


//functions

extendedHello("Alice");
extendedHello("Bob", "Hi");
extendedHello("Charlie", "Greetings", "25");
function extendedHello(name = "Guest", greeting = "Hello", age = "10") {
    console.log(`${greeting}, ${name}! You are ${age} years old.`);
}   


var vals = [];
for (var i = 0; i <= 5; i++) {
    vals.push(() => i);
}
console.log(vals.map(i =>i())); // [0, 1, 2, 3, 4, 5]

//shortend assignment
var x1 = {}
x1.x=20;
x1.y= 30;
x1
console.log(x1); // undefined

//super
let foo ={
    toString(){
       super.toString()+'with foo!';
    }
};
foo.toString();
console.log(foo.toString()); // [object Object]with foo

//symbols

let o ={
    [Symbol ('Hellllo')] : 7,
    'str': 6
};
Object.getOwnPropertyNames(o);
console.log(Object.getOwnPropertyNames(o)); // [ 'str' ]
Object.getOwnPropertySymbols(o);
console.log(Object.getOwnPropertySymbols(o)); // [ Symbol(Hellllo) ]
JSON.stringify(o);
console.log(JSON.stringify(o)); // {"str":6}


// //classes
// class Jedi {
//     constructor(){
//         this.forceIsDark = false;
//     }
//     toString(){
//         return (this.forceIsDark) ? "John":

//static methods
class Util{
    static inc(x){
        return x+1;
    }
    static dec(x){
        return x-1;
    }
}
console.log(Util.inc(5)); // 6
console.log(Util.dec(5)); // 4


//looping scopes
let valss = [];
for (var j = 0; j < 5; j += 1) {  // changed let to var
    valss.push(() => j);
}

console.log(valss.map(j =>j())); // [0, 1, 2, 3, 4, 5]

const obj = { par: 1 };

function freeze(o) {
  "use strict";
  Object.freeze(o);
  try {
    obj.par = 2; // will throw
  } catch (err) {
    console.log("Error:", err.message);
  }
  console.log(obj.par); // still 1
}

freeze(obj);

//shorthend  assignment
let evenSet = [];
let oddSet = [];

for (let x = 1; x <= 20; x++) {
    let y = 2 * x * x - 5 * x + 3;

    // Create the object
    let point = { x: x, y: y };

    if (x % 2 === 0) {
        evenSet.push(point);
    } else {
        oddSet.push(point);
    }
}
console.log("Even Set:", evenSet);
console.log("Odd Set:", oddSet);


//symblols
var s1 = Symbol.for("s"); 
var s2 = Symbol.for("s");

console.log(s1 === s2); // false

//classes
class Jedi { 
    constructor() {
        this.forceIsDark = false;
    }
    toString() {
        return (this.forceIsDark ? "Join " :'Fear is the path to ') + 'the dark side.';
    }
}
class Sith extends Jedi {
    constructor() {
        super();
        this.forceIsDark = true;
    }
    toString() {
        return super.toString();
    }
}
let jedi = new Jedi();
console.log(jedi.toString());
// Fear is the path to the dark side.
let sith = new Sith();
console.log(sith.toString());
// Join the dark side.

//useless loops with in
var a = ['a', 'b', 'c', 'd', 'e'];
for (var i in a) {
    if(a.hasOwnProperty(i)){
        console.log(i, a[i]);
    }
}
//useless loops with of
for (var i of a) {
    console.log(i);
}



function* generatorFunction(n) {
    return{
        [sumbol.iterator]() {
            let i = 0;
            return {
                next() {
                    return {
                        done: (i >= n) ? true : false,
                        value: i++
                    };
                }
            };
        }
    }
    }
    let valus = [];

    for (var x = 0; x < 4; x += 1) {
      valus.push(() => x);
    }
    
    console.log(vals.map(x => x()));
    
    var s1 = Symbol('test');
    var s2 = Symbol('test');
    console.log(s1 == s2); // true
    console.log("-----------------------------------------------------")
    const js_obj = {
        name: "Sriram", age: 60, salary: 600,
        [Symbol.toPrimitive](hint) {
            if (hint === "string") return "Hint: Guess over 50";
            if (hint === "number") return Number(this.salary);
            return JSON.stringify(this);   // default
        }
    }
     
    console.log(js_obj);          // prints object normally
    console.log(String(js_obj));  // capital S → triggers "string" hint
    
    console.log("-----------------------------------------------------")
    
    //class and parameter
     
    // Base Character Class
    class Character {
        constructor(name, power, side) {
            this.name = name;
            this.power = power;
            this.side = side;
        }
     
        toString() {
            return `${this.name} belongs to ${this.side} with power: ${this.power}`;
        }
    }
    //EXTENDING THE CLASS
    // Hero Class
    class Hero extends Character {
        constructor(name, power) {
            super(name, power, "Avengers"); // sending custom side to base class
        }
     
        toString() {
            return `${this.name} is a Hero of the ${this.side} with power: ${this.power}`;
        }
    }
     
    // Villain Class
    class Villain extends Character {
        constructor(name, power) {
            super(name, power, "Villains of the Avengers");
        }
     
        toString() {
            return `${this.name} is a Villain from the ${this.side} with power: ${this.power}`;
        }
    }
     
    // Creating Avengers & Villains
    const ironMan = new Hero("Iron Man", "Genius & Armor Suit");
    const thor = new Hero("Thor", "Thunder God");
    const thanos = new Villain("Thanos", "Infinity Gauntlet");
    const loki = new Villain("Loki", "Magic & Trickery");
     
    // Output
    console.log(ironMan.toString());
    console.log(thor.toString());
    console.log(thanos.toString());
    console.log(loki.toString());
    
    console.log("-----------------------------------------------------")
    
    var ar=['a','b','c']; for (var i in arr){ if (arr.hasOwnProperty(i)){ console.log(i); }}
    console.log("------------------")
    for (var i of ar) { console.log(i); }
    console.log([..."abd"]); // ["a", "b", "d"]
    
    
    
    console.log("-----------------------------------------------------")
    // THE ITERATOR PROTOCOL
    console.log("Iterator Protocol Example:");
    function gen(n){
      return {
        [Symbol.iterator]() {
          let i = 0;
          return {
            next() {
              return {
                done: (i > n) ? true : false,
                value: i++
              };
            }
          };
        }
      };
    }
    
    for (let x of gen(3)) {
        console.log(x);
    }
    // Create the iterator
    let it = gen(3)[Symbol.iterator]();
    
    // Log each next() call
    console.log(it.next()); // { value: 0, done: false }
    console.log(it.next()); // { value: 1, done: false }
    console.log(it.next()); // { value: 2, done: false }
    console.log(it.next()); // { value: 3, done: false }
    console.log(it.next()); // { value: 4, done: true }
    
    console.log("-----------------------------------------------------")
    
    const rating = [5, 4, 5];
    let sum1 = 0;
    
    const asyncSumFunction = async (a, b) => a + b;
    const syncSumFunction = (a, b) => a + b;
    
    rating.forEach(async (rating) => {
      sum1 = await asyncSumFunction(sum1, rating);
    });
    
    console.log(sum1);
    console.log("-----------------------------------------------------")
    let arrayLike = {
      0: "zero",
      1: "one",
      length: 2  // fixed typo: 'lenghth' → 'length'
    };
    
    // Convert to array
    const arra = Array.from(arrayLike);
    
    console.log(arra);
    
    console.log("-----------------------------------------------------")
    
    const arr1 = ['a', 'b', 'c'];
    
    // 1️⃣ Keys iterator
    const keysIterator = arr1.keys();
    console.log("Keys iterator:", keysIterator);          // Array Iterator {}
    console.log("Keys array:", [...keysIterator]);        // [0, 1, 2]
    
    // 2️⃣ Values iterator
    const valuesIterator = arr1.values();
    console.log("Values iterator:", valuesIterator);      // Array Iterator {}
    console.log("Values array:", [...valuesIterator]);    // ['a', 'b', 'c']
    
    // 3️⃣ Entries iterator
    const entriesIterator = arr1.entries();
    console.log("Entries iterator:", entriesIterator);    // Array Iterator {}
    console.log("Entries array:", Array.from(entriesIterator)); // [[0,'a'], [1,'b'], [2,'c']]
    
    const arr2 = [4, 100, 7];
    const test = arr2.find(x => x > 5);
    console.log(test);
    console.log("-----------------------------------------------------")
    
    let k = { a: 1 };
    Object.assign(k, { b: 2 });
    console.log(k);
    console.log("-----------------------------------------------------")
    // Map Example
    var m = new Map([
      [1, 'first'],
      [{}, 'second'] // second key is an object
    ]);
    m.set(x => x + 1, 'third')// third key is a function
    .set({}, 'fourth'); // fourth key is another object
    
    console.log(m);
    console.log("---------------------")
    
    let m1 = new Map([...'abcd'].map(x => [x, x + x]));
    
    // Convert Map to arrays for inspection
    console.log(JSON.stringify([...m1]));        // All entries
    console.log(JSON.stringify([...m1.keys()])); // Keys only
    console.log(JSON.stringify([...m1.values()])); // Values only
    console.log(JSON.stringify([...m1.entries()])); // Entries (same as [...m1])
    
    
    console.log("-----------------------------------------------------")
    // Set Example
    let s = new Set(['red', 'blue']);
    
    // Add elements
    s.add('yellow');
    s.add('red'); // duplicate, ignored
    
    // Check size
    console.log(s.size); // ?
    
    // Check if it has 'blue'
    console.log(s.has('blue')); // ?
    
    // Delete 'blue'
    s.delete('blue');
    
    // Check size again
    console.log(s.size); // ?
    
    // Inspect set
    console.log(s);
    
    // Convert to array
    console.log([...s]);
    
    
    console.log("-----------------------------------------------------")
    // Generator Example
    function* genFour() {
        yield 1;
        yield 2;
        yield 3;
        return 4;
    }
    
    let four = genFour();
    
    console.log(four.next()); // { value: 1, done: false }
    console.log(four.next()); // { value: 2, done: false }
    console.log(four.next()); // { value: 3, done: false }
    console.log(four.next()); // { value: 4, done: true }
    console.log(four.next()); // { value: undefined, done: true }
    
    
    console.log("-----------------------------------------------------")
    function* flatter(arr2) {
        for (let y of arr2) {
            if (y instanceof Array) {
                // Recursively yield all elements of nested array
                yield* flatter(y);
            } else {
                yield y;
            }
        }
    }
    
    let t = flatter([1, 2, [3, 4]]);
    
    console.log(t.next()); // { value: 1, done: false }
    console.log(t.next()); // { value: 2, done: false }
    console.log(t.next()); // { value: 3, done: false }
    console.log(t.next()); // { value: 4, done: false }
    console.log(t.next()); // { value: undefined, done: true }
    for (let v of flatter([1, 2, [3, 4]])) {
        console.log(v);
    }
    
    console.log("-----------------------------------------------------")
    
    let reverse = ([p, ...y]) => (y.length > 0) ? [...reverse(y), p] : [p];
    reverse([1, 2, 3, 4, 5, 6]);
    
    let [p, ...y] = [1, 2, 3, 4, 5, 6];
    
    console.log(p); // 1
    console.log(y); // [2, 3, 4, 5, 6]
    
    console.log("-----------------------------------------------------")