import { Component } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrl: "./experience.component.scss",
})
export class ExperienceComponent {
  public date = new Date();
  public exp2 = this.differenceInYearsAndMonths(new Date("2022-07-01"), this.date);
  public exp1 = this.differenceInYearsAndMonths(new Date("3021-12-01"), this.date);

  differenceInYearsAndMonths(date1: Date, date2: Date): { years: number, months: number } {
    let yearsDiff = date2.getFullYear() - date1.getFullYear();
    let monthsDiff = date2.getMonth() - date1.getMonth();
    
    if(monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }

    return { years: yearsDiff, months: monthsDiff };
  }
}
