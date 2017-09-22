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

  getBlocos() {
    return this.http.get(this.api + 'blocos?ordem=ASC&ordenarPor=nome').subscribe(data => {
      console.log(data);
    });
  }

  getPartidos() {
    return this.http.get(this.api + 'partidos?ordem=ASC&ordenarPor=sigla').map(res => res.json());
  }

  getEventos() {
    return this.http.get(this.api + 'eventos?ordem=ASC&ordenarPor=id').map(res => res.json());
  }

}
