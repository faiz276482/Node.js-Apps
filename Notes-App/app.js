// const validator=require('validator');
const chalk=require("chalk");
const yargs=require('yargs');
const notes=require("./notes.js");

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
        notes.addNote(argv.title,argv.body);
    }
})

//Create remove command

yargs.command({
    command:"remove",
    describe:"Removing a note",
    builder: {
        title: {
            describe:"Title of the note to be created!",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

//Create List command

yargs.command({
    command:"list",
    describe:"Listing all notes",
    handler(){
        notes.listNotes();
    }
})

//Create read command

yargs.command({
    command:"read",
    describe:"reading a note",
    builder: {
        title: {
            describe:"Title of the note to be Read!",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
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