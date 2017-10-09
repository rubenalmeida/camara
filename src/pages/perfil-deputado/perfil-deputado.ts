import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {ServiceProvider} from "../../providers/service-provider";
import {Observable} from "rxjs";

import {DespesasPage} from "../despesas/despesas";
import {ProposicoesPage} from "../proposicoes/proposicoes";
import { Chart } from 'chart.js';

@Component({
  selector: 'page-perfil-deputado',
  templateUrl: 'perfil-deputado.html'
})
export class PerfilDeputadoPage {

  deputado = [];
  detalhe = [];
  tab: string = 'perfil';
  idDeputado = 0;
  constructor(public navCtrl: NavController, public params: NavParams, public service: ServiceProvider, public loadingCtrl: LoadingController) {
    this.presentLoading()
  }

  ionViewDidLoad() {
    let id = this.params.data;
    this.service.getPerfilDeputado(id).subscribe(data => {
      this.deputado = data.dados;
      this.detalhe = data.dados.ultimoStatus;
      this.idDeputado = data.dados.id;
    });



  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Carregando deputado...",
      duration: 1000
    });
    loader.present();
  }

}
