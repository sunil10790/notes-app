const fs = require('fs');

const getNotes = function() {
    return "Your notes...";
}

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Note Added!")
    } else {
        console.log("Title taken. Please use other title!")
    }
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const JSONData =  dataBuffer.toString()
        return JSON.parse(JSONData)
    } catch {
        return []
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote
};