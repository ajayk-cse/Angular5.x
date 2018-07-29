import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { appRouting } from "./app.routing";


import { SepNavbarModule } from "./navigation/navigation.module";

//Components
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        SepNavbarModule,
        appRouting
    ],
    exports: [],
    declarations: [
        AppComponent,
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}