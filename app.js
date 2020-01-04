const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes.js');

// console.log(process.argv);
// console.log(yargs.argv);

yargs.command({ 
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log("Adding a new note!");
    }
}).argv;

yargs.command({ 
    command: 'remove',
    describe: 'Removing a new note',
    handler: function () {
        console.log("Removing a note!");
    }
}).argv;

yargs.command({
    command: 'list',
    describe: 'List the Notes',
    handler: function() {
        console.log("Listing out all notes");
    }
}).argv;

yargs.command({
    command: 'read',
    describe: 'Read the Notes',
    handler: function() {
        console.log("Reading a note");
    }
}).argv;

// const operation = process.argv[2];
// if (operation === 'add') {
//     console.log("Adding a note!");
// } else if (operation === 'remove') {
//     console.log("Removing a note!");
// }
