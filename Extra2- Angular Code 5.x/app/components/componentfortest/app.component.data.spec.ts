import "zone.js/dist/zone";
import "zone.js/dist/proxy";
import "zone.js/dist/sync-test";
import "zone.js/dist/async-test";
import "zone.js/dist/jasmine-patch";
import {} from "jasmine";
import { DebugElement, EventEmitter } from "@angular/core";
import { inject, TestBed, ComponentFixture, async } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import { By } from "@angular/platform-browser";
import { TestMeComponent } from "./app.component.data";


TestBed.initTestEnvironment(
    BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe("TestMeComponent",()=> {
    let app:any;
    let fixture:ComponentFixture<TestMeComponent>;

    beforeEach(()=> {
        TestBed.configureTestingModule({
            declarations:[TestMeComponent]
        });
        fixture=TestBed.createComponent(TestMeComponent);
        app = fixture.componentInstance;
        fixture.detectChanges(); // trigger initial databinding if any
    });

    it("should perform add when add is called", () => {  // modified the text of it block
        let x:number=10;
        let y:number=20;
        let res:number = 30;
        let actRes:number = app.add(x,y);
        expect(actRes).toEqual(res);
      });
});