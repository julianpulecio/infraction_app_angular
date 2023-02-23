import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReportComponent } from './components/report/report.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonNewComponent } from './components/person/person-new/person-new.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { VehicleNewComponent } from './components/vehicle/vehicle-new/vehicle-new.component';
import { VehicleEditComponent } from './components/vehicle/vehicle-edit/vehicle-edit.component';
import { PolicemanNewComponent } from './components/policeman/policeman-new/policeman-new.component';
import { PolicemanEditComponent } from './components/policeman/policeman-edit/policeman-edit.component';
import { PolicemanListComponent } from './components/policeman/policeman-list/policeman-list.component';
import { VehicleListComponent } from './components/vehicle/vehicle-list/vehicle-list.component';
import { TokenInterceptor } from 'src/token.interceptor';
import { PolicemanUpdatePasswordComponent } from './components/policeman/policeman-update-password/policeman-update-password.component';
import { CreateInfractionComponent } from './components/create-infraction/create-infraction.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    ReportComponent,
    PersonListComponent,
    PersonNewComponent,
    PersonEditComponent,
    VehicleNewComponent,
    VehicleEditComponent,
    PolicemanNewComponent,
    PolicemanEditComponent,
    PolicemanListComponent,
    VehicleListComponent,
    PolicemanUpdatePasswordComponent,
    CreateInfractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
