const chalk = require('chalk');

const getNotes = require('./notes.js');

console.log(process.argv);
console.log(process.argv[2]);

const operation = process.argv[2];
if (operation === 'add') {
    console.log("Adding a note!");
} else if (operation === 'remove') {
    console.log("Removing a note!");
}