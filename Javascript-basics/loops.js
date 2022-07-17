
let total = 0;

for (let i = 0; i <= 10; i++) {
    total += i;
}

console.log(total);     // output -> 55



let numbers = [1, 4, 5, 8, 3, 2, 12, 36, 43];
let total2 = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    total2 += numbers[i];
}
console.log(total2);         //output -> 114




for (let i in numbers) {         // in keywordu numbers dizisindeki index numaralarını yazdırır
    console.log(i);
    // total += numbers[i];
}
console.log(total);


for (let i of numbers) [        // of keywordu numbers dizisi icindeki elemanları alir index'i degil
    console.log(i)
]

let user = {
    "name": "Fatih Cihan",
    "userName": "fatihcihan",
    "password": "12345",
    "email": "info@fatihcihan.com"
}

for(let key in user){
    console.log(user[key]);         //  butun keylerin value bilgilerini verir. 
}                                   