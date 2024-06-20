import { Component } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre = '';

  constructor(public _webService: WebsocketService){}

  acceder(){
    this._webService.loginWS(this.nombre);
    this.nombre = '';

  }

}
