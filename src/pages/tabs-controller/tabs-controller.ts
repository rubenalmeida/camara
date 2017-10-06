import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProposicoesPage } from '../proposicoes/proposicoes';
import { PrincipalPage } from '../principal/principal';
import { DeputadosPage } from '../deputados/deputados';
import { PerfilDeputadoPage } from '../perfil-deputado/perfil-deputado';
import { PartidosPage } from '../partidos/partidos';
import { PerfilPartidoPage } from '../perfil-partido/perfil-partido';
import { DespesasPage } from '../despesas/despesas';
import { OrgaosPage } from '../orgaos/orgaos';
import { EventosPage } from '../eventos/eventos';
import { VotacoesPage } from '../votacoes/votacoes';
import { NotCiasPage } from '../not-cias/not-cias';
import { TVCMaraPage } from '../t-vcmara/t-vcmara';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = PrincipalPage;
  tab2Root: any = DeputadosPage;
  tab3Root: any = PartidosPage;
  tab4Root: any = ProposicoesPage;
  tab5Root: any = NotCiasPage;
  tab6Root: any = TVCMaraPage;

  constructor(public navCtrl: NavController) {
  }
  goToProposicoes(params){
    if (!params) params = {};
    this.navCtrl.push(ProposicoesPage);
  }goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }goToDeputados(params){
    if (!params) params = {};
    this.navCtrl.push(DeputadosPage);
  }goToPerfilDeputado(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilDeputadoPage);
  }goToPartidos(params){
    if (!params) params = {};
    this.navCtrl.push(PartidosPage);
  }goToPerfilPartido(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPartidoPage);
  }goToDespesas(params){
    if (!params) params = {};
    this.navCtrl.push(DespesasPage);
  }goToOrgaos(params){
    if (!params) params = {};
    this.navCtrl.push(OrgaosPage);
  }goToEventos(params){
    if (!params) params = {};
    this.navCtrl.push(EventosPage);
  }goToVotacoes(params){
    if (!params) params = {};
    this.navCtrl.push(VotacoesPage);
  }goToNotCias(params){
    if (!params) params = {};
    this.navCtrl.push(NotCiasPage);
  }
}
