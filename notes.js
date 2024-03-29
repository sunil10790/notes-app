const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
    if(!duplicateNote) {
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
        console.log(chalk.red.inverse('Note not found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length > 0) {
        console.log(chalk.yellow.bold.underline.inverse('Your Notes:'))
        notes.forEach(note => {
            console.log(chalk.green(note.title))
        })
    } else {
        console.log(chalk.red.inverse("No notes found"))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const searchedNote = notes.find(note => note.title === title)
    if(searchedNote) {
        console.log(chalk.green.inverse(searchedNote.title))
        console.log(searchedNote.body)
    } else {
        console.log(chalk.red.inverse("Note not found"))
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
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
