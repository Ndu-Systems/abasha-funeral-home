import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting, declarations } from './app.routing';
import { OurServicesComponent } from './our-services/our-services.component';

@NgModule({
   imports: [
      BrowserModule,
      AppRouting
   ],
   declarations: [
      AppComponent,
      ...declarations,
      OurServicesComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
