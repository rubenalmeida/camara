import {Component, Input} from '@angular/core';
import {Chart} from 'chart.js';
import {ServiceProvider} from "../../providers/service-provider";

@Component({
  selector: 'proposicoes-deputado',
  templateUrl: 'proposicoes-deputado.html'
})
export class ProposicoesDeputadoComponent {

  @Input('deputado') deputado;

  proposicoes = [];
  pagina: number;
  public ano: any = new Date().getFullYear();

  constructor(public service: ServiceProvider) {
    this.pagina = 1;
    this.getProposicoes(1);
  }

  getProposicoes(pagina){
    console.log(this.pagina)
    console.log(this.deputado, 'proposicoeees');

    this.service.getProposicoesAutor(this.deputado, this.ano, pagina).subscribe(data => {
      this.proposicoes = data.dados;
    })
  }

  doInfinite(): Promise<any> {

    return new Promise((resolve) => {
      setTimeout(() => {
        this.pagina++;
        this.getProposicoes(this.pagina);
        resolve();
      }, 800);
    })
  }

}
