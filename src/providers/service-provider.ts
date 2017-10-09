import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  api: string = 'https://dadosabertos.camara.leg.br/api/v2/';

  constructor(public http: Http) {
  }

  getBlocos(filtros = '') {
    return this.http.get(this.api + 'blocos' + filtros).map(res => res.json());
  }

  getPartidos() {
    return this.http.get(this.api + 'partidos?itens=30&ordem=ASC&ordenarPor=sigla').map(res => res.json());
  }
  getDetalhesPartidos(idPartido) {
    return this.http.get(this.api + 'partidos/' + idPartido).map(res => res.json());
  }

  getPerfilPartido(idPartido, urlDeputados) {
    if(urlDeputados){
      return this.http.get(urlDeputados).map(res => res.json());
    }
    return this.http.get(this.api + 'partidos/' + idPartido).map(res => res.json());
  }

  getEventos(filtros = '') {
    return this.http.get(this.api + 'eventos?ordem=ASC&ordenarPor=id').map(res => res.json());
  }

  getAtualizacoes(filtros = '') {
    return this.http.get(this.api + '').map(res => res.json());
  }

  getDeputados(pagina) {
    console.log(pagina)
    if(!pagina){
      pagina = 1;
    }
    return this.http.get(this.api + 'deputados?ordem=ASC&ordenarPor=nome&itens=100&pagina='+ pagina).map(res => res.json());
  }

  getPerfilDeputado(idDeputado) {
    return this.http.get(this.api + 'deputados/' + idDeputado).map(res => res.json());
  }

  getDespesas(idDeputado, ano = '', mes = '') {
    console.log(idDeputado);
    return this.http.get(this.api + 'deputados/' + idDeputado + '/despesas?ano=' + ano + '&mes=' + mes).map(res => res.json());
  }

  getFrentes(filtros = '') {
    return this.http.get(this.api + '').map(res => res.json());
  }

  getLegislaturas(idLegislatura = '', filtros = '') {
    return this.http.get(this.api + 'legislaturas/' + idLegislatura).map(res => res.json());
  }

  getOrgaos(filtros = '') {
    return this.http.get(this.api + 'orgaos' + filtros).map(res => res.json());
  }

  getProposicoes(filtros = '') {
    return this.http.get(this.api + '').map(res => res.json());
  }

  getReferencias(filtros = '') {
    return this.http.get(this.api + '').map(res => res.json());
  }

  getVotacoes(filtros = '') {
    return this.http.get(this.api + '').map(res => res.json());
  }

}
