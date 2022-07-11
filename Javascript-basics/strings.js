let name = "x";
let surname = "y";
let age = 20;
let country = "Turkey";

//let message = 'My name ' + name + " and surname " + surname + "'description'";   

let message = `My name ${name} and surname ${surname} and age ${age} and i live in ${country}`;   // backtick -> alt gr + ,
// console.log(message);

// ternary operators

let isSuccess = false;
(isSuccess == true) ? "Yes" : "No";         // true -> output = Yes     false -> output = No
// console.log(isSuccess); 


// String Methods 

let description = "Bun is a new JavaScript runtime with a native bundler, transpiler, task runner and npm client built-in.";

let result;


result = description.toLocaleLowerCase();    // converts description to lowercase (string'i kucuk harfe cevirir)
result = description.toUpperCase();         // converts description to uppercase (string'i buyuk harfe cevirir)
result = description.length;                // How many characters is the description? (aciklamada kac karakter var?) -> 103

result = description[0];                    // index[0] -> B  index[1] -> U
result = description.slice(13);               // output -> "JavaScript runtime with a native..." (bastan 13 karakteri almadi)
result = description.slice(13, 23);            // output -> "JavaScript" (13 karakter ile 23 karakter arasini aliyor)
result = description.slice(-10, -1);             //output -> "built-in" (eksi index ile baslar, sagdan sola dogru gider)


result = description.substring(0, 13);                  //output -> "Bun is a new" (0 ile 13 karakter arasindakileri alir)
result = description.replace("JavaScript", "JavaScript ES");   //output ->"Bun is a new JacaScript ES runtime...." (Ilki ile ikinciyi degistirir)
result = description.trim();                                //output -> Basta ve sondaki bosluk karakterler gider
result = description.trimEnd();                              //sondaki bosluklari siler
result = description.trimStart();                           //bastaki bosluklari siler
result = description.indexOf("JavaScript")                    //output -> 13  (13. index'te, yukarida da bulmustuk)

result = description.split(",");                                // virgul ile ayirir ve degerleri string array olarak doner
result = description.split(",")[0];                             //output -> Bun is a new JavaScript runtime with a native bundler
result = description.split(",")[1];                             //output -> transpiler
// console.log(typeof (result));                               // object

console.log(result);                                            // More at w3school...


