import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Product, Products } from "./app.product.model";

@Component({
  selector: "app-prod-comp",
  template: `
    <h2>The Product Component</h2>
    <br>
      <input type="button" value="SendMessage" (click)="sendMessageDone()">
    <hr>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
            <td>Prod id</td>
            <td>Prod Name</td>
            <td>Cat id</td>
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
  prod: Product;
  prods = Products;
  _FilterProducts: Array<Product>;
  _CatId: number;
  @Output() sendMessage: EventEmitter<string>;
  constructor() {
    this.prod = new Product(0, "", 0);
    this._CatId = 0;
    this._FilterProducts = new Array<Product>();
    this.sendMessage = new EventEmitter<string>();
  }

  ngOnInit() {}

  sendMessageDone(): void {
    this.sendMessage.emit("I am the message received from your child.");
  }

  @Input()
  set CatId(val: number) {
    this._CatId = val;
  }

  get CatId(): number {
    return this._CatId;
  }

  get FilterProducts(): Array<Product> {
    this._FilterProducts = new Array<Product>();

    if (this.CatId > 0) {
      this.prods.forEach(p => {
        if (p.CatId === this.CatId) {
          this._FilterProducts.push(p);
        }
      });
      this.sendMessage.emit(`No.of Match Found ${this._FilterProducts.length}`);
    } else {
      this._FilterProducts = this.prods;
    }
    return this._FilterProducts;
  }
}
