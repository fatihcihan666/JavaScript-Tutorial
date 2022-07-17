var name = "Fatih";             //global scope
const country = "Turkey";       // uygulama boyunca degistirilmemesini istedigimiz degiskenleri const ile tanimlayabiliriz (sabit)

function print() {
    console.log(name)
}

// print();        // output -> Fatih
// var keywordu ile olusturdugumuz degiskene fonksiyonun disindan ulasabiliyoruz. (global scope olarak degerlendirilir)

var surname = "Cihan";
function print2() {
    var surname = "Bozok";
    var age = 20;
    console.log("function scope:" + surname, age)
}

print2();                        // output -> Bozok
// console.log(surname);       // output -> Cihan
// print2 fonksiyonu bize Bozok degerini getirdi cunku farkli bi scope icersinde calisti
// yani fonksiyon once kendi kapsamindaki surname degiskenini alir bulamazsa global scope'da arar
// console.log(age);           // output -> age is not defined
// age degiskenine deger atayip print2 fonksiyonunu cagirirsak bi problem yok ancak console log'da yazdirmaya calisirsak hata aliriz
// cunku age degiskeni tanimlanmamaistir, age degiskenine global scope'da ulasmamiz gerekiyor, print2 fonksiyonu daha dar kapsamli


if (true) {
    var name = "Onur";
    console.log(name);      // output -> Onur
}
console.log(name);          // output -> Onur
// ekrana iki kere onur yazar
// if blogu icine tanimlanan degiskenler yine global scope'da tanimlanmis oluyor (if-for vs.)
// yani fonksiyonlar kendi scope alanlarini olustururken blok icerisinde yeni bir scope olusmaz (let, const)




if (true) {
    let gender = "Male";
    let name = "Ekrem";
    console.log(gender);     // output -> Male   
    console.log(name);      // output -> Ekrem
}
//  console.log(gender);    // output -> error (gender is not defined) cunku block icerisinde tanimlandigi icin (let)
console.log(name);          // otuput ->Onur
// block scope kullanmak istersek orada let kullanabiliriz anca blogun disina cikince global scope calisir.
// tum cabamiz fonksiyon gibi davranan bloklar olusturabilmek aslinda, bu durumlari da let ve const ile yapabiliyoruz


// country = "England";
// console.log(country);       
// error -> "assignment to constant variable" yani sabit bi degiskene tekrar deger atayamayiz