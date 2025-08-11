// *************Filter,MAP,chaning****************

//--------------------> Use OF filter <-------------------------

// FILTER return Value
//const num=[1,2,3,4,5,6,7,8,9,10]
//const rs = num.filter( (num) =>  num > 4 ) // Workimg
//const rs = num.filter( (num) => { num > 4} )  // " Using "{}" thaan use return keyword
//const rs = num.filter( (num) => {return num > 4} )
//console.log(rs);


 //------------------> MAP <-------------------

 const num=[1,2,3,4,5,6,7,8,9,10]
// const NewNums = num.map((num)=>num+10)
// console.log(NewNums);

const yash=[]
num.forEach((num)=>{
  if(true){
    yash.push(num+10)
  }
})
//console.log(yash);

//------------------> chaneing <----------------------
//BOth are same
// const new1 = num.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
const new1 = num
            .map((num)=>num*10)
            .map((num)=>num+1)
            .filter((num)=>num>=40)
console.log(new1);
