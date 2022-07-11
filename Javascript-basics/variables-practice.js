/*
    student 1;
        name            : X
        Birthday        : 2000
        Math Score      :70, 70, 80

    
     student 2;
        name            : Y
        Birthday        : 2001
        Math Score      :40, 40, 50

    1)Ogrenci bilgilerini degiskende sakla
    2)Yas bilgilerini degiskende sakla
    3)Ders ortalama notunu degiskende sakla
    4)50 gecme notuna gore basari durumlarini degiskende sakla
*/


// 1)
let student1Name = "X";
let student1Birthday = 2000;
let student1MathScore1 = 70;
let student1MathScore2 = 70;
let student1MathScore3 = 80;

let student2Name = "Y";
let student2Birthday = 2001;
let student2MathScore1 = 40;
let student2MathScore2 = 40;
let student2MathScore3 = 50;


// 2)
let currentYear = new Date().getFullYear();

let student1Age = currentYear - student1Birthday;
console.log(student1Age);
let student2Age = currentYear - student2Birthday;
console.log(student2Age);

// 3)
let student1AverageMathScore = parseInt((student1MathScore1 + student1MathScore2 + student1MathScore3) / 3);
// console.log(student1AverageMathScore);

let student2AverageMathScore = parseInt((student2MathScore1 + student2MathScore2 + student2MathScore3) / 3);
// console.log(student2AverageMathScore);


// 4)
if (student1AverageMathScore > 50) {
    var isSuccess = true;
    // console.log(isSuccess);
} else {
    isSuccess = false;
    // console.log(isSuccess);
}


if (student2AverageMathScore > 50) {
    var isSuccess = true;
    // console.log(isSuccess);
} else {
    isSuccess = false;
    // console.log(isSuccess);
}

