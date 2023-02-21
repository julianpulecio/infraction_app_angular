import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
