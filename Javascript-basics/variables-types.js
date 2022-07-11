// Variables (Degiskenler)

var salaryX = 4000;
var salaryZ = 5000;
var salaryIncrease = 0.3;

console.log(salaryX + (salaryX * salaryIncrease))
console.log(salaryZ + (salaryZ * salaryIncrease))


//Variables Types (Degisken Turleri)

var productName = "iphone 13";
let productPrice = 15000;

console.log(typeof (productName))      // typeof -> string or number?

let number1 = "10";
let number2 = "20";

// Type Conversion (Tur Donusumu)

var result = (Number(number1) + Number(number2));      //string to int
console.log(result);

let number3 = 10;
let number4 = 20;

var stringResult = number3.toString() + number4.toString();     //int to string
console.log(stringResult);

let name = "X";
let surname = "Y";
console.log(name + " " + surname);

let examPuan = 70;
let isSuccess = (examPuan >= 50)        //boolean type
console.log(isSuccess);

let age;

console.log(age);           // undefined (deger atamasi yapilmadigi icin)
console.log(typeof (age));  // undefined

age == undefined

age = "";

console.log(age);
console.log(typeof(age));      //string (burada age degiskenine cift tirnakla deger atadik cunku)