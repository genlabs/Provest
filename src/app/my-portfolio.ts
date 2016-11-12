export class MyPortfolio {


    "mId" : number;
    "investedAmount" : number;
    "percentageOwned" :number; 
    "monthlyPayment" : number;
    "performance" : string;
    "owningPeriod" : number;
    "property" : {
        "name" : string,
        "images" : string[], 
        "type" : string,
        "estimatedValue" : number,
        "landlord" : {
            "name" : string,
            "financialDocument" : string,
            "profileImageURL" : string,
            "email" : string
        }
    }
	       
}
