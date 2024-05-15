import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomePageComponent } from "./home-page/home-page.component";

import { PagesRoutingModule } from "./pages-routing.module";

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
})
export class PagesModule {}
