import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutMePageComponent } from "./about-me-page/about-me-page.component";
import { ExperiencePageComponent } from "./experience-page/experience-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { ProjectsPageComponent } from "./projects-page/projects-page.component";

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "about-me",
    component: AboutMePageComponent
  },
  {
    path: "jobs",
    component: ExperiencePageComponent
  },
  {
    path: "projects",
    component: ProjectsPageComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PagesRoutingModule {}
