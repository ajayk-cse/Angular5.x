import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { SepHomeComponent } from "./components/sep-home.component";

const homeRoutes: Routes = [
    {
        path: '',
        component: SepHomeComponent
    }
];

export const sepHomeRoutes: ModuleWithProviders = RouterModule.forChild(homeRoutes);