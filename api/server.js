const http = require('http');
const app = require('./app');
const cfg = require('./config')

const port = cfg.PORT || 3000;

const server = http.createServer(app);

server.listen(port);