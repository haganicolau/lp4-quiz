import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Button } from 'ionic-angular';
import { Usuario } from '../../modules/usuario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';

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
    public navParams: NavParams,
    private _http: HttpClient,
    private _loadCtr: LoadingController,
    private _alert: AlertController
  ) {

    let load = _loadCtr.create(
      {content: "Carregando..."}
    );
    load.present();

    let alert = _alert.create(
      {
        title:"Falha na Conexão",
        subTitle: "Não foi possível carregar lista de usuários",
        buttons:[
            {text: 'OK'}
        ]
      }
    );

    _http.get<Usuario[]>("http://localhost:3000/usuario")
      .subscribe(
        (users) =>{
          console.log(users);
          this.usuarios = users;
          load.dismiss();
        },
        (err: HttpErrorResponse) =>{
          load.dismiss();
          alert.present();
        }
      );


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaUsuarioPage');
  }

  avancarCadastroUsuario(){
    this.navCtrl.push(CadastroUsuarioPage.name)
  }

}
