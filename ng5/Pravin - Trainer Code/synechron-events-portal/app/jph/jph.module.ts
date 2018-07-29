import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { sepJphRoutes } from "./jph.routing";

import { JphPostsListComponent } from "./components/jph-posts-list.component";

import { JphService } from "./services/jph.service";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        sepJphRoutes
    ],
    exports: [JphPostsListComponent],
    declarations: [
        JphPostsListComponent
    ],
    providers: [
        JphService
    ],
})
export class JphModule { }