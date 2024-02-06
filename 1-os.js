// Sistema operativo --> os
// const os = require('os');
const os = require('node:os');

console.log(os.homedir())
console.log(os.platform())
console.log(os.release())
console.log(os.arch())
console.log(os.cpus())

console.log(os.freemem() / 1024 / 1024)
console.log(os.totalmem() / 1024 / 1024)

console.log(os.uptime() / 60 / 60)