import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ServiceProvider} from "../../providers/service-provider";
import {PerfilDeputadoPage} from "../perfil-deputado/perfil-deputado";

@Component({
  selector: 'page-perfil-partido',
  templateUrl: 'perfil-partido.html'
})
export class PerfilPartidoPage {

  partido = [];
  deputados = [];
  lider = [];
  constructor(public navCtrl: NavController, public params: NavParams, public service: ServiceProvider) {
    this.service.getPerfilPartido(this.params.data, null).subscribe(data => {
      this.partido = data.dados;
      this.getDeputados();
    });
  }

  getDeputados() {
    this.service.getPerfilPartido(null, this.partido['status'].uriMembros).subscribe(data => {
      this.deputados = data.dados;
      console.log(this.deputados);
    });
    this.lider = this.partido['status'].lider;
    console.log(this.lider);
  }

  goToPerfilDeputado(params, uri = null) {
    if (!params) params = {};
    if (uri) params = {uri: uri};
    this.navCtrl.push(PerfilDeputadoPage, params);
  }
}
