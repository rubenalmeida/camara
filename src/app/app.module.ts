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
import { LegislaturaPage } from '../pages/legislatura/legislatura';
import { BlocosPage } from '../pages/blocos/blocos';
import { OrgaosPage } from '../pages/orgaos/orgaos';
import { FrentesPage } from '../pages/frentes/frentes';
import { EventosPage } from '../pages/eventos/eventos';
import { ProposicoesPage } from '../pages/proposicoes/proposicoes';
import { VotacoesPage } from '../pages/votacoes/votacoes';
import { ReferenciasPage } from '../pages/referencias/referencias';
import { AtualizacoesPage } from '../pages/atualizacoes/atualizacoes';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { Tab7DefaultPagePage } from '../pages/tab7default-page/tab7default-page';

import { ServiceProvider } from "../providers/service-provider";


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
    LegislaturaPage,
    BlocosPage,
    OrgaosPage,
    FrentesPage,
    EventosPage,
    ProposicoesPage,
    VotacoesPage,
    ReferenciasPage,
    AtualizacoesPage,
    TabsControllerPage,
    Tab7DefaultPagePage
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
    LegislaturaPage,
    BlocosPage,
    OrgaosPage,
    FrentesPage,
    EventosPage,
    ProposicoesPage,
    VotacoesPage,
    ReferenciasPage,
    AtualizacoesPage,
    TabsControllerPage,
    Tab7DefaultPagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
