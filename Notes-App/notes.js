const fs= require('fs');
const  chalk=require('chalk')



const addNote=(title,body) => {
    const notes=loadNotes();

    //const duplicateNotes=notes.filter((notes) => notes.title===title);
    const duplicateNote=notes.find((notes) => notes.title===title);
    if(!duplicateNote){

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('Note Added!'));
    }
    else{
        console.log(chalk.red.inverse('Note already exist!'));
    }

    // if( duplicateNotes.length === 0){

    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     saveNotes(notes);
    //     console.log(chalk.green.inverse('Note Added!'));
    // }
    // else{
    //     console.log(chalk.red.inverse('Note already exist!'));
    // }
}

const removeNote=(title)=>{
    const notes=loadNotes();
    const keepTheseNotes=notes.filter((notes)=>notes.title!==title);

    if(notes.length>keepTheseNotes.length){
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(keepTheseNotes);
    }
    else{
        console.log(chalk.red.inverse('Note did not exist!'));
    }
}

const listNotes=()=>{
    const notes=loadNotes();
    console.log(chalk.inverse.yellow("Your Notes"));
    notes.forEach(element => {
        console.log(element.title);
        
    });
}

const saveNotes=(notes) => {
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const readNote=(title)=>{
    const notes=loadNotes();
    const readNote=notes.find((notes) => notes.title===title);
    if(readNote){
        console.log(chalk.inverse(readNote.title))
        console.log(readNote.body);
    }
    else{
        console.log(chalk.red.inverse("No note found!"));
    }
}
const loadNotes=() => {
    try
    {
        const databuffer=fs.readFileSync('notes.json');
        const dataJSON=databuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return [];
    }
}

module.exports={
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
};