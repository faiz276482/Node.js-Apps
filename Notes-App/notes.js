const fs= require('fs');
const  chalk=require('chalk')

const note="your notes...";

const getNotes=()=>{
    return note;
}

const addNote=(title,body) => {
    const notes=loadNotes();

    const duplicateNotes=notes.filter((notes) => notes.title===title);

    if( duplicateNotes.length === 0){

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

const saveNotes=(notes) => {
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
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
    getNotes : getNotes,
    addNote : addNote,
    removeNote : removeNote
};