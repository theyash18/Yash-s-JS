const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
   console.log(button);
   button.addEventListener('click',function(e){
   console.log(e);
   const key = console.log(e.target.id);
   console.log(key);

   switch (key) {
    case key:'gray'
            body.style.background=e.target.id
            break;
   case key:'pink'
            body.style.background=e.target.id
            break;
   case key:'yellow'
            body.style.background=e.target.id
            break;
    case key:'blue'
            body.style.background=e.target.id
            break;
    default:console.log("Please click on colour button");
        break;
   }

    
   });

});