const chalk = require('chalk');
const getNotes = require('./notes.js');


console.log(process.argv);

const command = process.argv[2];

if(command === 'add') {
    console.log('Adding Note')
} else if(command === 'remove') {
    console.log('Removing Note')
}

// node app.js add --title="This is a title"
// Result: 
// [
//     '/Users/sunil/.nvm/versions/node/v14.17.4/bin/node',
//     '/Users/sunil/git/notes-app/app.js',
//     'add',
//     '--title=This is a title'
//   ]
//   Adding Note