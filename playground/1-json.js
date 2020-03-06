const fs=require('fs');


const dataBuffer=fs.readFileSync("1-json.json");
console.log(dataBuffer);
console.log(dataBuffer.toString());
const data=JSON.parse(dataBuffer);
console.log(data);

data.name="Faiz";
data.age="21";

fs.writeFileSync("1-json.json",JSON.stringify(data));

// const book= {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday"
// };

// const bookJson=JSON.stringify(book);
// fs.writeFileSync("1-json.json",bookJson);

// console.log(bookJson);

// const parsedBooks=JSON.parse(bookJson);
// console.log(parsedBooks);