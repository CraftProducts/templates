var static = require('node-static');
var http = require('http');
require('dotenv').config();

console.log(`Configuring server at PORT ${process.env.PORT}`);

var file = new static.Server();

http.createServer(function (req, res) {

    res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    req.addListener('end', () => {
        file.serve(req, res, (e, result) => {
            console.info(`Serving ${req.url}`);
        });
    }).resume();
}).listen(process.env.PORT);