// Immediately Invoked Function Expression(IIFE)
// NOTE --> Why Using?--> Used to remove Global Scop variable polucation and also Immediately exection
(function chai(){
    // named IFFI
    console.log(`DB CONNACTED!`);
})();

// NOTE --> Use ";" after every IIFI function to stop the execution of IFFE

//With USe of an Arroe Function
( () => {
    console.log(`DB CONNACTED 1!`);
})();

// Passing Parameter in IFFI

((name) => {
    console.log(`DB CONNACTED 1! ${name}`);
})('Yash');