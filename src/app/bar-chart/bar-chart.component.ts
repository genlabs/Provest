import { Component, OnInit, Input } from '@angular/core';
import { Mortgage } from '../mortgage';
import { UtilService } from '../util.service';



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
        {data:[], label: 'accumulated interest gain'}
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
        
        this.monthlyPayment = this.util.monthlyPayment(rate, month, initCap) ;//(rate /100 )/ (1 - plusR) * initCap;
        
        let rateTable = this.util.fillInterestTable(initCap, rate/100, this.monthlyPayment, month);
        
        for (var i = 0; i < m.duration; i++) {
            this.barChartData[0].data.push(this.monthlyPayment * i * 12);
            this.barChartLabels.push('year ' + i + 1);
        }
    }



}
