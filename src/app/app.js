'use strict'

class SocketHandler {
    constructor() {
        this.socket = new WebSocket('ws://localhost:9102');
    }

    connect() {
        this.socket.addEventListener('open', () => {
            console.log("Connected to server")
            this.socket.send("Hello")
        });
    }

    send(body) {
        this.socket.send(body)
    }
}

export const sockethandler = new SocketHandler()
