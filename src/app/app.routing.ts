import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar';
import { HomePageComponent } from './home-page';
import { HelpYouComponent } from './home-page/help-you';
import { BenefitsComponent } from './home-page/benefits';
import { OurServicesComponent } from './our-services';
import { OurPackagesComponent } from './home-page/our-packages';
import { FooterComponent } from './home-page/footer';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "our-services",
    component: OurServicesComponent
  }
];

export const declarations = [
  NavBarComponent,
  HomePageComponent,
  HelpYouComponent,
  BenefitsComponent,
  OurPackagesComponent,
  FooterComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRouting { }
