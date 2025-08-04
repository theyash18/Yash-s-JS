// two wat of declering obj
//singalton --->EX: const user = new object{}
// None singalton object --> EX: const user = {}

const Mysyn = Symbol("Key1");

// this is Object literals or none singalton object --> EX: "const user = {}"
const jsUser = {
    [Mysyn] : "Mykey1",
    name:"Yash",
    emial:"theyash@gmail.com",
    Mo:9227841671,
    lastLogIn:["Monday","Sunday"],
    isLoggined: false,
    "fullName" : "Daka Yash"
}   

// How to Access the value from OBJ

//type-->1 Preafer this one
// console.log(jsUser.name);

//type-->2(this method is used in case of fullNmae problem)
// console.log(jsUser["name"]);
// console.log(jsUser["fullName"]);

// About SymBol(note this how to access symbol from object
//  use [Mysyn] this way in object) & this "jsUser[Mysyn]" while access value
// console.log(jsUser[Mysyn]);

// use of freeze 
// jsUser.name="Dhruv"
// Object.freeze(jsUser)
// jsUser.name="Dashu"
// console.log(jsUser)


// this is how to add function in object and access this functio form object
jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}` );
} 

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());