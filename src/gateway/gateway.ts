import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from 'socket.io';


@WebSocketGateway()
export class Gateway {
    @SubscribeMessage('join-room')
    handleEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket): any {
        

        console.log(`client ${client.id} is send message ${data}`);
    }
}
