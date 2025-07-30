// data-types
// *****************Primitive**************
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// let score = 100;
// let scoreValue = 100.3;
// let isLOggedIn = false;
//let outsideTemp = null;
// let userEmail = undefined;
// let id = Symbol('123');
// let anotherId = Symbol('123');
// console.log(id === anotherId);

// let bigNumber = 7983499388n;
// console.log(typeof bigNumber);

//******************Reference (Non-Primitive)********************

// Array, Objects, Functions
// let webSeries = ["Mirzapur", "Ashram", "Raktanchal"]
// console.log(webSeries);

// let peronObj = {
//     name: "Chiranjeev",
//     age: 22
// }
// console.log(peronObj);

// let myFunction = function() {
//     console.log("Namaste Javascript");
// }

// myFunction();

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//*****************Primitive**************
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt



//stack (primitive)  ,Heap(None-primitive)

// let myName="Yash"               // in primitive type stack memory assigned to the variable
// let anotherName=myName          //so changed happen in copy not in original value
// anotherName="Daka"
// console.log(myName);
// console.log(anotherName);

//******************Reference (Non-Primitive)********************
// Array, Objects, Functions

// let userOne={
//     emil : "user@mail.com",
//     upi : "46321111@ybl"   
//}                                  
                                     // in none-primitive type heap memory assigned
                                    // passiging original value not a copy
                                  // so change happen in both orignal and another assigned varible

// let userTwo=userOne

// userTwo.emil="yash@mail.com"

// console.log(userOne);
// console.log(userTwo);