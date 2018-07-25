import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-contact-comp",
    template: `
      <h2>Contact Component</h2>
      <div>
        <strong>
          {{message}}
        </strong>
      </div>
      <hr>
      <a [routerLink]="['emp']">Employee</a>
      <br>
      <router-outlet></router-outlet>
    `
})

export class ContactComponent implements OnInit {
    message:string;
    constructor() {
        this.message = "I am Contact Component";
    }

    ngOnInit() { }
}