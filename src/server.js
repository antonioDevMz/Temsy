const express = require('express');
const server  = express();
const cors    = require('cors');
const routers = require('./routes');
const { deploy: { port } } = require('./environment');

server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors());
server.use('/zen', routers);

server.listen(port, () => {
    console.log(`server start on port ${port}`);
});

module.exports = server;