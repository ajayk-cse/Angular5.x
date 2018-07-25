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
import { FormsModule } from "@angular/forms";
import { EmployeeComponent } from "./app.emp.component";
import { Employee } from "./app.emp.model";
// 1. Initialize the Testing Env.
// 2. Load the BrowserModule and platformBrowserDynmic for testing
TestBed.initTestEnvironment(
  BrowserDynamicTestingModule, platformBrowserDynamicTesting());

  // 3. Describe the test case witll all required objects
describe("EmployeeComponent", () => {
  let employee:Employee;
  let app:EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let button: HTMLElement;
// 4. Define Testing Env. for the Angular component by defining TestingModule (same as NgModule)
 // provide component comfiguration for all tests in the current test case
beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [EmployeeComponent],
    });
    // 5. Create Component
    // initialize selector, template/templateUrl, etc. properties of component
    fixture = TestBed.createComponent(EmployeeComponent);
    // 6. Get the Component Instance
    app = fixture.componentInstance;
    // 7. Perform initial Data binding, provide an initial execution for ngModel
    fixture.detectChanges(); // trigger initial data binding
  });

  // 8. The Actual Test

  it("should add two integers",()=> {
    let x:number=10;
    let y:number=30;
    let res:number =4000;
    let actRes:number = app.add(x,y);
    expect(actRes).toEqual(res);
  });

  it("should calculate tax when the button is clicked", () => {
    employee = new Employee(0,"",0,"","");
    employee.Designation = "Manager";
    employee.Salary = 500000;
    app.emp = employee;
    let nativeElement = fixture.nativeElement; // get the DOM element for watch (databinding, change, event)
    button = nativeElement.querySelector("button"); // get the tag from DOM based on criteria
    let actEventRes = button.dispatchEvent(new Event("click")); // reiase the click event
    fixture.detectChanges(); // check if the DOM changed (databinding)
    expect(nativeElement.querySelector("input[disabled]").value).toEqual("150000");
  });

});