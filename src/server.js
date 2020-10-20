import {dummyII} from './utils/index';
let logg = require("./utils/index");
let http = require("http");

console.log("aqui esta mi cambio");
console.log(logg);


http.createServer(function(req, res){
    res.end();
}).listen(8080);