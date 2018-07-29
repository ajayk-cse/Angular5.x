//ModelDrivenReactiveForm with Validations
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class EventForm {
    eventForm = new FormGroup({
        eventId: new FormControl("0", Validators.required),
        eventCode: new FormControl('FKET0', [Validators.required, Validators.maxLength(5)]),
        eventName: new FormControl('No Event', [Validators.required, Validators.maxLength(50)]),
        description: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        fees: new FormControl(),
        attendance: new FormControl("0", Validators.maxLength(100)),
        logo:new FormControl("images/noimage.png")
    });
}

// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// export class EventForm {
//     formBuilder: FormBuilder = new FormBuilder();
//     eventForm: FormGroup = this.formBuilder.group({
//         eventId: ["0", Validators.required],
//         eventCode: ["NOCD0", [Validators.required, Validators.maxLength(5)]],
//         eventName: ['No Event', [Validators.required, Validators.maxLength(50)]],
//         description: [""],
//         startDate: [""],
//         endDate: [""],
//         fees: [""],
//         seatsFilled: ["0", Validators.maxLength(100)],
//         logo: ["images/noimage.png"]
//     });
// }