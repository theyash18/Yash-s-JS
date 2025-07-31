const marvel_Heros = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["Superman","Flash","Batman"]

//marvel_Heros.push(dc_heroes);
// in this case pasing arry inside of aary in form of singal element like below
//[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'Batman' ] ]
//console.log(marvel_Heros); 

// const all_heroes = marvel_Heros.concat(dc_heroes)
// right way as this using CONCAT 
//[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
// console.log(all_heroes);

// *****also this wat is batter for joining 2 array
// [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]
// const all_new_heroes=[...marvel_Heros,...dc_heroes]
// console.log(all_new_heroes);


// if this situation arrival array inside arry inside arry then
// FLAT is used to combine the array element //flat(number of array)
// const another_array =[1,2,3,[4,5,6],7,[8,9,[10,11]]]
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("yash")); // chek that is arry or not return boolean
// console.log(Array.from("yash"));   // now it is converted in array using FROM
// console.log(Array,from({name:"yash"}));

let no1=100
let no2=200
let no3=300
// used to convert value in the array
console.log(Array.of(no1,no2,no3));