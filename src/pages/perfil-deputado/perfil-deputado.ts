import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service-provider";
import {Observable} from "rxjs";

@Component({
  selector: 'page-perfil-deputado',
  templateUrl: 'perfil-deputado.html'
})
export class PerfilDeputadoPage {

  deputado = [];
  detalhe  = [];

  constructor(public navCtrl: NavController, public params: NavParams, public service: ServiceProvider) {
  }

  ionViewDidLoad(){
    let id = this.params.data;
    this.service.getPerfilDeputado(id).subscribe(data => {
      console.log(data.dados);
      console.log(data.dados.ultimoStatus);
      this.deputado = data.dados ;
      this.detalhe = data.dados.ultimoStatus;
    });
  }

}
