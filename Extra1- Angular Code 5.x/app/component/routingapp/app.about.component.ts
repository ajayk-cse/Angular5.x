import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-about-component",
  template: `
        <h2>About Component</h2>
        <div>{{message}}</div>
    `
})
export class AboutComponent implements OnInit {
  message: string;
  constructor(private route: ActivatedRoute) {
    this.message = "";
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.message = `In the About Component ${params.id}`;
    });
  }
}
