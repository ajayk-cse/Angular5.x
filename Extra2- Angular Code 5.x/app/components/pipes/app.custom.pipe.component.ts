import { Component, OnInit } from "@angular/core";

import {Product} from "../pipes/product.model";


@Component({
    selector: "custom-pipe",
    templateUrl: "./../pipes/custom.pipe.html"
})
export class CustomPipeComponent implements OnInit {
    products:Array<Product>;
    val:number;
    constructor() {
        this.val = 0;
        this.products = new Array<Product>();
        this.products.push(new Product(101,"Laptop"));
        this.products.push(new Product(102,"Desktop"));
        this.products.push(new Product(103,"Router"));
        this.products.push(new Product(104,"Mouse"));
        this.products.push(new Product(105,"RAM"));
        this.products.push(new Product(106,"Modem"));

    }

    setVal() {
        this.val = 0;
    }

    ngOnInit() { }

}