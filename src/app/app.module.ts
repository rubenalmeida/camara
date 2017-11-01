import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { PrincipalPage } from '../pages/principal/principal';
import { PartidosPage } from '../pages/partidos/partidos';
import { PerfilPartidoPage } from '../pages/perfil-partido/perfil-partido';
import { PerfilDeputadoPage } from '../pages/perfil-deputado/perfil-deputado';
import { DeputadosPage } from '../pages/deputados/deputados';
import { TVCMaraPage } from '../pages/tvcamara/t-vcmara';
import { NotCiasPage } from '../pages/noticias/noticias';
import { OrgaosPage } from '../pages/orgaos/orgaos';
import { EventosPage } from '../pages/eventos/eventos';
import { ProposicoesPage } from '../pages/proposicoes/proposicoes';
import { ProposicaoDetalhePage } from '../pages/proposicao-detalhe/proposicao-detalhe';
import { VotacoesPage } from '../pages/votacoes/votacoes';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { DespesasPage } from '../pages/despesas/despesas';
import { BemVindoPage } from '../pages/bem-vindo/bem-vindo';
import {DespesasDeputadoComponent} from "../components/despesas-deputado/despesas-deputado";
import {ProposicoesDeputadoComponent} from "../components/proposicoes-deputado/proposicoes-deputado";
import {ServiceProvider} from '../providers/service-provider';
import {AccordionComponent} from "../components/accordion/accordion";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    PartidosPage,
    PerfilPartidoPage,
    PerfilDeputadoPage,
    DeputadosPage,
    TVCMaraPage,
    NotCiasPage,
    OrgaosPage,
    EventosPage,
    ProposicoesPage,
    ProposicoesPage,
    ProposicaoDetalhePage,
    VotacoesPage,
    TabsControllerPage,
    LoginPage,
    DespesasPage,
    BemVindoPage,
    DespesasDeputadoComponent,
    ProposicoesDeputadoComponent,
    AccordionComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    PartidosPage,
    PerfilPartidoPage,
    PerfilDeputadoPage,
    DeputadosPage,
    TVCMaraPage,
    NotCiasPage,
    OrgaosPage,
    EventosPage,
    ProposicoesPage,
    ProposicaoDetalhePage,
    VotacoesPage,
    TabsControllerPage,
    LoginPage,
    DespesasPage,
    BemVindoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
