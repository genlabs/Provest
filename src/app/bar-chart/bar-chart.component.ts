import { Component, OnInit, Input } from '@angular/core';
import { Mortgage } from '../mortgage';
import { UtilService } from '../util.service';

import 'rxjs/Rx';

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
    private _mortgage:Mortgage;
    private monthlyPayment:number;
    public barChartType:string = 'bar';
    private i:number[] = [];
    private p:number[] = [];
    private d:number[] = [];

    private barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
      };

    private barChartData:any[] = [
        {data:[], label: 'Accumulated interest gain (base on 100k investment)'}
    ];
    private barChartLabels:string[] = [];
    private barChartLegend:boolean = true;

    constructor(private util:UtilService) { }

 
    ngOnInit() {
       
    }

    @Input()
    set mortgage(m:Mortgage) {
        this._mortgage = m;
        let rate = m.interestRate / 12;
        let month = m.duration * 12;
        let initCap = m.pledge;
        var plusR = Math.pow(1 + (rate / 100), 0-month);
        
        this.monthlyPayment = this.util.monthlyPayment(m.interestRate, m.duration, m.pledge) ;//(rate /100 )/ (1 - plusR) * initCap;
        
        let rateTable = this.util.fillInterestTable(initCap, rate/100, this.monthlyPayment, month);
       
        for (var i = 0; i < m.duration; i++) {
            var yearInterest =0;
            for (var j=i * 12; j < 12 * (i + 1); j++) {
                yearInterest += rateTable.i[j];
            }
            if (i == 0) {
                this.barChartData[0].data.push(yearInterest * 100000/m.pledge);
            }
            else {
                this.barChartData[0].data.push(yearInterest * 100000/m.pledge + this.barChartData[0].data[i-1]);
            }
            this.barChartLabels.push('year ' + (i + 1));
        }
    }



}
