const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8081 });

server.on("connection", socket => {
    console.log('new connection');

    socket.on('close', () => {
        console.log('disconnect');
    });

    socket.on('message', message => {
        //socket.send(message);
        server.clients.forEach(function each(client) {
            client.send(message);
        });
    })

});
