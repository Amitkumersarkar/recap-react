// spread operator
const numbers = [10, 20, 1986804513, 40];
const newNumbers = [...numbers];
numbers.push(100);

// create a new array from an older array and add an element
// adding new element
const currentNumbers = [...numbers, 50];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);