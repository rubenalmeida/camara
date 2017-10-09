import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPartidoPage } from '../perfil-partido/perfil-partido';
import { ServiceProvider } from "../../providers/service-provider";

import {jsonpFactory} from "@angular/http/src/http_module";

@Component({
  selector: 'page-partidos',
  templateUrl: 'partidos.html'
})
export class PartidosPage {

  partidos: any[];

  constructor(public navCtrl: NavController, public service: ServiceProvider ) {

  }

  ionViewDidLoad(){
    this.service.getPartidos().subscribe(data =>{
      this.partidos = data.dados;
    });
  }

  goToPerfilPartido(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPartidoPage, params);
  }

}
