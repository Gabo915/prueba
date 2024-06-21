import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( public webservice: WebsocketService) { 
    
  }

  sendMessage(mensaje: string){
    const payload = {
      de: this.webservice.usuario?.nombre,
      cuerpo: mensaje
    };

    this.webservice.emitir('mensaje', payload);
  }

  getMessages(){
    return this.webservice.escuchar('mensaje-nuevo');
  }

  getMessagesPrivate(){
    return this.webservice.escuchar('mensaje-privado');
  }
}
