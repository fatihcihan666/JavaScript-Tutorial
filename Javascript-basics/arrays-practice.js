
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
 * Student 3: Z 2011 (70,60,80)
 */



//1)
let fruitsArray = ['apple', 'banana', 'strawberry', 'blackberry']


//2)
let numberOfElements = fruitsArray.length;
// console.log(numberOfElements);


//3)
let firstElement = fruitsArray[0];                   // apple
let lastElement = fruitsArray[numberOfElements - 1]; // blackberry   
// console.log(lastElement);

//4)
// console.log(fruitsArray.includes("apple"))      // output -> true
// console.log(fruitsArray.includes("orange"))      // output -> false

// console.log(fruitsArray.indexOf("apple"))       // output -> 0
// console.log(fruitsArray.indexOf("orange"))       // output -> -1

//5)

// fruitsArray[fruitsArray.length] = "cherry";
// console.log(fruitsArray)            // output -> [ 'apple', 'banana', 'strawberry', 'blackberry', 'cherry' ]


// fruitsArray.push("cherry")              // output -> [ 'apple', 'banana', 'strawberry', 'blackberry', 'cherry' ]
// console.log(fruitsArray)



