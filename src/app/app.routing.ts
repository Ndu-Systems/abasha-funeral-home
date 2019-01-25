import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar';
import { HomePageComponent } from './home-page';

const routes: Routes = [];

export const declarations = [NavBarComponent, HomePageComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRouting { }
