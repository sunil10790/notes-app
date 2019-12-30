const validator = require('validator');

const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('sunil10790@gmail.com'));  // true
console.log(validator.isEmail('sunil10790@gmail'));  // false
console.log(validator.isURL('https://github.com/sunil10790/notes-app')); // true