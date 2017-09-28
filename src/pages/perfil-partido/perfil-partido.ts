import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service-provider";

@Component({
  selector: 'page-perfil-partido',
  templateUrl: 'perfil-partido.html'
})
export class PerfilPartidoPage {

  partido: any;

  constructor(public navCtrl: NavController, public params: NavParams, public service: ServiceProvider) {
  }

  ionViewDidLoad(){
    console.log(this.params.data);
    this.service.getPerfilPartido(this.params.data).subscribe(data =>{
      console.log(data.dados);
      this.partido = data.dados;
    });
  }

}
