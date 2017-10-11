import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ServiceProvider} from "../../providers/service-provider";

@Component({
  selector: 'page-proposicoes',
  templateUrl: 'proposicoes.html'
})
export class ProposicoesPage {

  public ano: any = new Date().getFullYear();
  proposicoes = [];
  tipos = [];

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    this.service.getProposicoes(this.ano).subscribe(data => {
      this.proposicoes = data.dados;
      this.getTipos();
      console.log(this.proposicoes)
    });
  }

  getTipos() {
    this.service.getReferencias('tiposProposicao').subscribe(data => {
      this.tipos = data.dados;
      console.log(this.tipos[0].nome)

    })
  }
}
