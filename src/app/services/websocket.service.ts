import { Socket } from 'ngx-socket-io';
import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public usuario: Usuario | null = null;
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

    return new Promise((resolve, reject) =>{
      this.socket.emit('configurar-usuario', {nombre}, (resp: any)=>{
       
          this.usuario = new Usuario(nombre);
          this.guardarStorage();
          resolve(resp);
      });
  
      //Podemos reciclar la funcion EMITIR de arriba 
      /*this.emitir('configurar-usuario', {nombre}, (resp: any) => {
        console.log(resp);
      })*/
    });
  }

  getUsuario(){
    return this.usuario;
  }

  guardarStorage(){
    if(this.usuario){
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
    }
  }

  /*cargarStorage(){
    if(localStorage.getItem('usuario')){
      this.usuario = JSON.parse(localStorage.getItem('usuario'))

    }
  }*/
}
