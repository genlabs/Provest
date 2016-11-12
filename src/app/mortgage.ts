export class Mortgage {
    mId:number;
    pledge:number;
    status:string;
    created_time: string;
    updated_time: string;
   
    appraisalValue: number;
    interestRate : number;
    duration :number;
    listingDate: {
         "startDate": string;
         "endDate": string;
     };
    accumulatedFund: {
         "amount": number;
         "numOfParticipants": number;
         "waitingList": number;
     };
    paymentType : string;
    property : {
        name : string;
        images: string[];
        type : string;
        geoLocation : {
            latitude: number,
            longitude: number
        };
        address : {
            streetAddress: string;
            city: string;
            country:string;
            postalCode: string;
        };
        estimatedValue : number;
        landlord : {
            name : string;
            financialDocument : string;
            address:
                 {
                     streetAddress: string;
                     city: string;
                     state: string;
                     postalCode: string;
                 };
            profileImageURL : string;
            email : string;
        };
    };

}
