import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../modules/usuario';

/**
 * Generated class for the ListaUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-usuario',
  templateUrl: 'lista-usuario.html',
})
export class ListaUsuarioPage {

  usuarios: Usuario[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {

    this.usuarios = [
      {id: 1, nome: "Nome 1", email: "email1@email.com", profile: 1},
      {id: 2, nome: "Nome 2", email: "email2@email.com", profile: 1},
      {id: 3, nome: "Nome 3", email: "email3@email.com", profile: 1}
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaUsuarioPage');
  }

}
