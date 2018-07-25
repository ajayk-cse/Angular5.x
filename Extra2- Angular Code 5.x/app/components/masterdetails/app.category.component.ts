import { Component, OnInit } from "@angular/core";
import { Category,Categories } from "./app.category.model";

@Component({
    selector: "app-cat-comp",
    template:`
      <h2>The Catrgory Component</h2>
      <br>
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
              <td>Cat id</td>
              <td>Cat Name</td>
          </tr>
        </thead>
        <tbody>
            <tr *ngFor="let c of cats" (click)="getSelectedCategory(c.CatId)">
              <td>{{c.CatId}}</td>
              <td>{{c.CatName}}</td>
            </tr>
        </tbody>
      </table>
      <hr>
      <app-prod-comp [CatId]="cat.CatId" (sendMessage)="receiveMessage($event)"></app-prod-comp>
    `
})

export class CategoryComponent implements OnInit {
    cat:Category;
    cats = Categories;
    constructor() {
        this.cat = new Category(0,"");
     }

     getSelectedCategory(catid:number):void {
        this.cat.CatId = catid;
     }
     receiveMessage($event:any):void {
        console.log($event);
     }
    ngOnInit() { }
}