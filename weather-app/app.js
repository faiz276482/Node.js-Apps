//video 1 and 2
// console.log("Starting");

// setTimeout(()=>{
//     console.log("2 seconds timer");
// },2000);

// setTimeout(()=>{
//     console.log("0 seconds timer");
// },0);

// console.log("Ending");

//=================================================================================//


//video 3
const request= require('request')

const url='https://api.darksky.net/forecast/b5585121dd41caa42a06d9b7576e96c8/37.8267,-122.423'

request({ url: url},(error,response) =>{
    const data=JSON.parse(response.body)
    console.log(data.currently);
});