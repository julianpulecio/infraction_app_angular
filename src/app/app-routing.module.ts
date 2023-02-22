import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PolicemanEditComponent } from './components/policeman/policeman-edit/policeman-edit.component';
import { PolicemanListComponent } from './components/policeman/policeman-list/policeman-list.component';
import { PolicemanNewComponent } from './components/policeman/policeman-new/policeman-new.component';
import { ReportComponent } from './components/report/report.component';
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
    path: 'person-list',
    component: PersonListComponent,
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
    path: 'policeman-new',
    component: PolicemanNewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
