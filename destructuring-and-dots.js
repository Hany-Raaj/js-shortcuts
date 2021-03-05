const numbers = [52, 53, 45, 65, 434, 765];
// destructuring
const newNumbers = [...numbers, 98];
console.log(newNumbers);

// const x = numbers[0];
// const y = numbers[1];
const [x, y] = numbers
console.log(x, y);

function boxify(num){
    return [num, num + 5];
}
const [boxed1, boxed2, boxed3] = boxify(10);
console.log('box1',boxed1, 'box2');

// object destructuring
const {name, age} = {name: 'Rahim', age: 25}
console.log(name, age);
