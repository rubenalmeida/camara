import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { ServiceProvider } from "../../providers/service-provider";

@Component({
  selector: 'page-legislatura',
  templateUrl: 'legislatura.html'
})
export class LegislaturaPage {

  legislaturas: any[];

  constructor(public navCtrl: NavController, public params: NavParams, public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.service.getLegislaturas(this.params.data).subscribe(data => {
      console.log(data.dados);
      this.legislaturas = data.dados;
    });
  }

}
