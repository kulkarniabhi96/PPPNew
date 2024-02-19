import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GotraFormComponent } from './components/master/gotra-form/gotra-form.component';
import { UpasakDevtaFormComponent } from './components/master/upasak-devta-form/upasak-devta-form.component';
import { AddFamilyDetailsFormComponent } from './components/add-family-details-form/add-family-details-form.component';
import { DarshanRegistrationFormComponent } from './components/darshan-registration-form/darshan-registration-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'register', component: RegistrationFormComponent },
  { path: 'add-family', component: AddFamilyDetailsFormComponent },
  { path: 'create-darshan', component: DarshanRegistrationFormComponent },


  /**************** Master Pages ************/
  { path: 'gotra-setup', component: GotraFormComponent },
  { path: 'devta-setup', component: UpasakDevtaFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
