let result;

// result = 10;
// result = "10";

result = Number("10")                       // -> 10 is number
result = parseInt("10.5")                     // output -> 10
result = parseFloat("10.5");                  // output -> 10.5
result = parseInt("10a")                    // output -> 10
result = parseInt("a10")                    // output -> NaN (Not a number)

result = isNaN("10a")                       // -> true
result = isNaN("10")                       // -> false

let number = 15.123456789;
result = number.toPrecision(5);                   //return value -> string and five step (bes basamak) ve yuvarlar
result = number.toFixed(5);                      // output -> 15.12346
result = Math.round(2.4);                       // output -> 2              round en yakin sayiya yuvarlar
result = Math.round(2.6);                       // output -> 3

result = Math.ceil(2.1)                           // output -> 3 her turlu yukariya yuvarlar      
result = Math.floor(2.9)                           // output -> 2 her turlu asagiya yuvarlar      


result = Math.sqrt(25);                                // output -> 5 karekok alir
result = Math.pow(2, 3)                                // output -> 2^3 = 8  
result = Math.abs(-10);                                 // output -> 10 mutlak deger alir
result = Math.min(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);        // output -> 0
result = Math.max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);        // output -> 9
result = Math.floor(Math.random() * 100) + 50;                // 50 ile 150 arasinda random sayi atar


console.log(typeof (result))
console.log(result);