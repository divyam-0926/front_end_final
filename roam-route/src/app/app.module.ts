import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { HomeComponent } from './pages/home/home.component';
import { ItineraryComponent } from './pages/itinerary/itinerary.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DayDetailComponent } from './pages/day-detail/day-detail.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DestinationCardComponent } from './shared/components/destination-card/destination-card.component';
import { DayCardComponent } from './shared/components/day-card/day-card.component';

import { AuthService } from './services/auth.service';
import { TripDaysService } from './pages/day-detail/trip-days.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    ItineraryComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    DestinationCardComponent,
    DayCardComponent,
    DayDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService, TripDaysService],
  bootstrap: [AppComponent],
})
export class AppModule {}
