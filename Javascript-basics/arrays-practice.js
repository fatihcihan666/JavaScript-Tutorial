
//1) create an array with apple, banana, strawberry, blackberry elements
//2) how many elements does the array have?
//3) what is the first and last element of the array
//4) is apple an element of array?
//5) add the cherry fruit to the end of the list
//6) delete the last two elements of the array
//7) store the following information in the array and calculate the age and grade point average of each student
/**
 * Student 1: X 2010 (70,60,80)
 * Student 2: Y 2012 (70,60,80)
 * Student 3: Z 2011 (40,50,40)
 */



//1)
let fruitsArray = ['apple', 'banana', 'strawberry', 'blackberry']


//2)
let numberOfElements = fruitsArray.length;
// console.log(numberOfElements);


//3)
let firstElement = fruitsArray[0];                   // apple
let lastElement = fruitsArray[numberOfElements - 1]; // blackberry   
console.log(lastElement);

//4)
// console.log(fruitsArray.includes("apple"))      // output -> true
// console.log(fruitsArray.includes("orange"))      // output -> false

// console.log(fruitsArray.indexOf("apple"))       // output -> 0
// console.log(fruitsArray.indexOf("orange"))       // output -> -1

//5)

fruitsArray[fruitsArray.length] = "cherry";
// console.log(fruitsArray)            // output -> [ 'apple', 'banana', 'strawberry', 'blackberry', 'cherry' ]


fruitsArray.push("cherry")              // output -> [ 'apple', 'banana', 'strawberry', 'blackberry', 'cherry' ]
// console.log(fruitsArray)

//6)
fruitsArray.splice(fruitsArray.length - 2,2)
// console.log(fruitsArray);



//7)
let student1 = [
    'X',
    2010,
    [70, 80, 90]
]
let student2 = [
    'Y',
    2012,
    [80, 80, 90]
]
let student3 = [
    'Z',
    2011,
    [60, 60, 90]
]

let studendts = [student1, student2, student3];

let ageX = new Date().getFullYear() - studendts[0][1]
console.log(ageX);      // output -> 12

let ageY = new Date().getFullYear() - studendts[1][1]
console.log(ageY);      //output -> 10

let ageZ = new Date().getFullYear() - studendts[2][1]
console.log(ageZ);      //output -> 11

let noteX = (studendts[0][2][0] + studendts[0][2][1] + studendts[0][2][2]) / 3;
console.log(noteX);     // output ->80

let noteY = (studendts[1][2][0] + studendts[1][2][1] + studendts[1][2][2]) / 3
console.log(noteY.toFixed());     // output ->83

let noteZ = (studendts[2][2][0] + studendts[2][2][1] + studendts[2][2][2]) / 3
console.log(noteZ);     // output ->70