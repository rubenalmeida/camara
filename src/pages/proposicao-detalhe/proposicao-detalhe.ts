import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {ServiceProvider} from "../../providers/service-provider";

@Component({
  selector: 'page-proposicao-detalhe',
  templateUrl: 'proposicao-detalhe.html',
})
export class ProposicaoDetalhePage {

  proposicao = {};
  status = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {

    let id = this.navParams.get('propId');
    console.log(id);
    this.service.getProposicoes(null, id).subscribe(data => {
      this.proposicao = data.dados;
      this.status = data.dados.statusProposicao;
      console.log(this.status['descricaoSituacao'])
    })
  }

  dismiss(data) {
    this.viewCtrl.dismiss(data);
  }
}
