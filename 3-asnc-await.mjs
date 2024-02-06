// MJS --> si tiene await en top level
// CJS --> no tiene await async en el body

import { readFileSync } from 'node:fs'

// VERSION SYNCRONA -- BLOQUEA
const textOneS = readFileSync('./archivo.txt', 'utf-8');
console.log('Sincrono primer texto: ', textOneS);
console.log('CODIGO INTERMEDIO SINCRONO');
const textTwoS = readFileSync('./archivo2.txt', 'utf-8');
console.log('Sincrono segundo texto: ', textTwoS);

// import { readFile } from 'node:fs'
// // VERSION CON CALLBACKS
// readFile('./archivo1.txt', 'utf-8', (err, text) => {
//     console.log('aSINCORNO 1 CALLBACK', text)
// });

// readFile('./archivo2.txt', 'utf-8', (err, text) => {
//     console.log('aSINCORNO 2 CALLBACK', text)
// });




// ESTA ASYNCRONIA ES NO SECUENCIAL
// const read = await fs.readFile();
// // Auto invocando function IIFE -
// (
//     async   () => {
//       // const read = await fs.readFile();

//     }
// )
import { readFile } from 'node:fs/promises'
readFile('./archivo.txt', 'utf-8')
    .then((text) => {
        console.log('ASincrono  primer texto: ', text)
    });
console.log('CODIGO INTERMEDIO ASYNCRONO');
readFile('./archivo2.txt', 'utf-8')
    .then((text) => {
        console.log('ASincrono  segundo texto: ', text)
    });

// ASINCRONIA SECUENCIAL
console.log('Inicio secuencia:');
const text = await readFile('./archivo.txt', 'utf-8');
console.log('ASincrono secuencial primer texto: ', text)
const text2 = await readFile('./archivo2.txt', 'utf-8');
console.log('ASincrono secuencial segundo texto: ', text)




// ESTA ASYNCRONIA ES EN PARALELO
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('Primer ASYNCRONO PARALELO texto: ', text)
    console.log('Segunod ASYNCRONO PARALELO texto: ', secondText)
})