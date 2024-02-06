// File system
const fs = require('node:fs');
const fsPromises = require('node:fs/promises');

// Para convertir en promseas los callbacks
// const { promisify } = require('node:util');
// const readFile = promisify(fs.readFile);


// Asyncrono / Sincrono.
const stats = fs.statSync('./archivo.txt');

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
)

const text = fs.readFileSync('./archivo.txt');
console.log(text);

console.log('Primer archivo:  ')
// const textCorrect = fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
// console.log(textCorrect);
// Call back, función que se ejecuta cuando se acaba una tarea asyncrona
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text)
});

console.log('Hacer cosas mientras lee el archivo')

console.log('Segundo archivo:  ')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text)
});

// ASYNCRONIA CON CALLBACKS
// Promises
fsPromises.readFile('./archivo.txt', 'utf-8')
    .then((text) => {
        console.log(text)
    })
    .catch();
console.log('Hacer cosas mientras lee el archivo')

console.log('Segundo archivo:  ')
fsPromises.readFile('./archivo2.txt', 'utf-8')
    .then((text) => {
        console.log(text)
    })
    .catch();


