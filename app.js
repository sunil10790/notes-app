const fs = require('fs');

fs.writeFileSync('notes.txt', "I am Mogambo.");

fs.appendFileSync('notes.txt', " I am awesome");

