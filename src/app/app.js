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
        if(this.socket.readyState == WebSocket.CLOSED) {
            this.socket = new WebSocket('ws://localhost:9102');
        }
        
        this.socket.send(body)
    }
}

export const sockethandler = new SocketHandler()
