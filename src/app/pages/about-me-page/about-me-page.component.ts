import { Component } from "@angular/core";
import { animate, style, trigger, transition } from "@angular/animations";

@Component({
  selector: "about-me-page",
  templateUrl: "./about-me-page.component.html",
  styleUrl: "./about-me-page.component.scss",
  animations: [
    trigger("enter", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate(".5s .5s", style({ opacity: 1, transform: "translateY(0)" })),
      ])
    ])
  ],
})
export class AboutMePageComponent {}
