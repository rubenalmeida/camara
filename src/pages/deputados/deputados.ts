import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilDeputadoPage } from '../perfil-deputado/perfil-deputado';
// import { PerfilPartidoPage } from '../perfil-partido/perfil-partido';
import { ServiceProvider } from "../../providers/service-provider";

@Component({
  selector: 'page-deputados',
  templateUrl: 'deputados.html'
})
export class DeputadosPage {

  deputados: any[];

  constructor(public navCtrl: NavController,  public service: ServiceProvider) {
  }

  ionViewDidLoad(){
    this.service.getDeputados().subscribe(data =>{
      console.log(data.dados);
      this.deputados = data.dados;
    });
  }

  goToPerfilDeputado(params){
    console.log(params);
    if (!params) params = {};
    this.navCtrl.push(PerfilDeputadoPage, params);
  }

}
