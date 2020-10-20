import {dummyII} from './utils/index';
let logg = require("./utils/index");
let http = require("http");

http.createServer(function(req, res){
    res.end();
}).listen(8080);