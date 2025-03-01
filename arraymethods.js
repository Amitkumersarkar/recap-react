const products = [
    { name: 'laptop', price: '1400 Usd', brand: 'MacBook pro', color: 'gray' },
    { name: 'laptop', price: '1000 Usd', brand: 'lenovo', color: 'black' },
    { name: 'laptop', price: '1100 Usd', brand: 'Asus ZenBook', color: 'gray' },
    { name: 'laptop', price: '900 Usd', brand: 'Acer Nitro', color: 'silver' }

];

const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
const names = products.map(product => product.name);
console.log(names);
console.log(brands);
console.log(prices);