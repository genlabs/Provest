import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

    constructor() { }

    monthlyPayment(interestRate:number, duration:number, pledge:number) {
        let rate = interestRate / 12;
        let month = duration * 12;
        let initCap = pledge;
        var plusR = Math.pow(1 + (rate / 100), 0-month);
        
        return (rate /100 )/ (1 - plusR) * initCap;
    }

    fillInterestTable(loan:number, mir:number, c:number,n:number) {
        var interest:number[] = [];
        var p:number[] = [];
        var  d:number[] = [];
        interest[0] = loan * mir;
        p[0] = c - interest[0];
        d[0] = loan - p[0];

        for (var i=1; i <n ; i++) {
            interest[i] = d[i-1] * mir;
            p[i] = c - interest[i];
            d[i] = d[i-1] - p[i];
        }

        return {
            i: interest,
            p: p,
            d: d
        };

    }
}
