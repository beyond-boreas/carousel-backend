const httpServer = require('http')
import { WebSocketServer } from "ws";

const server = httpServer.createServer();
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', (ws, request, client) => {
  ws.on('error', console.error('Error in websocket connection'))

  ws.on('message', (data) => {
    console.log(`Recieved message ${data} from user ${client}`);
  });
});

server.listen(8080)