const user={
    userName: "Yash",
    Price:999,

    welcomeMsg:function(){
        console.log(`${this.userName},Welcome to wesite..!` );
        // console.log(this);
    }
 }
//  user.welcomeMsg()
// user.userName="Jay"
// user.welcomeMsg()
// console.log(this);  // this refers empty object
      
function chai(){
    const user="yash"
    console.log(this.user); // this is work only in obj not in function
}
// chai()

const chai1=function(){
    const user="yash"
    console.log(this.user); // this is work only in obj not in function
}
// chai1()

const chai2 = () => {
    // const user="yash"
    console.log(this.user); // this is work only in obj not in function
}
// chai2()

// example of arrrow function

const arrow = (num1,num2) => {
    return num1+num2
}

//console.log(arrow(55,5));


const arrow1 = (num1,num2) => num1+num2
console.log(arrow1(55,5));


const arrow2 = (num1,num2) => (num1+num2)
console.log(arrow1(55,5));


const arrow3 = (num1,num2) => (({user:"yash"}))
console.log(arrow3(55,5));