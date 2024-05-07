import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AboutMeComponent } from "./layouts/main-layout/about-me/about-me.component";
import { AppComponent } from "./app.component";
import { ExperienceComponent } from "./layouts/main-layout/experience/experience.component";
import { HeaderComponent } from "./layouts/main-layout/header/header.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { PreloaderComponent } from "./features/preloader/preloader.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AboutMeComponent,
    AppComponent,
    ExperienceComponent,
    HeaderComponent,
    MainLayoutComponent,
    PreloaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
