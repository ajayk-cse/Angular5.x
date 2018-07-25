import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test-comp",
  template: `
      <input type="button" value="Click Me!!!!" (click)="add(10,20)">
    `
})
export class TestMeComponent implements OnInit {
  constructor() {
    console.log("ctro");
  }
  add(x: number, y: number): number {
      alert(x + y);
    return x + y;
  }
  ngOnInit():void {
      console.log("ss");
  }
}
