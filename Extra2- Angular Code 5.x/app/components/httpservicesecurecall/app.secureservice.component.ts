import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Response } from "@angular/http";
import { SecureService } from "./app.secureservice";
@Component({
    selector: "app-secure-comp",
    template:`
      <input type="button" value="call" (click)="display()">
    `
})

export class CallComponent implements OnInit {
    constructor(private serv:SecureService) { }

    ngOnInit() { }
    display():void {
        this.serv.get().subscribe((resp:Response)=> {
            console.log(resp.json());
        });
    }
}