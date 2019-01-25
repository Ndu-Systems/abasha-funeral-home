import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar';

const routes: Routes = [];

export const declarations = [NavBarComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRouting { }
