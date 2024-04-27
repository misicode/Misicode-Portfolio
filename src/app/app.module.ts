import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LottieModule } from "ngx-lottie";

import { AppComponent } from "./app.component";
import { PreloaderComponent } from './features/preloader/preloader.component';

import { AppRoutingModule } from "./app-routing.module";

export function playerFactory() {
  return import("lottie-web");
}

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
