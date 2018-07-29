import { Component } from '@angular/core';

@Component({
    selector: 'sep-navbar',
    templateUrl: '../views/sep-navbar.component.html'
})

export class SepNavbarComponent {
    constructor() { }
    menus: string[] = [
        "../../images/logo.png",
        "Home",
        "Events",
        "Employees",
        "Jph Posts",
        "New Event"
    ];
}