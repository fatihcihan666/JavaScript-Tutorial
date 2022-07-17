let numbers = [1, 5, 7, 15, 3, 25, 12, 24];

//1) sayilar listesindeki her bir elemanın karesini yazdirin.

// for (let number of numbers) {
//     console.log(number*number);     // output -> 1, 25, 49, 225, 9, 625
// }

//2) sayilar listesindeki hangi sayilar 5'in katidir?

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 5 == 0) {
//         console.log(numbers[i]);        //output -> 5, 15, 25
//     }
// }


//3) sayilar listesindeki cift sayilarin toplamini bulunuz

// let total = 0;
// for (let i in numbers) {
//     if (numbers[i] % 2 == 0) {
//         total += numbers[i]
//     }
// }
// console.log(total);     // output -> 36



let products = ["iphone 12", "samsung s20", "iphone 13", "samsung s21"]

//4) urunler listesindeki tum urunleri buyuk harf ile yazdirin

// for (let product of products) {
//     console.log(product.toUpperCase());
// }

//5) urunler listesinde icinde samsung gecen kac urun vardir

// let piece = 0;
// for (let product of products) {
//     if (product.includes("samsung")) {
//         piece++;
//     }
// }
// console.log(piece);     // output -> 2


let students = [
    { 'name': 'fatih', 'surname': 'cihan', 'notes': [60, 70, 60] },
    { 'name': 'okan', 'surname': 'bozok', 'notes': [80, 70, 80] },
    { 'name': 'onur', 'surname': 'senelli', 'notes': [70, 70, 50] },
    { 'name': 'ekrem', 'surname': 'uysal', 'notes': [50, 80, 70] },
]

//7) ogrenciler listesindeki her ogrencinin not ortalamasini ve basari durumlarini yazdiriniz

for (let student of students) {
    let noteTotal = 0;
    let gradeAverage = 0;
    let piece = 0;
    for (let note of student.notes) {
        console.log(note);
        noteTotal += note;
        piece++;
    }
    gradeAverage = noteTotal / piece;
    console.log(`${student.name} isimli ogrencinin not ortalamasi: ${gradeAverage}`);
    if (gradeAverage >= 50)
        console.log("Success")
    else {
        console.log("Failed")
    }
}

//8) tum ogrencilerin not ortalamasi kactir

