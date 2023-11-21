var http = require('http');
var socketIO = require('socket.io');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("hello");
    res.end('Hello, World\n');
});

var io = socketIO(server);

io.sockets.on('connection', function (socket) {
    console.log('connect');
})

server.listen(8080, function () {
    console.log('Server running at port 8080');

});
