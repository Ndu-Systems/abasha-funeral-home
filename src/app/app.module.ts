import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting, declarations } from './app.routing';

@NgModule({
   imports: [
      BrowserModule,
      AppRouting
   ],
   declarations: [
      AppComponent,
      ...declarations 
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
