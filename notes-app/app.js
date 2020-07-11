// const validator = require('validator')

const chalk = require('chalk')

const yargs = require('yargs')

const notes = require('./notes.js')

// const msg = getNotes()

// console.log(msg)

// console.log(chalk.inverse.red.bold('Errors!') + (chalk.blue.bold.underline(' is well deserved...')))

// console.log(process.argv[2])

// console.log(validator.isEmail('sandraexample.com'))


// console.log(validator.isURL('https:/traversy.com'))

// if (command === 'add') {
//     console.log('Adding notes!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }
// const command = process.argv[2]

// console.log(process.argv)

// Customize Yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})


// add, remove, read, list

// yargs.parse()
console.log(yargs.argv)