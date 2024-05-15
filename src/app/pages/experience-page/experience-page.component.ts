import { Component } from "@angular/core";
import { animate, style, trigger, transition } from "@angular/animations";

@Component({
  selector: "experience-page",
  templateUrl: "./experience-page.component.html",
  styleUrl: "./experience-page.component.scss",
  animations: [
    trigger("enter", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateY(20px)" }),
        animate(".5s .5s", style({ opacity: 1, transform: "translateY(0)" })),
      ])
    ])
  ],
})
export class ExperiencePageComponent {
  public date = new Date();
  public exp2 = this.differenceInYearsAndMonths(new Date("2022-07-01"), this.date);
  public exp1 = this.differenceInYearsAndMonths(new Date("2021-12-14"), new Date("2022-06-30"));

  differenceInYearsAndMonths(date1: Date, date2: Date): { years: number, months: number } {
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    let monthsDiff = date2.getMonth() - date1.getMonth();
    let daysDiff = date2.getDate() - date1.getDate();
    
    if(monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }
    if(daysDiff > 0) {
      monthsDiff++;
    }

    return { years: yearsDiff, months: monthsDiff };
  }
}
