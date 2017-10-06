import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { DeputadosPage } from '../deputados/deputados';
import { PartidosPage } from '../partidos/partidos';
import { PerfilPartidoPage } from '../perfil-partido/perfil-partido';
import { DespesasPage } from '../despesas/despesas';
import { OrgaosPage } from '../orgaos/orgaos';
import { EventosPage } from '../eventos/eventos';
import { ProposicoesPage } from '../proposicoes/proposicoes';
import { VotacoesPage } from '../votacoes/votacoes';
import { PrincipalPage } from '../principal/principal';
import {PerfilDeputadoPage} from "../perfil-deputado/perfil-deputado";


@Component({
  selector: 'page-bem-vindo',
  templateUrl: 'bem-vindo.html'
})
export class BemVindoPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
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
  }goToProposicoes(params){
    if (!params) params = {};
    this.navCtrl.push(ProposicoesPage);
  }goToVotacoes(params){
    if (!params) params = {};
    this.navCtrl.push(VotacoesPage);
  }

}
