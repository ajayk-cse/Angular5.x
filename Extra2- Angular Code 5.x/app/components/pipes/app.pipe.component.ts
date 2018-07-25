import { Component, OnInit } from "@angular/core";

import {Product} from "../pipes/product.model";

@Component({
    selector: "pipes-demo",
    templateUrl: "./../pipes/app.pipe.html"
})
export class PipeDemoComponent implements OnInit {

    product:Product;
    fullName:string;
    salary:number;
    names:string[];
    birthDate:Date;

    constructor() {
        this.birthDate = new Date(1976,08,12);
        this.product = new Product(101,"Laptop");
        this.fullName = "mahesh ramesh sabnis";
        this.salary = 450000;
        this.names =["roger","moore","sean","connary","danial","craig","trimothy","daltan"];
     }

    ngOnInit() { }
}