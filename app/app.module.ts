import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GotraFormComponent } from './components/master/gotra-form/gotra-form.component';
import { UpasakDevtaFormComponent } from './components/master/upasak-devta-form/upasak-devta-form.component';
import { AddFamilyDetailsFormComponent } from './components/add-family-details-form/add-family-details-form.component';
import { DarshanRegistrationFormComponent } from './components/darshan-registration-form/darshan-registration-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    GotraFormComponent,
    UpasakDevtaFormComponent,
    AddFamilyDetailsFormComponent,
    DarshanRegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
