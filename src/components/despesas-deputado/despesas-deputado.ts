import {Component, Input} from '@angular/core';
import {Chart} from 'chart.js';
import {ServiceProvider} from "../../providers/service-provider";

@Component({
  selector: 'despesas-deputado',
  templateUrl: 'despesas-deputado.html'
})
export class DespesasDeputadoComponent {

  @Input('deputado') idDeputado;

  public ano: any = new Date().getFullYear();
  public mes: any = new Date().getUTCMonth();
  despesas = [];
  meses = ['',
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'];

  constructor(public service: ServiceProvider) {
  }

  ngOnInit() {
    this.service.getDespesas(this.idDeputado, this.ano).subscribe(data => {
      this.despesas = data.dados;
      //this.dataChart = this.setData(data.dados);
      console.log(this.despesas);
    });

    //this.barChart = new Chart(this.barCanvas.nativeElement, {
//
    //  type: 'doughnut',
    //  data: {
    //    labels: ['MANUTENÇÃO DE ESCRITÓRIO', 'COMBUSTIVEL'],
    //    datasets: [{
    //      label: 'R$ em despesas',
    //      data: [10000, 3000],
    //      backgroundColor: [
    //        'rgba(255, 99, 132, 0.2)',
    //        'rgba(54, 162, 235, 0.2)'
    //      ],
    //      borderColor: [
    //        'rgba(255,99,132,1)',
    //        'rgba(54, 162, 235, 1)'
    //      ],
    //      borderWidth: 1
    //    }]
    //  },
    //  options: {}
//
    //});

  }
}
