// ------------> ForEachLoop <--------------
//************/ Important NOTE :- ForEach Never Return any Value**********

const coading=["js","c++","pyathon"]

coading.forEach(function (val) {
   // console.log(val);
})

// const num=[1,2,3,4,5,6,7,8,9,10]

//const yash = num.forEach((itam)=> {
   // console.log(itam);
  //  return itam()
//})
//console.log(yash);  // UNDIFINED

// ************* SOLUCTION ****************
// (returning value using foreach=>not soluction just using)

// const num=[1,2,3,4,5,6,7,8,9,10]
// const NewNums=[]
// const rs=num.forEach((num)=>{
//    // console.log(num);
//    if(num>4){
//     NewNums.push(num)
//    }
// })
// console.log(NewNums);


// ------> Using Arrow Function <----------

coading.forEach((vla)=>{
    // console.log(vla);
})

// ----------> Indivusual Function <---------------

function yash(yash){
    console.log(yash);
}
// coading.forEach(yash)

// --------------> What FoeEachLoop Can Access <---------------------
// NOTE :- It can print values as well as Index and array as below
coading.forEach((Iteam,index,arr)=>{
   // console.log(Iteam,index,arr);
})

// --------------> Obejct In Array <-------------------

const a1=[
    {
        name:"Yash",
        surname:"Patel"
    },
    {
        name:"Dhruv",
        surname:"Patel"
    },
    {
        name:"Zeel",
        surname:"Patel"
    }
]

a1.forEach((iteam)=>{
    console.log(iteam.name);
    console.log(iteam.surname);
})