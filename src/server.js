import { dummyII } from './utils/index';
//import { deploy } from './config/environment';
let logg = require("./utils/index");
let http = require("http");

console.log(dummyII);
console.log(logg);

http.createServer(function(req, res){
    res.end();
}).listen(8080);