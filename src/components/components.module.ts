import { NgModule } from '@angular/core';
import { DespesasDeputadoComponent } from './despesas-deputado/despesas-deputado';
import { ProposicoesDeputadoComponent } from './proposicoes-deputado/proposicoes-deputado';
@NgModule({
	declarations: [DespesasDeputadoComponent,
    ProposicoesDeputadoComponent],
	imports: [],
	exports: [DespesasDeputadoComponent,
    ProposicoesDeputadoComponent]
})
export class ComponentsModule {}
