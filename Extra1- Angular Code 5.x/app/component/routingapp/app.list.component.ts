import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-list-component",
    template: `
      <table>
        <tr *ngFor="let m of movies">
           <td>{{m}}</td>
        </tr>
      </table>
    `
})

export class ListComponent implements OnInit {
    movies:Array<string>;
    constructor() {
        this.movies = new Array<string>();
        this.movies.push("Ethan Hunt");
        this.movies.push("Indiana Jones");
        this.movies.push("James Bond");
    }

    ngOnInit() { }
}