import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";


import { SepNavbarComponent } from './components/sep-navbar.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [SepNavbarComponent],
    declarations: [SepNavbarComponent],
    providers: [],
})
export class SepNavbarModule { }
