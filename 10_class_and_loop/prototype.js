let myheros = ["Superman","Doremon"]

let heroPower = {
    // key => Value
    spiderman : "slinh",
    thor : "hammer",
    getSpiderPower : function(){
        console.log(`Spideer power is ${this.spiderman}`);
    }
}

// Injectinfg Property in Object so acess all(Array,Class,Function)
Object.prototype.yash = function(){
    console.log("Yash is present in all objects");
}
// Injectinfg Property in Array so acess onlay have Array
Array.prototype.sayYash = function(){
    console.log("Onlay Arry have access");
}
// heroPower.yash();
// myheros.yash();
// heroPower.sayYash(); // Onlay Array have acces property so function can't acces it.
// myheros.sayYash()

// *********************  Inhereitance  ***********************

const user = {
    name : "Yash",
    Email : "dakayash@gmsil.com"
}
const Teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvialble : false
}

const TAsupport = {
    makeingAssignment : "Js,C++",
    fulltime : true,

    __proto__:teachingSupport //Now TAsupport can access the property of the teachingSupport
    
}

Teacher.__proto__ = user // Now Teacher can access the property of the user

//Modern Syntex

Object.setPrototypeOf(teachingSupport,Teacher) 
//Now teachingSupport can access the property of the teacher


let AnotherUserName = "ChaiOrCode      ";

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

AnotherUserName.truelength()
"Yash".truelength()