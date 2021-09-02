// const fs = require('fs');
// //fs.writeFileSync('notes.txt', 'This file is created and the text is added by node.js Awesomee!!');
// fs.appendFileSync('notes.txt', ' We can also append text to an existing file! :o');

const validator = require('validator');
const getNotes = require('./notes.js');

const note = getNotes();
console.log(note);

console.log(validator.isEmail('a@a.com'));