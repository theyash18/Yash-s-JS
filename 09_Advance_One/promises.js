const promiseOne = new Promise(function(resolve,reject){
    // Don an asyn Task
    // DB call ,Nework ,Cryptographye


  //  Promise 1 
  
    setTimeout(function(){
       console.log('Asyn Task Is Complated');
        resolve()
    },1000)
})

promiseOne.then(function(){
   console.log('Promise Consumed');
})

// Second Way (Promise 2)

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyne Task 2");
        resolve()
    },1000)
}).then(function(){
   console.log("Promise Cinsumed 2");
})

// Promise 3

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({UserName : "Yash ",Password : "Yash@2006"})
    },1000)
})

promiseThree.then(function(data){
    console.log(data);
})

// Promise 4

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = false;
        if(!error){
            resolve({name : "Dhruv" , PassCode : "123"});
        }
        else{
            reject('ERROR : Something went wrong');
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
   // console.log(user.name);
  //  return user.PassCode
      return user.name
}).catch((e) => {
    console.log(e);
}).finally(() => {
    console.log("The promice is eithe resolved or rejected");
}).then((k)=>{
    console.log(k);
})

// Promise 5

const promiesFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
          if(!error){
              resolve({name : "Zeel" , PassCode : "***"});
          }
          else{
              reject('ERROR : Something went wrong');
          }
      },1000)
})

async function consumePromiesFive(){
  try { 
    const response = await promiesFive
    console.log(response);
    }
    catch(e){
        console.log(e);
    }
}
consumePromiesFive()

// Promise 6

// async function getAlluser(){
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//    }
//    catch(e){
//     console.log(e);
//    }
// }
// getAlluser()

// Promise 7

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((e) => console.log(e))
