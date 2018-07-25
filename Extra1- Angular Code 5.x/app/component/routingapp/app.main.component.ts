import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-route-component",
  template: `
        <table class="table table-bordered table-striped">
            <tr>
              <td>
                <a [routerLink]="['']">Home</a>
              </td>
              <td>
              <a [routerLink]="['/about',id]">About</a>
            </td>
            <td>
            <a [routerLink]="['contact']">Contact</a>
          </td>
            </tr>
        </table>
        <br>
        <router-outlet></router-outlet>

    `
})
export class MainComponent implements OnInit {
    id:number;
  constructor() {
      this.id = 1001;
  }

  ngOnInit() {}
}
