import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar';
import { HomePageComponent } from './home-page';
import { HelpYouComponent } from './home-page/help-you';
import { BenefitsComponent } from './home-page/benefits';

const routes: Routes = [];

export const declarations = [
  NavBarComponent, 
  HomePageComponent,
  HelpYouComponent,
  BenefitsComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
