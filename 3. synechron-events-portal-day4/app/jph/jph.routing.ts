import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { JphPostsListComponent } from "./components/jph-posts-list.component";

const jphRoutes: Routes = [
    {
        path: 'posts',
        component: JphPostsListComponent
    }
];

export const sepJphRoutes: ModuleWithProviders = RouterModule.forChild(jphRoutes);