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
  pagina = 1;
  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    let array = [];
    for(let i = 1; i < 7;  i++){
      this.service.getDeputados(i).subscribe(data => {
        array.push.apply(array, data.dados);
      });
      console.log(array);
    }
    this.deputados = array;
  }


  ionViewDidLoad() {
    //this.deputados = this.tmpDeputados;
    //console.log(this.deputados);
  }

  goToPerfilDeputado(params) {
    console.log(params);
    if (!params) params = {};
    this.navCtrl.push(PerfilDeputadoPage, params);
  }

  doInfinite(infiniteScroll) {
    let length = this.deputados.length;
    let newCount = length + 10;
    if(length >= 50){
      this.pagina++;
      newCount = 10
    }
    let filtros = '&itens=' + newCount + '&pagina=' + this.pagina;

    setTimeout(() => {
      //this.getDeputados(filtros);
      infiniteScroll.complete();
    }, 1000);
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
