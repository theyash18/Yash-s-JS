// you can use also this way to adding value in object
const tinderuser = {} 
tinderuser.ID = "abc123"
tinderuser.name = "Yash"
// console.log(tinderuser);


// object inside object inside object
const regularuser = {
    emil : "theyash@google.com",
    fullname:{
        userfullname:{
            firstname : "Yash",
            lastname : "Daka"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}
// " {} " this is not compalsiry while marge the obj but use is bstter
// " {} " <---- this is act as target that all the combinaton of object in act as sourse
// const obj3 =Object.assign({},obj1,obj2) // {} <--- target; obj1,obj2<-- sourse

// 90% use this same as array margeing
const obj3 ={...obj1,...obj2}
// console.log(obj3);

console.log(tinderuser);
// wiedely used in proects;also use looping in this
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
//".entries" return arry inside of array of key:value
console.log(Object.entries(tinderuser));

// "hasOwnProperty" for chacking value is avilable or not in object
console.log(tinderuser.hasOwnProperty('ID'));
console.log(tinderuser.hasOwnProperty('emial'));