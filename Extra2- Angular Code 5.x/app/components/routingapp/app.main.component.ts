import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-route-compo",
  template: `
      <table class="table table-striped table-bordered">
        <tbody>
          <tr>
            <td>
              <a [routerLink]="['']">Home</a>
            </td>
            <td>
            <a [routerLink]="['about']">About</a>
          </td>
          <td>
          <a [routerLink]="['contact']">Contact</a>
        </td>
          </tr>
        </tbody>
      </table>
      <hr>
      <router-outlet></router-outlet>
    `
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
