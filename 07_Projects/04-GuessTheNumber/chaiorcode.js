let randomNumber=(parseInt(Math.random()*100+1));
//http://127.0.0.1:5501/07_Projects/04-GuessTheNumber/index.html
const submit = document.querySelector('#subt');
const userInpt = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaing = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultparas');

let prevGuess =  [];
let numGuess = 1;

let plaGame = true;
const p =document.createElement('p');

if(plaGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
       const guess = parseInt(userInpt.value);      
       validateGuess(guess)
       
    });
}

function validateGuess(guess){
        if(isNaN(guess)){
            alert('Please Enter Valid Numbere');
            
        }
        else if(guess < 0){
            alert('Please Enter Number Greater Then 0');
        }
        else if(guess > 100){
            alert('Please Enter Number Less Then 100');
 
       }
       else{
        prevGuess.push[guess];
        if(numGuess == 11){
            diplayMessage(`Game over random number was ${randomNumber}`);
            endGame();           
        }
        else{
            displayGuess(guess);
            chckGuess(guess);
        }
       }
}

function chckGuess(guess){
    if(guess == randomNumber){
        diplayMessage('You guess the right number')
        endGame(); 
    }
    else if(guess < randomNumber){
        diplayMessage('Number is Tooo Low')
    }
    else if(guess > randomNumber){
        diplayMessage('Number is Too High')
    }

}

function displayGuess(guess){
        
    userInpt.value=''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;        
    remaing.innerHTML = `${11 - numGuess}`
    
}

function diplayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}



function endGame(){
    userInpt.value='';
    userInpt.setAttribute('disabled','');
    submit.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    StartOver.appendChild(p);
    plaGame=false;
    newGame();
}
function newGame(){
    
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        let randomNumber=(parseInt(Math.random()*100+1));
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML=''
        remaing.innerHTML=`${11 - numGuess}`
        userInpt.removeAttribute('disabled')
        submit.removeAttribute('disabled')
        StartOver.removeChild(p);
        plaGame=true;
    });
}

