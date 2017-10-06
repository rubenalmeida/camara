import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilDeputadoPage } from '../perfil-deputado/perfil-deputado';

@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html'
})
export class DespesasPage {

  constructor(public navCtrl: NavController) {
  }
  goToPerfilDeputado(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilDeputadoPage);
  }
}
