let numbers = [1, 2, 3, 5, 7];

function greeting(msg) {
    console.log(msg);
}

greeting("hello world");
greeting();     // output -> undefined (parametre gondermedik cunku)

function calculateAge(dateOfBirth) {
    return new Date().getFullYear() - dateOfBirth;
}

function calculateRetirement(dateOfBirth, name) {
    let age = calculateAge(dateOfBirth);
    let remainingYear = 65 - age;
    if (remainingYear > 0) {
        console.log(`${name} emekli olmaniza ${remainingYear} yil kaldi.`)
    } else {
        console.log('zaten emekli oldunuz')
    }
}

calculateRetirement(1990,"X");
calculateRetirement(1980,"Y");
calculateRetirement(1955,"Z");