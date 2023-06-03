import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/dashboard/admin-dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AuthGuard } from './Guards/auth.guard';
import { BarChartComponent } from './Components/bar-chart/bar-chart.component';
import { BarChartMonthComponent } from './Components/bar-chart-month/bar-chart-month.component';
import { BarChartYearComponent } from './Components/bar-chart-year/bar-chart-year.component';


const routes:Routes=[
  {path:"",redirectTo:"/login", pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:AdminDashboardComponent,canActivate:[AuthGuard]},
  {path:"Chartday",component:BarChartComponent,canActivate:[AuthGuard]},
  {path:"ChartMonthe",component:BarChartMonthComponent,canActivate:[AuthGuard]},
  {path:"ChartYear",component:BarChartYearComponent,canActivate:[AuthGuard]},

 
  {path:"**",component:NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutinModule { }
