import { Component, OnInit } from "@angular/core";
import { Product, Products } from "./app.product.models";
import { CommunicationService } from "./app.communication.service";

@Component({
  selector: "app-prdreceiver-component",
  template: `
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
export class ProductReceiverComponent implements OnInit {
  prd: Product;
  prds = Products;
  _CatId: number;
  private _FilterProducts: Array<Product>;
  constructor(private serv: CommunicationService) {
    this.prd = new Product(0, "", 0);
    this._CatId = 0;
    this._FilterProducts = new Array<Product>();
  }

  // subscribe to the COmmunication Service event
  // to accept the data

  ngOnInit() {
    this.serv.receivedFilter.subscribe((param: number) => {
      this._CatId = param;
    });
  }

  get FilterProducts(): Array<Product> {
    this._FilterProducts = new Array<Product>();
    if (this._CatId > 0) {
      this.prds.forEach(p => {
        if (p.CatId === this._CatId) {
          this._FilterProducts.push(p);
        }
      });
    } else {
      this._FilterProducts = this.prds;
    }
    return this._FilterProducts;
  }
}
