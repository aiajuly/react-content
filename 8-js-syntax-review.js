// reviewing arrow functons returning rules
const a = function() {
    return 1 + 2
}

const b = () => {
    return 1 + 2
}

const c = () => (
    1 + 2
)

const e = () => 1 + 2
// all of these do the same thing



// forEach() is an array method that accepts a callback function, and then calls the function once per element in the array
array.forEach((element) => {
    // do something
});



// map is an array method that creates a new array with the results of calling a callback on every element in the array
// it runs the callback and returns a value
array.map((element) => {
    // do something and return it
});



// In JavaScript, the spread syntax, represented by three dots (...), is a versatile feature that allows you to spread elements from arrays, strings, or objects into into individual elements
const nums1 = [1,2,3]
const nums2 = [3,5,6]
const nums3 = [...nums1, ...nums2] //[1, 2, 3, 3, 5, 6]



// In JavaScript, the rest parameter is indicated by three dots (...) and allows a function to accept an indefinite number of arguments as an array. The rest parameter collects the remaining arguments passed to a function into a single array parameter. This is particularly useful when you want to create functions that can take a variable number of arguments
function sum(...numbers) {
    console.log(numbers)
  }



// Destructuring in JavaScript is a feature that allows you to extract values from arrays or properties from objects and assign them to variables in a more concise and readable way. It simplifies the process of extracting data from complex structures.

//arrays destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// objects destructuring
const person = { name: 'John', age: 30, city: 'New York' };
const { name, age } = person;

console.log(name); // Output: John
console.log(age); // Output: 30

// assigning default values when destructuring
const person2 = { name: 'Alice' };
const { name2, age2 = 25 } = person;

console.log(name2); // Output: Alice
console.log(age2); // Output: 25 (default value)

// Renaming variables during destructuring
const person3 = { firstName: 'Bob', lastName: 'Smith' };
const { firstName: first3, lastName: last3 } = person;

console.log(first3); // Output: Bob
console.log(last3); // Output: Smith


