import { Component } from '@angular/core';

/**
 * Generated class for the ProposicoesDeputadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'proposicoes-deputado',
  templateUrl: 'proposicoes-deputado.html'
})
export class ProposicoesDeputadoComponent {

  text: string;

  constructor() {
    console.log('Hello ProposicoesDeputadoComponent Component');
    this.text = 'proposicoes do deputado aqui. bla bla bla bla';
  }

}
