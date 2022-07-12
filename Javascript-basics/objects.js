

let userX = {
    "name": "Fatih",
    "lastName": "Cihan",
    "age": 30,
    "address": {
        "city": "Aydin",
        "country": "Turkey"
    },
    "hobbies": ['cinema', 'games']
}

let userY = {
    "name": "Deniz",
    "lastName": "Yilmaz",
    "age": 35,
    "address": {
        "city": "Budapest",
        "country": "Hungary"
    },
    "hobbies": ['books', 'trekking']
}

let result;

// result = user[0]                 // output -> undefined
// result = user.name;             // output -> Fatih
// result = user.lastName;           // output -> Cihan
// result = user["age"]                //output -> 30
// result = user.address.city          //output -> Aydin
// result = user.hobbies[0];           //output-> cinema
// result = user.hobbies[1];           //output-> games


let users = [
    userX,
    userY
];


result = users[1].name;     // output -> Deniz
result = users[1].address.country;      //output -> Hungary

let products = [
    {
        "productName": "iphone",
        "price": 10000,
    },
    {
        "productName": "samsung",
        "price": 7000,
    }
]

result = products[0].productName;       //output -> iphone


console.log(result);