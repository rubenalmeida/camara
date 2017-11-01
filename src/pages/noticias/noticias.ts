import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ServiceProvider} from "../../providers/service-provider";

@Component({
  selector: 'page-not-cias',
  templateUrl: 'noticias.html'
})



export class NotCiasPage {

  youtube : any[];

  constructor(public navCtrl: NavController,public service: ServiceProvider) {

  }
  ionViewDidLoad() {

    this.service.getYoutube().subscribe(data => {
      this.youtube = data.items;
      console.log(this.youtube)
    });


  }
}
