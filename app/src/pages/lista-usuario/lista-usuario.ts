import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Button } from 'ionic-angular';
import { Usuario } from '../../modules/usuario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
import { VisualizarUsuarioPage } from '../visualizar-usuario/visualizar-usuario';

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
  http : HttpClient;
  load;
  alert;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _http: HttpClient,
    private _loadCtr: LoadingController,
    private _alert: AlertController
  ) {

    this.http = _http;
    this.load = _loadCtr.create(
      {content: "Carregando..."}
    );
    this.load.present();

    this.alert = _alert.create(
      {
        title:"Falha na Conexão",
        subTitle: "Não foi possível carregar lista de usuários",
        buttons:[
            {text: 'OK'}
        ]
      }
    );
  }

  ionViewDidLoad() {
    this.http.get<Usuario[]>("http://localhost:3000/usuario")
      .subscribe(
        (users) =>{
          console.log(users);
          this.usuarios = users;
          this.load.dismiss();
        },
        (err: HttpErrorResponse) =>{
          this.load.dismiss();
          this.alert.present();
        }
      );
  }

  avancarCadastroUsuario(){
    this.navCtrl.push(CadastroUsuarioPage.name)
  }

  seleciona(user : Usuario){
    this.navCtrl.push(VisualizarUsuarioPage.name, {
      usuarioSelecionado: user
    });
  }

}
