import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopstatsComponent } from './topstats/topstats.component';
import { AuthService } from './auth.service';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { CustomersComponent } from './customers/customers.component';
import { DocumentComponent } from './document/document.component';
import { PatientComponent } from './patient/patient.component';
import { PreauthorizeComponent } from './preauthorize/preauthorize.component';
import { UploadresultsComponent } from './uploadresults/uploadresults.component';
import { VerifypersonComponent } from './verifyperson/verifyperson.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    CreateUserComponent,
    TopnavComponent,
    SidebarComponent,
    DashboardComponent,
    TopstatsComponent,
    LaboratoryComponent,
    PharmacyComponent,
    InsuranceComponent,
    CustomersComponent,
    DocumentComponent,
    PatientComponent,
    PreauthorizeComponent,
    UploadresultsComponent,
    VerifypersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
