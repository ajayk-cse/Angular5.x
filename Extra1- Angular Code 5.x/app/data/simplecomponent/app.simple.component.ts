import { Component } from "@angular/core";
// using expression binding aka interpolation syntax {{}}
// using property binding, syntax [<HTMLproperty>]="<property>"
// using event binding, syntax (<Event>)="method()"
// using Two-Way binding, syntax [(ngModel)]="<property>"
@Component({
    selector:"app-simple-component",
    template:`
      <h2>The Simple Component</h2>
      <div>{{message}}</div>
      <br>
      <input type="text" [value]="message" class="form-control">
      <a [href]="url">Angular</a>
      <input type="button" value="Change" (click)="changeMessage()">
      <br>
      <input type="text" [(ngModel)]="name" class="form-control">
      <br>
      <input type="text"  [(ngModel)]="name" class="form-control">
      <br>
      <input type="text"  [(ngModel)]="name" class="form-control">
      `
})
export class SimpleComponent {
  message:string;
  url:string;
  name:string;
  constructor() {
    this.message ="I am a property from Component class.";
    this.url = "https://angular.io";
    this.name = "";
   }
  changeMessage():void {
    this.message = "Hay!! I am asked to change...";
  }

}