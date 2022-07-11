

let url = "https://www.google.com/";
let description = "Lorem ipsum dolor sit, amet consectetur adipisicing.";

//1) How many characters is the url? (url kac karakterlidir?)

let characterNumber = url.length;   // output -> 23
// console.log(characterNumber);

//2) How many words does the description consist of? (aciklama kac kelimeden olusmaktadir?)

let wordCount = description.split(" ").length;
console.log(wordCount);             // output -> 7


//3) Does the url start with https? (url https ile mi basliyor?)

let isStartWithHttp = url.split(":", 1);
if (isStartWithHttp == "https") {
    console.log(isStartWithHttp, "Yes start with http")
} else {
    console.log(isStartWithHttp, "No doesn't start with http")
}

let isStartWithHttp2 = url.startsWith("https");
if (isStartWithHttp2) {
    console.log(isStartWithHttp2, "Yes start with http")
} else {
    console.log(isStartWithHttp2, "No doesn't start with http")

}
console.log(isStartWithHttp2)

//4) Is there dolor in the description? (aciklamanin icinde dolor var mi?)

if (description.indexOf("dolor") > -1) {        //Eger icinde aradigimiz string yoksa -1'dir.
    console.log("Yes");
} else {
    console.log("No")
}

