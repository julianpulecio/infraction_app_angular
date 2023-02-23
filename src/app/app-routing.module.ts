import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInfractionComponent } from './components/create-infraction/create-infraction.component';
import { LoginComponent } from './components/login/login.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonNewComponent } from './components/person/person-new/person-new.component';
import { PolicemanEditComponent } from './components/policeman/policeman-edit/policeman-edit.component';
import { PolicemanListComponent } from './components/policeman/policeman-list/policeman-list.component';
import { PolicemanNewComponent } from './components/policeman/policeman-new/policeman-new.component';
import { PolicemanUpdatePasswordComponent } from './components/policeman/policeman-update-password/policeman-update-password.component';
import { ReportComponent } from './components/report/report.component';
import { VehicleEditComponent } from './components/vehicle/vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './components/vehicle/vehicle-list/vehicle-list.component';
import { VehicleNewComponent } from './components/vehicle/vehicle-new/vehicle-new.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes =  [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'report',
    component: ReportComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-infraction',
    component: CreateInfractionComponent,
    canActivate: [RoleGuard],
    canLoad:[RoleGuard]
  },
  {
    path: 'vehicle-list',
    component: VehicleListComponent,
    canActivate: [RoleGuard],
    canLoad:[RoleGuard]
  },
  {
    path: 'vehicle-edit/:plate',
    component: VehicleEditComponent,
    canActivate: [RoleGuard],
    canLoad:[RoleGuard]
  },
  {
    path: 'vehicle-new',
    component: VehicleNewComponent,
    canActivate: [RoleGuard],
    canLoad:[RoleGuard]
  },
  {
    path: 'person-list',
    component: PersonListComponent,
    canActivate: [RoleGuard],
    canLoad:[RoleGuard]
  },
  {
    path: 'person-edit/:email',
    component: PersonEditComponent,
    canActivate: [RoleGuard],
    canLoad:[RoleGuard]
  },
  {
    path: 'person-new',
    component: PersonNewComponent,
    canActivate: [RoleGuard],
    canLoad:[RoleGuard]
  },
  {
    path: 'policeman-list',
    component: PolicemanListComponent,
    canActivate: [RoleGuard],
    canLoad:[RoleGuard]
  },
  {
    path: 'policeman-edit/:identification_number',
    component: PolicemanEditComponent,
    canActivate: [RoleGuard],
    canLoad:[RoleGuard]
  },
  {
    path: 'policeman-update-password/:identification_number',
    component: PolicemanUpdatePasswordComponent,
    canActivate: [RoleGuard],
    canLoad:[RoleGuard]
  },
  {
    path: 'policeman-new',
    component: PolicemanNewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
