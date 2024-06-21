import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuardService implements CanActivate{

  constructor( public _webSocketService: WebsocketService, private router: Router) { }

  canActivate() {
    if (this._webSocketService.getUsuario()){
      return true;
    }else{
      this.router.navigateByUrl('/');
      return false
    }
  }
}
