import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nombre = '';

  constructor(public _webService: WebsocketService, private _router: Router){}

  acceder(){
    this._webService.loginWS(this.nombre)
    .then( () => {
      this._router.navigateByUrl('/mensajes');
    });

    this.nombre = '';

  }

}
