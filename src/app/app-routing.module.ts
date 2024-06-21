import { Component, NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { UsuarioGuardService } from './guards/usuario-guard.service';
import { MensajesComponent } from './pages/mensajes/mensajes.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'mensajes',
    component: MensajesComponent,
    canActivate: [UsuarioGuardService]
  },
  {path: '**', component: LoginComponent}
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
