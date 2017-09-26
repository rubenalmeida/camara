import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeputadosPage } from '../deputados/deputados';
import { PerfilDeputadoPage } from '../perfil-deputado/perfil-deputado';
import { PartidosPage } from '../partidos/partidos';
import { PerfilPartidoPage } from '../perfil-partido/perfil-partido';
import { LegislaturaPage } from '../legislatura/legislatura';
import { BlocosPage } from '../blocos/blocos';
import { OrgaosPage } from '../orgaos/orgaos';
import { FrentesPage } from '../frentes/frentes';
import { EventosPage } from '../eventos/eventos';
import { ProposicoesPage } from '../proposicoes/proposicoes';
import { VotacoesPage } from '../votacoes/votacoes';
import { ReferenciasPage } from '../referencias/referencias';
import { AtualizacoesPage } from '../atualizacoes/atualizacoes';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

  constructor(public navCtrl: NavController) {
  }
  goToDeputados(params){
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
  }goToLegislatura(params){
    if (!params) params = {};
    this.navCtrl.push(LegislaturaPage);
  }goToBlocos(params){
    if (!params) params = {};
    this.navCtrl.push(BlocosPage);
  }goToOrgaos(params){
    if (!params) params = {};
    this.navCtrl.push(OrgaosPage);
  }goToFrentes(params){
    if (!params) params = {};
    this.navCtrl.push(FrentesPage);
  }goToEventos(params){
    if (!params) params = {};
    this.navCtrl.push(EventosPage);
  }goToProposicoes(params){
    if (!params) params = {};
    this.navCtrl.push(ProposicoesPage);
  }goToVotacoes(params){
    if (!params) params = {};
    this.navCtrl.push(VotacoesPage);
  }goToReferencias(params){
    if (!params) params = {};
    this.navCtrl.push(ReferenciasPage);
  }goToAtualizacoes(params){
    if (!params) params = {};
    this.navCtrl.push(AtualizacoesPage);
  }
}
