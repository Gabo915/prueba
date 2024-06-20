import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public usuario = Usuario;
  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus(){
    this.socket.on('connect', ()=>{
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', ()=>{
      console.log('desconectado del servidor');
      this.socketStatus = false;
    });
  }

  emitir( evento: string, payload?: any, callback?: Function) {
    console.log('Emitiendo...', evento);

    this.socket.emit(evento, payload, callback);

  }
  escuchar(evento: string){
    return this.socket.fromEvent(evento);

  }
  loginWS(nombre: string){
    console.log('configurando..', nombre);

    this.socket.emit('configurar-usuario', {nombre}, (resp: any)=>{
      
      console.log(resp);
    })

    //Podemos reciclar la funcion EMITIR de arriba 
    /*this.emitir('configurar-usuario', {nombre}, (resp: any) => {
      console.log(resp);
    })*/
  }
}
