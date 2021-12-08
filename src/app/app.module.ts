import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContinentsComponent } from './components/continents/continents.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CountriesDetailComponent } from './components/countries-detail/countries-detail.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewContinentsComponent } from './components/continents/new-continents/new-continents/new-continents.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './components/material/material.module';
import { CountriesComponent } from './components/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    ContinentsComponent,
    CountriesDetailComponent,
    CountriesComponent,
    ToolbarComponent,
    AboutMeComponent,
    FooterComponent,
    NewContinentsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
