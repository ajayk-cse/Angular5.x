import { Component, OnInit } from "@angular/core";
import { Category,Categories } from "./app.category.model";
import { CommunicationService } from "./app.communication.service";
@Component({
    selector: "app-catsender-component",
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
    `
})

export class CategorySenderComponent implements OnInit {
    cat:Category;
    cats=Categories;
    constructor(private serv:CommunicationService) {
        this.cat = new Category(0,"");
    }


    ngOnInit():void { }

    getSelectedCategory(c:Category):void {
        this.cat=c;
        // call a method which will raise event from service
        this.serv.raiseEvent(this.cat.CatId);
    }

}