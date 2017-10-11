import {Component, Input} from '@angular/core';
import {ServiceProvider} from "../../providers/service-provider";

@Component({
  selector: 'proposicoes-deputado',
  templateUrl: 'proposicoes-deputado.html'
})
export class ProposicoesDeputadoComponent {

  @Input('deputado') idDeputado;

  proposicoes = [];
  public ano: any = new Date().getFullYear();

  constructor(public service: ServiceProvider) {
    console.log(this.idDeputado, 'proposicoeees')
    this.service.getProposicoes(this.ano).subscribe(data => {
      this.proposicoes = data.dados;
    });
  }

}
