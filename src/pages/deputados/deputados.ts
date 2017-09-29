import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PerfilDeputadoPage} from '../perfil-deputado/perfil-deputado';
// import { PerfilPartidoPage } from '../perfil-partido/perfil-partido';
import {ServiceProvider} from "../../providers/service-provider";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'page-deputados',
  templateUrl: 'deputados.html'
})
export class DeputadosPage {

  searchQuery: string = '';
  deputados = [];
  tmpDeputados = [];

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    this.getDeputados();
  }


  getDeputados(count = '') {
     this.service.getDeputados(count).subscribe(data => {
      console.log(data.dados);
       this.tmpDeputados =  data.dados;
       this.deputados = this.tmpDeputados;

     })
  }

  goToPerfilDeputado(params) {
    console.log(params);
    if (!params) params = {};
    this.navCtrl.push(PerfilDeputadoPage, params);
  }

  doInfinite(infiniteScroll) {
    let newCount = this.deputados.length + 10;
    setTimeout(() => {
      this.getDeputados('&itens=' + newCount);
      infiniteScroll.complete();
    }, 500);
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.deputados = this.tmpDeputados.filter((item) => {
        return (item['nome'].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.deputados = this.tmpDeputados;
    }
  }

}
