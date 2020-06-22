import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import "@angular/compiler";


//Modul til at hente data
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './partials/nav/nav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ForsideComponent } from './pages/forside/forside.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ForsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //Modul til at hente data
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
