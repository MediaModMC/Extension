'use strict'

class SocketHandler {
    constructor() {
        this.socket = new WebSocket('ws://localhost:9102');
        this.service = null;
    }

    connect() {
        this.socket.addEventListener('open', (event) => {
            console.log("Connected to server")
            this.socket.send("Hello")
        });

        this.socket.addEventListener('message', (event) => {
            const message = event.data;

            if(message === "Hello") {
                return;
            }

            this.socket.send(JSON.stringify(this.service.getMetadata()))
        })

        this.socket.addEventListener('close', (event) => {
            console.log('The connection to the server has been closed successfully');
            this.socket = null;
        });
    }

    setService(instanceOfService) {
        this.service = instanceOfService;

        if(this.socket == null) {
            this.socket = new WebSocket('ws://localhost:9102')
        }

        if(this.socket.readyState == this.socket.OPEN) {
            this.socket.close();
        }

        this.connect();
    }
}

export const sockethandler = new SocketHandler()
