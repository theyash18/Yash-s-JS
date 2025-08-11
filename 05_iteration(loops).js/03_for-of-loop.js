// ----------------------------> For of loop <-------------------

 const arr=[1,2,3,4,5]

for (const i of arr) {
   // console.log(i);
}

// ---------------------> On String <-------------------

const name="yash"
for (const i of name) {
   // console.log(i);
}


// -----------------------> MAP <-----------------------

const map = new Map()
map.set('IND',"INDIA")
map.set('AFC',"AFRICA")
map.set('USA',"UNITED STATE OF AMERICA")

console.log(map);
for (const [key,value] of map) {
  //  console.log(key,value);
}


// ---------> for of loop Object  <------------------
// NOTE :- ForOFLoop Not Executing on OBj 
const myObject = {
    'Game1':'ff',
    'Game2':'PUBG',
    'Game3':'GTA',   
}

for (const [key,value] of myObject) {
      console.log(key,value);
  }