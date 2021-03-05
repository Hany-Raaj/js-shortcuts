// const money = 100;
// let food;
// if(money > 50){
//     food = "Biriyani"
// }
// else{
//     food = "Alur vorta"
// }

// let food = money > 90 ? "Biriyani" : "Alur Vorta";
// console.log(food);

// // function shortcut
// active ? displayUser() : hideUser();

// active && displayUser();
// active || displayUser();


// string to number
const num = +'45';
console.log(num);


// number to string
const numToString = 25 + "";
console.log(numToString);

// default parameter
function add(num1, num2 = 5){
    return num1 + num2
}

add(45);