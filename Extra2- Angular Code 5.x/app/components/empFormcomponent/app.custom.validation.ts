export class CustomValidator {
    // ctrl is an Element Context
    // with which the Model Proprty is bind
    // using formControlName
    static Validate(ctrl:any):any {
        let value:any = ctrl.value;
        console.log(`received ${value}`);
        if(value>0) {
            console.log("valid");
            return null;
        } else {
            console.log("invalidvalid");
            return {wrongvalue:"Cannot be negative"};
        }
    }
}