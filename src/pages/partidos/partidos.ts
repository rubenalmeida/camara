import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPartidoPage } from '../perfil-partido/perfil-partido';

@Component({
  selector: 'page-partidos',
  templateUrl: 'partidos.html'
})
export class PartidosPage {

  constructor(public navCtrl: NavController) {
  }
  goToPerfilPartido(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPartidoPage);
  }
}
