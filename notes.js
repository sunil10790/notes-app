const fs = require('fs')

const getNotes = function() {
    return "Your Notes..";
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Note added')
    } else {
        console.log('Title already taken')
    }
}

const loadNotes = function() {
    try {
        const notesJSON = fs.readFileSync('./data/notes.json', {
            encoding: 'utf-8'
        })
        return JSON.parse(notesJSON)
    } catch(e) {
        return []
    }
}

const saveNotes = function(notes) {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('./data/notes.json', notesJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}