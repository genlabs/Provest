import { Component, OnInit, Input } from '@angular/core';
import { Mortgage } from '../mortgage';




@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
    private _mortgage:Mortgage;
    private monthlyPayment:number;
    public barChartType:string = 'bar';
    private barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
      };

    private barChartData:any[] = [
        {data:[], label: 'accumulated interest gain'}
    ];
    private barChartLabels:string[] = [];
    private barChartLegend:boolean = true;

    constructor() { }

 
    ngOnInit() {
       
    }

    @Input()
    set mortgage(m:Mortgage) {
        this._mortgage = m;
        let rate = m.interestRate / 12;
        let month = m.duration * 12;
        let initCap = m.pledge;
        var plusR = Math.pow(1 + (rate / 100), 0-month);
    
        this.monthlyPayment = (rate /100 )/ (1 - plusR) * initCap;
     

        for (var i = 0; i < m.duration; i++) {
            this.barChartData[0].data.push(this.monthlyPayment * i * 12);
            this.barChartLabels.push('year ' + i + 1);

        }



    }

}
