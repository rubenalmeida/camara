import { NgModule } from '@angular/core';
import { DespesasDeputadoComponent } from './despesas-deputado/despesas-deputado';
import { ProposicoesDeputadoComponent } from './proposicoes-deputado/proposicoes-deputado';
import { AccordionComponent } from './accordion/accordion';

@NgModule({
	declarations: [
	  DespesasDeputadoComponent,
    ProposicoesDeputadoComponent,
    AccordionComponent,
    ],

	imports: [],
	exports: [
	  DespesasDeputadoComponent,
    ProposicoesDeputadoComponent,
    AccordionComponent,
    ]
})
export class ComponentsModule {}
