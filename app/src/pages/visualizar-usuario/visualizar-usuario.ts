import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Usuario } from '../../modules/usuario';
import { HttpClient } from '@angular/common/http';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';

/**
 * Generated class for the VisualizarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-usuario',
  templateUrl: 'visualizar-usuario.html',
})
export class VisualizarUsuarioPage {

  private usuario : Usuario;
  load;
  conteudoAlert = {titulo:'', mensagem:''}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _alertCtrl: AlertController,
    private _loadCtr: LoadingController,
    private _http: HttpClient,
  ) {
    
    this.usuario = this.navParams.get('usuarioSelecionado');
    this.load = _loadCtr.create(
      {content: "Carregando..."}
    );

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarUsuarioPage');
  }

  confirma() {
    let alert = this._alertCtrl.create({
      title: 'Excluir Usuário',
      message: 'Você tem certeza que deseja excluir este usuário?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            alert.dismiss;
            this.excluir();
          }
        }
      ]
    });
    alert.present();
  }

  excluir(){
    this.load.present();
    console.log("http://localhost:3000/usuario/" + this.usuario.id);
    this._http.delete("http://localhost:3000/usuario/" + this.usuario.id)
    .subscribe(
      (message) => {
        console.log(message);
        this.load.dismiss();
        this.alertFinal();
        this.conteudoAlert.mensagem = "Deletado";
        this.conteudoAlert.titulo = "Deletado com sucesso"
      },
      (err) => {
        console.log(err);
      }
    );
  }

  alertFinal() {
    let alert = this._alertCtrl.create({
      title: "Sucesso",
      subTitle: "Excluído com sucesso!",
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  editar(){
    this.navCtrl.push(CadastroUsuarioPage.name, {
      usuarioSelecionado: this.usuario
    });
  }

}
