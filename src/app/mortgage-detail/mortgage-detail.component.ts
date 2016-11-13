import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Mortgage } from '../mortgage';
import { MortgagesService } from '../mortgages.service';
import { PendingMortgagesService} from '../pending-mortgages.service';


@Component({
  selector: 'app-mortgage-detail',
  templateUrl: './mortgage-detail.component.html',
  styleUrls: ['./mortgage-detail.component.css']
})
export class MortgageDetailComponent implements OnInit {

    id: number;
    private _test:number = 4;
    private sub: any;
    private _mortgage:Mortgage;
    private _dayleft:number;
    private _invest:boolean;
    private pledgeAmount:number;

    constructor( private route: ActivatedRoute, private router: Router, 
        private mortgageService:MortgagesService , private pendService:PendingMortgagesService) { }


    ngOnInit() {
        this._mortgage = this.route.snapshot.data['_mortgage'];
       this._invest = false;
       this.pledgeAmount = 50000;
       // this.sub = this.route.params.subscribe(params => {
       //     this.id = +params['mId']; // (+) converts string 'id' to a number
       //     this.mortgageService.getMortgageById(this.id).then(
       //         mortgage => {
       //             console.log(mortgage);
                   //this._mortgage = mortgage;
                   let start = new Date().getTime();
                   let end = new Date(this._mortgage.listingDate.endDate).getTime();
                   this._dayleft = (end - start)/(24*60*60*1000);
           //     }
           // )
      // });
       // In a real app: dispatch action to load the details here.
    }

    ngOnDestroy() {
        
    }

    invest() {
        this._invest = true;
    }

    cancel() {
        this._invest = false;
    }

    commit(id:number) {
        
        if (this.pledgeAmount < 50000) {
            window.alert('Minimum investment requirment: $50000');
            return;
        }
        else 
        {
            this.pendService.postMortgage(id, this.pledgeAmount);
            this.router.navigate(['/myPortfolio']);
        }
    }

}
