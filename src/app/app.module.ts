import { NgModule } from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

import { AboutMeComponent } from "./layouts/main-layout/about-me/about-me.component";
import { AppComponent } from "./app.component";
import { ExperienceComponent } from "./layouts/main-layout/experience/experience.component";
import { HeaderComponent } from "./layouts/main-layout/header/header.component";
import { MainLayoutComponent } from "./layouts/main-layout/main-layout.component";
import { PreloaderComponent } from "./features/preloader/preloader.component";
import { ProjectsComponent } from "./layouts/main-layout/projects/projects.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AboutMeComponent,
    AppComponent,
    ExperienceComponent,
    HeaderComponent,
    MainLayoutComponent,
    PreloaderComponent,
    ProjectsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
