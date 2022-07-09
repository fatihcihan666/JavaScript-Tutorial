/**
 *  1)Bir sayinin 10-50 arasinda olup olmadigini kontrol edin.
 *  2)Bir sayinin pozitif tek sayi olup olmadigini kontrol edin
 *  3)x,y ve z sayilarini buyukluk karsilastirmasi yapiniz
 *  4)2 vize (%40) ve 1 final notuna gore hesaplanan ortalama icin;
 *      a)Eger ortalama 50 ve ustundeyse gecti degilse kaldi
 *      b)Gecmek icin ortalama 50 bile olsa final notu en az 50 olmalidir.
 *      c) Finalinden 70 alindiginda ortalama 50'nin altinda olsa bile dersten gecsin
 */



//1)Bir sayinin 10-50 arasinda olup olmadigini kontrol edin.

let number1 = 9;

let upperNumber = 50;
let lowerNumber = 10;

if ((number1 >= lowerNumber) && (number1 <= upperNumber)) {
    console.log("Between two numbers")
} else {
    console.log("Not between two numbers")
}


//2)Bir sayinin pozitif tek sayi olup olmadigini kontrol edin

let number = -1;

if ((number % 2 == 1) && (number > 0)) {
    console.log("number is odd and positive")
}


//3)x,y ve z sayilarini buyukluk karsilastirmasi yapiniz


let x = 10, y = 40, z = 30;

if (x > y && x > z) {
    console.log("Biggest number is x")
} else if (y > x && y > z) {
    console.log("Biggest number is y")
} else if (z > x && z > y) {
    console.log("Biggest number is z")
}else{
    console.log("Numbers are equal")
}


/*
4)
2 vize (%40) ve 1 final notuna gore hesaplanan ortalama icin;
*      a)Eger ortalama 50 ve ustundeyse gecti degilse kaldi
*      b)Gecmek icin ortalama 50 bile olsa final notu en az 50 olmalidir.
*      c) Finalinden 70 alindiginda ortalama 50'nin altinda olsa bile dersten gecsin
*/

let visa1 = 10;
let visa2 = 10;
let final = 70;

let average = ((visa1 * 40) / 100) + ((visa2 * 40) / 100) + ((final * 60) / 100);
// let average = (((visa1 + visa2) / 2) * 0.4) + (final * 0.6)
console.log(average);

if ((average >= 50 && final >= 70)) {
    console.log("Success")
} else {
    console.log("Failed")
}
