// let product1 = "iphone 12";
// let product2 = "iphone 13";
// let product3 = "iphone 13 Pro";

let products = ['iphone 12', 'iphone 13', 'iphone 13 pro']
let prices = [9000, 10000, 12000]
let colors = ['gold', 'black', 'white']

// let result = `1. product name : ${products[0]} price : ${prices[0]} color: ${colors[0]}`;

let product1 = ["iphone 11", 9000, "gold"];

let product2 = [];
product2[0] = 'iphone 12';
product2[1] = 10000;
product2[2] = 'black';

let product3 = [
    "iphone 12 pro",
    13000,
    ['red', 'black', 'white']
];

console.log(product3);                      // output -> [ 'iphone 12 pro', 13000, [ 'red', 'black', 'white' ] ]
console.log(product3[2])                    // output -> [ 'red', 'black', 'white' ]    2. index de bir array
console.log(typeof (product3[2]))           // output -> object
console.log(product3[2][1])                 // output -> black

let description = "Lorem ipsum dolor sit amet consectetur adipisicing.";
console.log(description.split(" "));    //output -> ['Lorem','ipsum','dolor','sit','amet','consectetur','adipisicing.'] -> array [6]
console.log(description.split(" ")[6]);     //output -> adipisicing

