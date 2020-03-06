// const validator=require('validator');
const chalk=require("chalk");
const yargs=require('yargs');
const getNotes=require("./notes.js");

//Customize yargs version
yargs.version("1.1.0");

//Create add command

yargs.command({
    command:"add",
    describe:"Add new note",
    builder: {
        title: {
            describe:"Title of the note to be created!",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of the notes",
            demandOption: true,
            type: 'string'            
        }
    },
    handler: function(argv){
        console.log("Adding a new note!");
        console.log("\nTitle:",argv.title);
        console.log("\nBody:",argv.body);
    }
})

//Create remove command

yargs.command({
    command:"remove",
    describe:"Removing a note",
    handler: function(){
        console.log("Removing a note!");
    }
})

//Create List command

yargs.command({
    command:"list",
    describe:"Listing all notes",
    handler: function(){
        console.log("Listing all notes!");
    }
})

//Create read command

yargs.command({
    command:"read",
    describe:"reading a note",
    handler: function(){
        console.log("Reading a note!");
    }
})

// add , remove , list , read

yargs.parse();



// if(command==="add"){
//     console.log("Adding Note");
// }
// else if(command==="remove"){
//     console.log("Removing note");
// }
// else{
//     console.log("Command not recognized");
// }