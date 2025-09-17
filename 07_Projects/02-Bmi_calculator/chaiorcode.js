const form=document.querySelector('form') // form,body default  "." for class

// const height=parseInt(document.querySelector('#height'))
// hear is not gating value bcz its get 0 when form run
// or empty value  bcz its run first and then come in loop

form.addEventListener('submit',function(e){
   
    e.preventDefault() // for stop to run form
   
    const height=parseInt(document.querySelector('#height').value) // Get Valye of TextBox so use '#'
    const weight=parseInt(document.querySelector('#weight').value)
    const ressults=document.querySelector('#results')

    if(height === ' ' || height < 0 || isNaN(height) ){
        ressults.innerHTML='* Please Enter Valid Height'
    }
   else if(weight === ' ' || weight < 0 || isNaN(weight)){
    ressults.innerHTML='* Please Enter Valid weight'
   }
   else{
   const bmi = (weight / ((height*height) / 10000)).toFixed(2)
    ressults.innerHTML= `<span>${bmi}</span>`    
}
});