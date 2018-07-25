import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "app-about-comp",
    template: `
      <h2>About Component</h2>
      <div>
        <strong>
          {{message}}
        </strong>
      </div>
      <br>
      <input type="button" value="Navigate" (click)="navigate()">
    `
})

export class AboutComponent implements OnInit {
    message:string;
    constructor(private route:Router) {
        this.message = "I am About Component";
    }

    navigate():void {
      this.route.navigate(["contact"]);
    }

    ngOnInit() { }
}