import { Component } from "@angular/core";

@Component({
  selector: "app-simple-component",
  template: `
    <hr>
       <h2>The Angular Simple Component</h2>
       <br>
       <div><strong> {{message}} </strong></div>
       <br>
       <input type="text" [value]="message" class="form-control">
       <a [href]="url">DNC</a>
       <input type="button" value="Click Me" (click)="update()" class="btn btn-success"/>
       <br>
       <input type="text" class="form-control" [(ngModel)]="fullname"/>
       <br>
       <input type="text" class="form-control" [(ngModel)]="fullname"/>
       <br>
       <input type="button" (click)="change()" value="Change">
    `
})
export class SimpleComponent {
    message:string;
    url:string;
    fullname:string;
    constructor() {
        this.message = "First Application";
        this.url = "http://www.dotnetcurry.com";
        this.fullname = "";
    }
    update():void {
        this.message = "The Click Event Fired...";
    }
    change():void {
        this.fullname = "Tejas Mahesh Sabnis";
    }

}
