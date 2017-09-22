import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeputadosPage } from '../deputados/deputados';
import { PerfilDeputadoPage } from '../perfil-deputado/perfil-deputado';
import { LegislaturaPage } from '../legislatura/legislatura';
import { PrincipalPage } from '../principal/principal';
import { PartidosPage } from '../partidos/partidos';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = PrincipalPage;
  tab2Root: any = PartidosPage;
  tab3Root: any = DeputadosPage;
  tab4Root: any = LegislaturaPage;
  constructor(public navCtrl: NavController) {
  }
  goToDeputados(params) {
    if (!params) params = {};
    this.navCtrl.push(DeputadosPage);
  }
}
