// const square = function(x){
//     return x*x;
// }



// const square= (x) => {
//     return x*x;
// }

// const square = (x) => x*x;

// console.log(square(3));

// const event = {
//     name: "GSoc",
//     printParticipantList: function(){
//         console.log("Guest List for "+this.name);
//     }
// }


// const event = {
//     name: "GSoc",
//     printParticipantList: ()=>{
//         console.log("Guest List for "+this.name);
//     }
// }

const event = {
    name: "GSoc",
    participantList:["Faiz","Zaid","Anjali"],
    printParticipantList(){
        console.log("Guest List for "+this.name);

        this.participantList.forEach((guest) =>{
            console.log(guest+" is Attending "+this.name);
        });
    }
}

event.printParticipantList();