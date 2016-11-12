import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Mortgage } from '../mortgage';
import { MortgagesService } from '../mortgages.service';

@Component({
  selector: 'app-mortgage-detail',
  templateUrl: './mortgage-detail.component.html',
  styleUrls: ['./mortgage-detail.component.css']
})
export class MortgageDetailComponent implements OnInit {

    id: number;
    private sub: any;
    private _mortgage:Mortgage;

    constructor( private route: ActivatedRoute, private router: Router, 
        private mortgageService:MortgagesService) { }

    ngOnInit() {
       this.sub = this.route.params.subscribe(params => {
           this.id = +params['mId']; // (+) converts string 'id' to a number
           this._mortgage = this.mortgageService.getMortgageById(this.id);
           
       });
       // In a real app: dispatch action to load the details here.
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


}
