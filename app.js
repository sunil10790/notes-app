const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


// Change yargs version
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log("Adding a new note")
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log("Removing a note")
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log("Listing all the notes")
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log("Read a note")
    }
})

yargs.parse()


// node app.js --help
// app.js [command]
// Commands:
// app.js add     Add a new note
// app.js remove  Remove a note
// app.js list    List all notes
// app.js read    Read a note
// Options:
// --help     Show help                                                 [boolean]
// --version  Show version number                                       [boolean]

// node app.js read  
// Read a note

// node app.js list  
// Listing all the notes

// node app.js remove
// Removing a note

// node app.js add   
// Adding a new note