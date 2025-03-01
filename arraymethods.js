const products = [
    { name: 'laptop', price: '1400 Usd', brand: 'MacBook pro', color: 'gray' },
    { name: 'laptop', price: '1000 Usd', brand: 'lenovo', color: 'black' },
    { name: 'laptop', price: '1100 Usd', brand: 'Asus ZenBook', color: 'gray' },
    { name: 'laptop', price: '900 Usd', brand: 'Acer Nitro', color: 'silver' }

];

// array of objects
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
const names = products.map(product => product.name);
// console.log(names);
// console.log(brands);
// console.log(prices);

// if nothing is returned then we can used foreach
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

// multiline forEach 

// products.forEach(product => {

// });

// filter method

const cheap = products.filter(product => product.price <= 2000);
// console.log(cheap);

const specificName = products.filter(p => p.name.includes('l'));
// console.log(specificName);

// Find method

const special = products.find(p => p.name.includes('s'));
console.log(special);