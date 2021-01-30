const SocketManager = (io) => {

    io.on('connection', (socket) => {
        console.log("[Socket.io] Client Conectado!")

        socket.on("disconect", () => {
            console.log("[Socket.io] Client desconectado")
        })
    });

}

module.exports = SocketManager