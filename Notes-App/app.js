const validator=require('validator');
const getNotes=require("./notes.js");

console.log(getNotes());

console.log("IS Email?"+validator.isEmail("faiz276482@gmail.com"));
console.log("is URL?:"+validator.isURL("https://nerdytech.in"));



// const add=require("./utils.js");
// console.log(add(5,5));