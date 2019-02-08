import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportesComponent } from './reportes/reportes.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
