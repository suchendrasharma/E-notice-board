import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NoticeboardComponent } from './Components/noticeboard/noticeboard.component';
import { NoticeTableComponent } from './Components/notice-table/notice-table.component';
import { FacultyLoginComponent } from './Components/faculty-login/faculty-login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'noticeboard',
    component: NoticeboardComponent
  },
  {
    path: 'notice-table',
    component: NoticeTableComponent
  },
  {
    path: 'faculty-login',
    component: FacultyLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
