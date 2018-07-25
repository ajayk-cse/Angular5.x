import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cust-directive",
  template: `
       <table class="table table-bordered">
         <tr>
          <td>
            <input type="radio" name="r" (click)="color='red'">Red
          </td>
          <td>
          <input type="radio" name="r" (click)="color='blue'">Blue
        </td>
        <td>
        <input type="radio" name="r" (click)="color='yellow'">Yellow
      </td>
         </tr>
       </table>
       <hr>
       <div class="container" [selColor]="color">First</div>
       <br/>
       <div class="container" [selColor]="color">Second</div>
       <br/>
       <div class="container" [selColor]="color">Third</div>
       <br/>
    `
})
export class CustomDirectiveComponent implements OnInit {
    color:string;
  constructor() {}

  ngOnInit() {}
}
