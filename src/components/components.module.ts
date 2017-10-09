import { NgModule } from '@angular/core';
import { DespesasDeputadoComponent } from './despesas-deputado/despesas-deputado';
import { ProposicoesDeputadoComponent } from './proposicoes-deputado/proposicoes-deputado';
import { ExpandableComponent } from './expandable/expandable';
@NgModule({
	declarations: [DespesasDeputadoComponent,
    ProposicoesDeputadoComponent,
    ExpandableComponent],
	imports: [],
	exports: [DespesasDeputadoComponent,
    ProposicoesDeputadoComponent,
    ExpandableComponent]
})
export class ComponentsModule {}
