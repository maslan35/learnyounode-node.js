const fs = require('fs');
var buff=fs.readFileSync(process.argv[2]);
var str=buff.toString();
var fnsh=str.split('\n');
console.log(fnsh.length -1);