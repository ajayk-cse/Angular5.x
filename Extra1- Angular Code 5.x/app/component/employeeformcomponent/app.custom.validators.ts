// the class for defining logic
// for +ve numeric validator
export class NumericValidator {
    // the method will accept
    // the AbstractControl type as 'any'
    // this will be value to be validated
    // from control context
    static chekPositiveNumeric(ctrl:any):any {
        if(ctrl.value > 0) {
            return null; // valid
        } else {
            // return JSON object with state
            return {
                valid:false
            };
        }
    }
}