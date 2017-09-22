import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilDeputadoPage } from '../perfil-deputado/perfil-deputado';

@Component({
  selector: 'page-deputados',
  templateUrl: 'deputados.html'
})
export class DeputadosPage {

  constructor(public navCtrl: NavController) {
  }
  goToPerfilDeputado(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilDeputadoPage);
  }
}
