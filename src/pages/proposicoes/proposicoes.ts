import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ServiceProvider} from "../../providers/service-provider";
import {ModalController} from 'ionic-angular';
import {ProposicaoDetalhePage} from '../proposicao-detalhe/proposicao-detalhe';
import apply = Reflect.apply;

@Component({
  selector: 'page-proposicoes',
  templateUrl: 'proposicoes.html'
})
export class ProposicoesPage {

  public ano: any = new Date().getFullYear();
  proposicoes = [];
  tipos = [];
  pagina = 1;
  constructor(public navCtrl: NavController, public service: ServiceProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.getProposicoes(1);
  }

  getProposicoes(pagina){
    this.service.getProposicoes(this.ano, null, pagina).subscribe(data => {
      this.proposicoes = data.dados;
      console.log(this.proposicoes)
    });
  }


  presentProfileModal(id) {
    const profileModal = this.modalCtrl.create(ProposicaoDetalhePage, {propId: id});
    profileModal.present();
  }

  doInfinite(): Promise<any> {

    return new Promise((resolve) => {
      setTimeout(() => {
        this.pagina++;
        let pg = this.pagina;
        console.log(pg)

        this.service.getProposicoes(this.ano, null, pg).subscribe(data => {
          this.proposicoes.push.apply(this.proposicoes, data.dados);
          console.log(this.proposicoes)
        });
        resolve();
      }, 800);
    })
  }
}

