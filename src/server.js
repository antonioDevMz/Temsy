import {dummyII} from './utils/index';
let logg = require("./utils/index");
let http = require("http");

console.log("aqui esta mi cambio");
console.log("este cambio es de PC");
console.log("tercer cambio");
console.log(logg);


http.createServer(function(req, res){
    res.end();
}).listen(8080);