import { Component } from '@angular/core';


 import { Employee } from "../models/employee";
import { getMaxListeners } from 'cluster';

@Component({
    selector: 'employee-list',
    templateUrl: '../views/employee-list.component.html'
})

export class EmployeeListComponent {
    constructor() { }    
    title:string ="Synechron employee!!!"
    subTitle:string="core Java team"
    //employee:Employee = new Employee(211,"sheshnath","wagholi","Pune","shesh@getMaxListeners.com","+91-90222222","images/noimage.png");
    selectedEmployee:Employee;
    onEmployeeSelction(emp:Employee):void{
        this.selectedEmployee=emp;
        console.log(this.selectedEmployee);
        
    }
    synechronEmp:Employee[] = [
        {
            employeeId:1,
            employeeName:"sheshnath",
            emial:"shesh.gupta@gmaiil.com",            
            address:"wagholi",
            city:"Pune",
            phone:"+91-12345678",
            avatar:"images/noimage.jpg"

        },
        {
            employeeId:2,
            employeeName:"Rajesh",
            emial:"Rajesh.gupta@gmaiil.com",            
            address:"wagholi",
            city:"Pune",
            phone:"+91-124445678",
            avatar:"images/noimage.jpg"

        },
        {
            employeeId:4,
            employeeName:"Anil",
            emial:"shesh.gupta@gmaiil.com",            
            address:"wagholi",
            city:"Pune",
            phone:"+91-12345678",
            avatar:"images/noimage.jpg"

        },
        {
            employeeId:5,
            employeeName:"Nath",
            emial:"Nath@gmaiil.com",            
            address:"wagholi",
            city:"Pune",
            phone:"+91-12345678",
            avatar:"images/noimage.jpg"

        }
    ]

}