import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import {FormsModule} from'@angular/forms'
import { environment } from 'src/environments/environment';
import { SocketIoConfig, SocketIoModule} from 'ngx-socket-io';

const config: SocketIoConfig = {
  url: environment.wsUrl, options: {transports:['websocket', 'polling']}
};

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
