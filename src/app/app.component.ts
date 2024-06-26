import { Component,OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'basico';

  constructor( public _webSocket: WebsocketService,
    public _chatService: ChatService
  ) {}

  ngOnInit(): void {
    this._chatService.getMessagesPrivate().subscribe( msg =>{
      console.log(msg);
    })
  }
}
