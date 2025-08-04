// getting value from the object in another official way

const course = {
    coursename : "yash's-JS",
    price : 999,
    teacher : "Yash"
}

// boaring way
console.log(course.coursename);
// Profisinol way
const {coursename} = course
console.log(coursename);
// restructer in object
const {coursename:cname} = course
console.log(cname);

// brif introduction of JSON
// how is data look like in jeason? -> as below
// {
//     "name" : "yash",
//     "coursename" : "yash's-js",
//     "price" = "free"
// }

// [
//     {},
//     {},
//     {}
// ]