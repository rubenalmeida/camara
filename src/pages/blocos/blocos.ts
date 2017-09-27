import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LegislaturaPage} from '../legislatura/legislatura';
import { ServiceProvider } from "../../providers/service-provider";

@Component({
  selector: 'page-blocos',
  templateUrl: 'blocos.html'
})
export class BlocosPage {

  blocos = [];
  constructor(public navCtrl: NavController, public service: ServiceProvider) {
  }

  ionViewDidLoad(){
    this.service.getBlocos().subscribe(data => {
      console.log(data.dados);
      this.blocos = data.dados;
    });
  }

  goToLegislatura(idLegislatura){
    this.navCtrl.push(LegislaturaPage, idLegislatura);
  }

}
