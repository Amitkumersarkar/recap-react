// object to JSON and json to object conversion
// stringify used when object to json converting
// parse used when json to object conversion

const student = {
    name: 'amit sarkar',
    age: 24,
    student: true,
    profession: ['jr software developer', 25000,]
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// fetch 

// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));

// keys and values

const keys = Object.keys(student);
const values = Object.values(student);

// loop in array

const numbers = [10, 20, 40, 65, 32];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// we used for of on array like objects
// loop on an object using for in

// add or remove an array

// array of objects
const products = [
    { name: 'laptop', price: '1400 Usd', brand: 'MacBook pro', color: 'gray' },
    { name: 'laptop', price: '1000 Usd', brand: 'lenovo', color: 'black' },
    { name: 'phone', price: '1100 Usd', brand: 'Iphone', color: 'gray' },
    { name: 'watch', price: '900 Usd', brand: 'titan', color: 'silver' }

];

const newProduct = { name: 'webcam', price: 1000, brand: 'xiaomi' };

//copy products array and then add newProduct
// ... means copy something
const newProducts = [...products, newProduct];


// create an new array without one specific item
// remove phone means creates a new array without the laptop

const remaining = products.filter(product => product.name !== 'laptop');
