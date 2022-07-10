let now = new Date();

result = now;

//Get Methods

result = now.getDate();             // output -> 10 (day)
result = now.getDay();              // 0 -> sunday .. .. .. .. 6 -> saturday
result = now.getFullYear();         // output -> 2022 (year)
result = now.getHours();            //output -> 14 
result = now.getTime();             // output -> 1657450852373

//Set Methods

// now.setFullYear(2025)               //output -> 2025 (year)
now.setMonth(8);                    // output -> 2025-09          (8. index -> 9)
now.setDate(15);                    // output -> 2025-09-15

result = now;

let birthDay = new Date(1993, 5, 3);

result = now.getFullYear() - birthDay.getFullYear();            //output -> 29
// result = now - birthDay;                                        // output -> 924185388191 (msec)

let msec = now - birthDay;
let second = msec / 1000
let minute = second / 60;
let hour = minute / 60;
let day = hour / 24;


result = hour;


console.log(result);
console.log(typeof (result));