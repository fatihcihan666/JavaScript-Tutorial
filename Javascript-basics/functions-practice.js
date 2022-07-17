//1) Kendisine gonderilen kelimeyi belirtilen kez ekranda yazan fonksiyon yazin

function printWord(word, piece) {
    for (let i = 0; i < piece; i++) {
        console.log(word);
    }
}
// printWord("hello world",6);



//2) Dikdortgenin alan ve cevresini hesaplayan fonksiyon yazin

function calculateAreaAndPerimeter(shortEdge, longEdge) {
    let area = shortEdge * longEdge;
    let perimeter = (shortEdge + longEdge) * 2;
    return `Dikdortgenin alani: ${area}, cevresi: ${perimeter}`
}
// let result = calculateAreaAndPerimeter(4, 5);
// let result = calculateAreaAndPerimeter(6, 12);
// console.log(result);


//3) Yazı tura uygulamasını fonksiyon kullanarak yazin

function headsOrTails() {
    let random = (Math.random() * 100).toFixed()
    console.log(random);
    if (random <= 50) {
        console.log(random, 'Head')
    } else {
        console.log(random, 'Tail');
    }
}
// headsOrTails();


//4) Kendisine gonderilen bir sayinin tam bolenlerini dizi seklinde donduren fonksiyonu yazin

function getDivisor(number) {           // divisor -> tam bolen
    let numbers = [];
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            numbers.push(i);
        }
    }
    return numbers;
}

let result1 = getDivisor(10);     //2 - 5
let result2 = getDivisor(15);     //3 - 5
// console.log(result1);       //output -> [2,5]
// console.log(result2);       //output -> [3,5]



//5) Degisken sayida parametre alan toplam isminde bir fonksiyon tanimlayin

function total(x, y, z) {
    return x + y + z;
}
console.log(total(2, 5));       //output -> NaN     cunku 2 + 5 + undefined = NaN



function total2() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {    //arguments objesi parametreleri bir key ve value seklinde saklar
        result += arguments[i];
    }
    return result;
}

console.log(total2(1,2,3,4));       // output -> 10
console.log(total2(1,2));       // output -> 3



