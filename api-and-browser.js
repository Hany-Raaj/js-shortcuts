// JSON
const person = {
    name: 'Abdul',
    age: 33
}
console.log(JSON.stringify(person));

// API
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));


// Local Storage
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsedPerson = JSON.parse(storedPerson);
console.log(parsedPerson.age);