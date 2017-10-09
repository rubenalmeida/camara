import {Component, ViewChild, Input} from '@angular/core';
import {Chart} from 'chart.js';
import {ServiceProvider} from "../../providers/service-provider";

@Component({
  selector: 'despesas-deputado',
  templateUrl: 'despesas-deputado.html'
})
export class DespesasDeputadoComponent {

  @ViewChild('barCanvas') barCanvas;
  @Input('deputado') idDeputado;

  barChart: any;
  public ano: any = new Date().getFullYear();
  public mes: any = new Date().getUTCMonth();
  despesas = [];
  dataChart = [];

  constructor(public service: ServiceProvider) {
  }

  ngOnInit() {
    //this.barChart = new Chart(this.barCanvas.nativeElement, {
//
    //  type: 'doughnut',
    //  data: {
    //    labels: ['Valor'],
    //    datasets: [{
    //      label: 'R$ em despesas',
    //      data: [100],
    //      backgroundColor: [
    //        'rgba(255, 99, 132, 0.2)',
    //        'rgba(54, 162, 235, 0.2)',
    //        'rgba(255, 206, 86, 0.2)',
    //        'rgba(75, 192, 192, 0.2)',
    //        'rgba(153, 102, 255, 0.2)',
    //        'rgba(255, 159, 64, 0.2)'
    //      ],
    //      borderColor: [
    //        'rgba(255,99,132,1)',
    //        'rgba(54, 162, 235, 1)',
    //        'rgba(255, 206, 86, 1)',
    //        'rgba(75, 192, 192, 1)',
    //        'rgba(153, 102, 255, 1)',
    //        'rgba(255, 159, 64, 1)'
    //      ],
    //      borderWidth: 1
    //    }]
    //  },
    //  options: {
    //    scales: {
    //      yAxes: [{
    //        ticks: {
    //          beginAtZero: true
    //        }
    //      }]
    //    }
    //  }
//
    //});

    this.service.getDespesas(this.idDeputado, this.ano).subscribe(data => {
      this.despesas = data.dados;
      //this.dataChart = this.setData(data.dados);
      console.log(this.despesas);
    });

  }


  setData(despesas) {
    let obChart = [];
    let prevValue;
    despesas.forEach(function (item, index) {

      let valor = item.valorLiquido;
      let desc = item.tipoDespesa;
      let temp = [];
      if (index > 0) {
        let prevIndex = index - 1;
        prevValue = obChart[prevIndex][desc];

        if (obChart[prevIndex][desc]) {
          console.log(obChart[prevIndex].indexOf(valor));
        }
      }
      temp[desc] = valor;
      obChart.push(temp);

    });

    return obChart;

    //let ob = {
    //  "ano": "2017",
    //  "mes": "8",
    //  "tipoDespesa": "MANUTENÇÃO DE ESCRITÓRIO DE APOIO À ATIVIDADE PARLAMENTAR",
    //  "idDocumento": "6357571",
    //  "tipoDocumento": "Nota Fiscal",
    //  "idTipoDocumento": "0",
    //  "dataDocumento": "2017-08-07",
    //  "numDocumento": "2161",
    //  "valorDocumento": "20",
    //  "urlDocumento": "",
    //  "nomeFornecedor": "CHAVEIRO ASAS",
    //  "cnpjCpfFornecedor": "12556406000134",
    //  "valorLiquido": "20",
    //  "valorGlosa": "0",
    //  "numRessarcimento": "5927",
    //  "idLote": "1411812",
    //  "parcela": "0"
    //};
  }
}
