// ************ PART OF OPP **************

// -----------> Object literl <-----------

// this = used to access current content 

const user = {
    username : 'Yash',
    loginCount : 8,
    signedIn : true,

    userdetail : function(){
            // console.log('Got user detail from databse');
            // console.log(`Username : ${this.username}`);
            // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.userdetail());




// *********** Constructor Function **************

 /*----> Constructor Function give new instance (New Copy)
         Orignal and other not effected by that copy */

 /*-----> [1] When we use new KeyWord a empty object will be created called Instance.
          [2] Counstructor Function Created.
          [3] This KeyWord and argument enject.
          [4] We Got It!*/

function BioData(FirstName, LastName, City){

    this.FirstName = FirstName;
    this.LastName = LastName;
    this.City = City

    this.gretting = function(){
        console.log(`Welcome ${this.FirstName}`);
    }

  return this
}

const G1 = new BioData("Yash","Daka","Palanpur");
const G2 = new BioData("Dhruv", "Daka", "Palanpur");


// console.log(G1);
//  console.log(G2);
// console.log(G1.constructor);
// console.log(G1 instanceof BioData); // true
// console.log(G1 instanceof Object); // true

// console.log(G1.counstructor);