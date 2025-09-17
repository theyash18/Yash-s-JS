// Generat Random colour

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i=0;i<=5;i++){

       color += hex[(Math.floor(Math.random()*16))];
      
    }
    return color;
};

// console.log(randomColor());
let referance;

const start = function(){
        const change = function(){
        document.body.style.backgroundColor = randomColor()
    }


    if(!referance){
        referance =   setInterval(change,1000) 
    }
 
}

const stop = function(){
    clearInterval(referance)
    referance = null
}
document.querySelector('#start').addEventListener('click',start)
document.querySelector('#stop').addEventListener('click',stop)
