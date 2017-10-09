import {Component, ViewChild, Input} from '@angular/core';
import {Chart} from 'chart.js';
import {ServiceProvider} from "../../providers/service-provider";

@Component({
  selector: 'despesas-deputado',
  templateUrl: 'despesas-deputado.html'
})
export class DespesasDeputadoComponent {

  @ViewChild('barCanvas') barCanvas;
  //@Input('deputado') idDeputado;

  barChart: any;
  public ano: any = new Date().getFullYear();
  public mes: any = new Date().getUTCMonth();
  despesas = [];
  dataChart = [];

  constructor(public service: ServiceProvider) {
    for (let i = 0; i < 10; i++) {
      this.despesas.push(i)
    }
  }

  ngOnInit() {
    this.service.getDespesas(123, this.ano).subscribe(data => {
      //this.despesas = data.dados;
      //this.dataChart = this.setData(data.dados);
      console.log(this.despesas);
    });

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ['MANUTENÇÃO DE ESCRITÓRIO', 'COMBUSTIVEL'],
        datasets: [{
          label: 'R$ em despesas',
          data: [10000, 3000],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {}

    });

  }


  setData(despesas) {
    //let obChart = [];
    //let prevValue;
    //despesas.forEach(function (item, index) {
//
    //  let valor = item.valorLiquido;
    //  let desc = item.tipoDespesa;
    //  let temp = [];
    //  if (index > 0) {
    //    let prevIndex = index - 1;
    //    prevValue = obChart[prevIndex][desc];
//
    //    if (obChart[prevIndex][desc]) {
    //      console.log(obChart[prevIndex].indexOf(valor));
    //    }
    //  }
    //  temp[desc] = valor;
    //  obChart.push(temp);
//
    //});
//
    //return obChart;

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
