const fs = require('fs')
const path = require('path')

//popka yaratish
fs.mkdir(path.join(__dirname, '/papka'), (err) => {
    if (err) {
        throw err
    }
    console.log('Cozdad papka');
})

// //file yaratish
fs.writeFile(path.join(__dirname, '/papka', 'namuna.txt'), 'node js', (err) => {
    if (err) {
        throw err
    }
    console.log('Cozdad papka');
})

// //yaratilgan fileni ichiga yana malumot qoshish
fs.appendFile(path.join(__dirname, '/papka', 'namuna.txt'), 'Hello world', (err) => {
    if (err) {
        throw err
    }
    console.log('Cozdad papka');
})

//file ichidagi malumotni oqish
fs.readFile(path.join(__dirname, "papka", 'namuna.txt'), 'utf8', (err, data) => {
    if (err) throw err
    console.log(data);
})

//file nomini ozgartirish
fs.rename(
    path.join(__dirname, 'papka', 'namuna.txt'),
    path.join(__dirname, 'papka', 'expample.txt'),
    (err) => {
        if (err) {
            throw err
        }
    }
)