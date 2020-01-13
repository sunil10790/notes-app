const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');


yargs.command({ 
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({ 
    command: 'remove',
    describe: 'Removing a new note',
    handler: function () {
        console.log("Removing a note!");
    }
});

yargs.command({
    command: 'list',
    describe: 'List the Notes',
    handler: function() {
        console.log("Listing out all notes");
    }
});

yargs.command({
    command: 'read',
    describe: 'Read the Notes',
    handler: function() {
        console.log("Reading a note");
    }
});

yargs.parse();
