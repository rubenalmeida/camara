import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ServiceProvider} from "../../providers/service-provider";
import { ModalController } from 'ionic-angular';
import { ProposicaoDetalhePage } from '../proposicao-detalhe/proposicao-detalhe';

@Component({
  selector: 'page-proposicoes',
  templateUrl: 'proposicoes.html'
})
export class ProposicoesPage {

  public ano: any = new Date().getFullYear();
  proposicoes = [];
  tipos = [];

  constructor(public navCtrl: NavController, public service: ServiceProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.service.getProposicoes(this.ano).subscribe(data => {
      this.proposicoes = data.dados;
      console.log(this.proposicoes)
    });
  }

  presentProfileModal(id) {
    const profileModal = this.modalCtrl.create(ProposicaoDetalhePage, { propId: id });
    profileModal.present();
  }
}
