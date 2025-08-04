
function name(){
console.log("Y");
console.log("A");
console.log("S");
console.log("H");
}
name // Referance
//name() // Calling

// ***** FUNCTION'S *****
// function addNumber(no1,no2){
//      console.log(no1+no2);
// }
// addNumber(3,4);

function addNumber1(no1,no2){
    let result=no1+no2;
    return result;
}
const result = addNumber1(8,8)
//console.log("Result :" ,result);

function msg(username){
    return `${username} is just logged In.`
}

//  console.log(msg("yash"))

function calculateCartPrice(...no1){
    console.log(no1);  
}

//calculateCartPrice(10,20,30,40)

// *** Passing Object in function ***

// this is obj
const user ={
    name : "Yash",
    age : 19
}

// this is function
function handalObject(aneyObject){
    console.log(`Username is ${aneyObject.name} and Age is ${aneyObject.age}`);
}
//return handalObject(user)

// you can also directly pass value as below -- no need to create obj
// handalObject({
//     name:"Dhruv",
//     age : 20
// })

// passing array in function

const myNewArray = [10,20,30,40,50]

function returnSecondValue(getArray){
  
    console.log(getArray[1])
}
returnSecondValue(myNewArray)
returnSecondValue([100,200])