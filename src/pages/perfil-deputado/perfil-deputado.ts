import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {ServiceProvider} from "../../providers/service-provider";
import {Observable} from "rxjs";
import {Chart} from 'chart.js';

@Component({
  selector: 'page-perfil-deputado',
  templateUrl: 'perfil-deputado.html'
})
export class PerfilDeputadoPage {

  deputado = [];
  detalhe = [];
  gabinete = [];
  tab: string = 'perfil';
  idDeputado: number;
  proposicoes = [];
  tiposProposicao = [];
  limit = 10;
  public ano: any = new Date().getFullYear();

  constructor(public navCtrl: NavController, public params: NavParams, public service: ServiceProvider, public loadingCtrl: LoadingController) {
    this.idDeputado = this.params.data;
    console.log(this.idDeputado, 'iddddddd');
    this.presentLoading()
  }

  ionViewDidLoad() {
    let id = this.params.data;
    this.service.getPerfilDeputado(id).subscribe(data => {
      this.deputado = data.dados;
      this.detalhe = data.dados.ultimoStatus;
      this.gabinete = data.dados.ultimoStatus.gabinete;
    });

    this.service.getProposicoesAutor(this.idDeputado, this.ano).subscribe(data => {
      this.proposicoes = data.dados;
    });

    this.service.getReferencias('tiposProposicao').subscribe(data => {
      this.tiposProposicao = data.dados;
    })

  }

  doInfinite(): Promise<any> {

    return new Promise((resolve) => {
      setTimeout(() => {
        this.limit += 10;
        resolve();
      }, 800);
    })
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Carregando deputado...",
      duration: 1000
    });
    loader.present();
  }

}
