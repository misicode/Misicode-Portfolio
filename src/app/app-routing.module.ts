import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContentLayoutComponent } from "./layouts/content-layout/content-layout.component";

const routes: Routes = [
  {
    path: "",
    component: ContentLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./pages/pages.module").then(m => m.PagesModule)
      },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableViewTransitions: true }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
