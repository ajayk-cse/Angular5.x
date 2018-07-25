import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Product, Products } from "./app.product.models";
@Component({
  selector: "app-prd-component",
  template: `
      <input type="button" value="Send Message" class="btn btn-warning" (click)="onMessageEmitted()">
       <table class="table table-bordered table-striped">
          <thead>
              <tr>
              <td>ProdId</td>
                <td>PrdoName</td>
                <td>CateId</td>
              </tr>
          </thead>
          <tbody>
            <tr *ngFor="let p of FilterProducts">
            <td>{{p.ProdId}}</td>
            <td>{{p.ProdName}}</td>
            <td>{{p.CatId}}</td>
            </tr>
          </tbody>
       </table>
    `
})
export class ProductComponent implements OnInit {
  prd: Product;
  prds = Products;
  private _CatId: number;
  private _FilterProducts:Array<Product>;
// 1. Defning the EventEmiter decorated with Output to emit the event
  @Output()onMessage:EventEmitter<string>;
  constructor() {
    this.prd = new Product(0, "", 0);
    this._CatId = 0;
    this._FilterProducts = new Array<Product>();
    this.onMessage = new EventEmitter<string>();
  }

  // 2. The Method emitting the event
  onMessageEmitted():void {
    this.onMessage.emit(`There are ${this.FilterProducts.length} number of products matched against CategoryId ${this.CatId}`);
  }

  @Input()
  set CatId(value:number) {
    this._CatId = value;
    console.log(this._CatId);
  }
  get CatId():number {
    return this._CatId;
  }

  ngOnInit() {}

  // readonly property to process the input
  get FilterProducts():Array<Product> {
    this._FilterProducts = new Array<Product>();
    if(this._CatId>0) {
      this.prds.forEach((p)=> {
        if(p.CatId===this._CatId) {
          this._FilterProducts.push(p);
        }
      });
    } else {
      this._FilterProducts = this.prds;
    }
    return this._FilterProducts;
  }
}
