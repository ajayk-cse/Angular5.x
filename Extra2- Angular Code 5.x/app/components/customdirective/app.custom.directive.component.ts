import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-directive-com",
  template: `
        <h2>Custom Directice Demo</h2>
        <br>
        <table class="table table-bordered table-striped">
          <tbody>
             <tr>
               <td>
                 <input type="radio" name="r" (click)="color='red'"> Red
               </td>
               <td>
                 <input type="radio" name="r" (click)="color='blue'"> Blue
               </td>
               <td>
                 <input type="radio" name="r" (click)="color='yellow'"> Yellow
               </td>
             </tr>
          </tbody>
        </table>
        <hr>
        <div [selectColor]="color">
           First Div
        </div>
        <div [selectColor]="color" [defaultColor]="'green'">
        Second Div
     </div>
     <div [selectColor]="color">
     Third Div
  </div>
    `
})
export class CustomDirectiveComponent implements OnInit {
   color:string;
  constructor() {
      this.color ="";
  }

  ngOnInit() {}
}
