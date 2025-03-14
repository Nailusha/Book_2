//стр391
var garble = require("./garble");
// По индексу 2 содержится первый аргумент программы из командной строки
var argument = process.argv[2];
console.log(garble(argument));
