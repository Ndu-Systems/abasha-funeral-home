import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar';
import { HomePageComponent } from './home-page';
import { HelpYouComponent } from './home-page/help-you';

const routes: Routes = [];

export const declarations = [
  NavBarComponent, 
  HomePageComponent,
  HelpYouComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
