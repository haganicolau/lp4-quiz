import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaUsuarioPage } from './lista-usuario';

@NgModule({
  declarations: [
    ListaUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaUsuarioPage),
  ],
})
export class ListaUsuarioPageModule {}
