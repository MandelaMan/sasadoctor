import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { CustomersComponent } from './customers/customers.component';
import { PatientComponent } from './patient/patient.component';
import { PreauthorizeComponent } from './preauthorize/preauthorize.component';
import { UploadresultsComponent } from './uploadresults/uploadresults.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'insurance', component: InsuranceComponent },
  { path: 'laboratory', component: LaboratoryComponent },
  { path: 'pharmacy', component: PharmacyComponent },
  { path: 'customers', component: CustomersComponent},
  { path: 'patient', component: PatientComponent},
  { path: 'preauthorize', component: PreauthorizeComponent},
  { path: 'uploadresults', component: UploadresultsComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
