import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "app-home-component",
    template: `
        <h2>Home Component</h2>
        <div>{{message}}</div>
        <br>
        <input type="button" value="Show List" (click)="navigate()">

    `
})

export class HomeComponent implements OnInit {
    message:string;
    constructor(private route:Router) {
        this.message = "In the Home Component";
    }

    ngOnInit() { }

    navigate():void {
        this.route.navigate(["list"]);
    }
}