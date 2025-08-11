// ***************** USE OF REDUCE ***********************
// 0 is value of accumilater which is adding in the currValue First time

const num=[1,2,3,4]
const sum =num.reduce((acc,currvale)=>currvale+acc,0)
//console.log(sum);

// USe on object

const add=[
    {
        course:"js",
        price:200
    },
    {
        course:"c++",
        price:300
    },
    {
        course:"Python",
        price:500
    }
]

const rs=add.reduce((acc,iteam)=>iteam.price+acc,0)
console.log(rs);