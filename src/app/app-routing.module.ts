import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [{path:'',component : HomeComponent},
{path:'employee', component : EmployeeComponent},
{path:'home', component : HomeComponent},
{path : 'login',component : LoginComponent},
{path : 'update/:id',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
