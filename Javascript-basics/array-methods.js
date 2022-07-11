

// let studentsArray = ['x', 'y', 'z']
let result;
// result = studentsArray.length;      // output -> 3

//array to string

// result = studentsArray.toString();        // output -> x,y,z
// result = studentsArray.join(" ");         // output -> x y z 
// result = studentsArray.join("-");         // output -> x-y-z

//delete element (eleman silme)

// result = studentsArray.pop();         //(last element) son eleman silinir ve silinen eleman geri dondurulur  output -> z
// console.log(studentsArray);           // output -> ['x','y'] 
// result = studentsArray.shift();         // (first element)ilk eleman silinir ve silinen eleman geri dondurulur

//add element (eleman ekleme)

// result = studentsArray.push("q");       //dizinin sonuna eleman ekler   output -> [ 'x', 'y', 'z', 'q' ] (geriye eleman sayisi doner)
// result=studentsArray.unshift("q");          //dizinin basina eleman ekler output -> [ 'q', 'x', 'y', 'z' ] (geriye eleman sayisi doner)

let arrayX = ['a', 'b']
let arrayY = ['c', 'd']
let arrayZ = ['e']

// let result = arrayX.concat(arrayY, arrayZ);         // output -> [ 'a', 'b', 'c', 'd', 'e' ] (dizileri birlestirir)
// result = arrayX.splice(0, 0, arrayY);               // output -> []         geriye silinen elemani dondurur 
// console.log(arrayX)                        // output -> [ [ 'c', 'd' ], 'a', 'b' ]     arrayX'in uzerine arrayY'yi basa dizi olarak ekledi
// result = arrayX.splice(0, 0, 'x', 'y', 'z');    //output -> [ 'x', 'y', 'z', 'a', 'b' ] arrayX'in basina eleman ekledik
// result=arrayX.splice(0,1,'x');          // output -> [ 'x', 'b' ]  ilk elemani sildi ve x'i ekledi


result = arrayX.splice(0, 1)           // output -> ['b']       0. indexten basla bir tane sil

console.log(arrayX)
console.log();      
