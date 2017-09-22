import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service-provider";
import {jsonpFactory} from "@angular/http/src/http_module";

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

   partidos: any[];

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
  }

  ionViewDidLoad(){
    this.service.getPartidos().subscribe(data =>{
      console.log(data.dados);
      this.partidos = data.dados;
    });
  }


}
