const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => "Your Notes.."

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => note.title === title)
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added successfully'))
    } else {
        console.log(chalk.red.inverse('Title already taken'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const filteredNotes = notes.filter(note => note.title !== title)
    if(notes.length > filteredNotes.length) {
        saveNotes(filteredNotes)
        console.log(chalk.green.inverse('Note deleted successfully'))
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const loadNotes = () => {
    try {
        const notesJSON = fs.readFileSync('./data/notes.json', {
            encoding: 'utf-8'
        })
        return JSON.parse(notesJSON)
    } catch(e) {
        return []
    }
}

const saveNotes = (notes) => {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('./data/notes.json', notesJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}