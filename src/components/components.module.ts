import {NgModule} from '@angular/core';
import {DespesasDeputadoComponent} from './despesas-deputado/despesas-deputado';
import {ProposicoesDeputadoComponent} from './proposicoes-deputado/proposicoes-deputado';
import {ServiceProvider} from "../providers/service-provider";

@NgModule({
  declarations: [
    DespesasDeputadoComponent,
    ProposicoesDeputadoComponent,
    ServiceProvider
  ],
  imports: [],
  exports: [
    DespesasDeputadoComponent,
    ProposicoesDeputadoComponent
  ]
})
export class ComponentsModule {
}
