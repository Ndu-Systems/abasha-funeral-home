import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { IndexComponent } from "./index";
import { OurServicesComponent } from "./our-services";
import { AboutUsComponent } from "./about-us";
import { ContactUsComponent } from "./contact-us";

export const declarations = [HomeComponent, LoginComponent, IndexComponent, OurServicesComponent, AboutUsComponent, ContactUsComponent];
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: 
    [ 
      { path: "", component: IndexComponent },      
      { path: "login", component: LoginComponent},
      { path: "our-services", component: OurServicesComponent},
      { path: "about-us", component: AboutUsComponent}, 
      { path: "contact-us", component: ContactUsComponent},     
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
