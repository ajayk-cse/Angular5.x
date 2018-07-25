import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home-comp",
    template: `
      <h2>Home Component</h2>
      <div>
        <strong>
          {{message}}
        </strong>
      </div>
    `
})

export class HomeComponent implements OnInit {
    message:string;
    constructor() {
        this.message = "I am Home Component";
    }

    ngOnInit() { }
}