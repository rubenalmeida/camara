import { Component } from '@angular/core';

/**
 * Generated class for the DespesasDeputadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'despesas-deputado',
  templateUrl: 'despesas-deputado.html'
})
export class DespesasDeputadoComponent {

  text: string;

  constructor() {
    console.log('Hello DespesasDeputadoComponent Component');
    this.text = 'Despesas do deputado blablablabla';
  }

}
