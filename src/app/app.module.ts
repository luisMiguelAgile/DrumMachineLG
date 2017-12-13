import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PercusionComponent } from './percusion/percusion.component';
import { PadComponent } from './pad/pad.component';


@NgModule({
  declarations: [
    AppComponent,
    PercusionComponent,
    PadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
