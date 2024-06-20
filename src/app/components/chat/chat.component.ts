import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  texto = '';
  mensajes : any[] =[];
  mensajesSubscription: Subscription | null = null;
  elemento: HTMLElement | null = null;

  constructor(public _chatService: ChatService){

  }

  ngOnInit(): void {
    this.elemento = document.getElementById('chat-mensajes');
    this.mensajesSubscription = this._chatService.getMessages().subscribe(msg => {
      this.mensajes.push(msg);
      setTimeout(()=>{
        if(this.elemento){
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }
       
      }, 50);
    });
  }

  ngOnDestroy(): void {
    if(this.mensajesSubscription){
      
      this.mensajesSubscription.unsubscribe();
    }
  }

  enviar(){
    if(this.texto.trim().length === 0){
      return
    }
    
    this._chatService.sendMessage(this.texto);
    console.log('Mensaje Enviado');

    this.texto= '';
  }

}
