const numbers = [2, 4, 6, 3, 6];
const friends = ['rafiq', 'shofiq', 'kalam', 'jabbar'];
const products = [
    {id: 1, name: 'laptop', price: 23330},
    {id: 2, name: 'desktop', price: 20000},
    {id: 3, name: 'headphone', price: 1500}
];

// map
const names = products.map(product => product.name);
console.log(names);

// forEach
const price = products.map(product => console.log(product.price));

// filter
const cheaper = products.filter(pd => pd.price < 2000);
console.log(cheaper);

// remove an item using filter
const remaining = products.filter(pd => pd.id !=3);
console.log(remaining);

// find
const hasWatch = products.find(pd => pd.name === 'headphone');
console.log('hasWatch', hasWatch);