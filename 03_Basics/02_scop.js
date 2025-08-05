let a=200
if(true){
    let a=400
    // console.log("Inner:",a);
}
// console.log("outer:",a);

function one() {
   const userName="Yash"

   function two() {
     const surName="Patle"
    //  console.log(userName);  // child function can access parent function
   }
   two()
//    console.log(surName);  // but pareny function can't assesss the chiel function
}
one()

if (true) {
   const userName = "Yash"

   if(userName=="Yash"){
    const surName="Patel"
    // console.log(userName+" "+surName);
   }
//    console.log(surName);
}

// console.log(userName);

                      // ************** INTRESTING ********************

// in this case you can calling function before declaration
console.log(addOne(5))
function addOne(num){
    return num+1
}

// in this case you can't call functin before declaration bcz function is stored in variable
// console.log(addtwo(5))
const addtwo= function(num){
    return num+2
}
console.log(addtwo(5))