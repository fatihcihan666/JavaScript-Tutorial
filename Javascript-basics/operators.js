//1) Arithmetic Operators   (Aritmetik Operatorler)

let result;
let x = 10, y = 20, z = 30;

result = x + y;
result = x - y;
result = x * y;
result = x / y;
result = y % x;     // % -> get a mod (kalan) odd or even


result = x++;
console.log(result, 'result');          // result = 10   (x result icine atilir daha sonra artirilir)
console.log(x, 'x');                    // x = 11   

result = ++x;
console.log(result, 'result');             // result = 11  (x once artirilir daha sonra result icine atilir)
console.log(x, 'x');                       // x = 11

//2) Assignment Operators   (Atama Operatorleri)

result = x;
result += x;                            // equal result = result + x;   result=20;
result -= x;                           // equal result = result - x;   result=0;
result *= x;                          // equal result = result * x;   result=100;
result /= x;                         // equal result = result / x;   result=1;
console.log(result);

//3)Comparison Operators (Karsilastirma Operatorleri)

result = (x == y)                   // result is boolean type --> result = false
result = (x != y)                  // result = true

result = (3 == "3")                       //result = true   -> only value check
result = (3 === "3")                  //result = false  -> first number, second string (value and type check)

result = (x >= y)                 // result = false -> x=10 y=20
result = (x <= y)                //result = true  -> x=10 y=20



//Logical Operators     (Mantıksal Operatorler)

let userName = "xyz";
let password = 123;

if (userName == "xyz") {
    if (password == 123)
        console.log("Logged into the application")
    else {
        console.log("Password is incorrect")
    }
} else {
    console.log("Username is incorrect")
}




// If - Else continue

/**
 *  age >=18
 *  degree == "high school" or degree == "university" 
 */

let degree = "university"
let age = 18;
if ((age >= 18) && (degree == "university" || degree=="high school")) {
    console.log("Can get a driver's license");
} else {
    console.log("Can't get a driver's license")
}

 // and
 // true & true -> true
 // true & false -> false

 // or
 // true | true -> true
 // true | false -> true
 // false | false -> false


