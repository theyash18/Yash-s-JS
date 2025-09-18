
/* Function is alos function as well as function is also object
   so we can add mathod with ".(DOT)" followed by function name
   same thing also apply on array,string
*/ 
function multiply(num){
    return num*5
}

multiply.power = 2;
console.log(multiply(5)); // 25
console.log(multiply.power); // 2
console.log(multiply.prototype); // {}


function createuser(UserName,score){
    this.UserName = UserName;
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++
}

createuser.prototype.printMe = function()  {
    console.log(`My name is ${this.UserName}`);
}

const G1 = new createuser("Yash",10);
const G2 = new createuser("Jay",10);

G1.printMe();
G2.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/