import { Component } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-preloader",
  templateUrl: "./preloader.component.html",
  styleUrl: "./preloader.component.scss",
})
export class PreloaderComponent {
  public options: AnimationOptions = {
    path: "/assets/misicode.json",
    loop: false,
  };
}
