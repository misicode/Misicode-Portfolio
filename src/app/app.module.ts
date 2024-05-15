import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ContentLayoutComponent } from "./layouts/content-layout/content-layout.component";
import { HeaderComponent } from "./layouts/content-layout/header/header.component";
import { PreloaderComponent } from "./features/preloader/preloader.component";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    HeaderComponent,
    PreloaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [ ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
