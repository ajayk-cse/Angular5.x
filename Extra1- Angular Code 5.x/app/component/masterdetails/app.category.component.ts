import { Component, OnInit } from "@angular/core";
import { Category,Categories } from "./app.category.model";
@Component({
    selector: "app-cat-component",
    template: `
       <table class="table table-bordered table-striped">
          <thead>
              <tr>
                <td>CateId</td>
                <td>CatName</td>
              </tr>
          </thead>
          <tbody>
            <tr *ngFor="let c of cats" (click)="getSelectedCategory(c)">
               <td>{{c.CatId}}</td>
               <td>{{c.CatName}}</td>
            </tr>
          </tbody>
       </table>
       <hr>
       <app-prd-component [CatId]="cat.CatId" (onMessage)="getNotification($event)"></app-prd-component>
    `
})

export class CategoryComponent implements OnInit {
    cat:Category;
    cats=Categories;
    constructor() {
        this.cat = new Category(0,"");
    }


    ngOnInit():void { }

    getSelectedCategory(c:Category):void {
        this.cat=c;
    }
    getNotification($event:any):void {
        console.log(`Acknowledge ${$event}`);
    }
}