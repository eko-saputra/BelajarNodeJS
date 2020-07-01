const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end("Hello World, Nama saya Eko Saputra");
}).listen(8000);

console.log('Server is running at port 8000');