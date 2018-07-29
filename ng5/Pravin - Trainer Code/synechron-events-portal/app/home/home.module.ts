import { NgModule } from '@angular/core';
import { sepHomeRoutes } from "./home.routes";

import { SepHomeComponent } from './components/sep-home.component';


@NgModule({
    imports: [sepHomeRoutes],
    exports: [SepHomeComponent],
    declarations: [SepHomeComponent],
    providers: [],
})
export class HomeModule { }
