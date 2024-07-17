import { Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { EmployeeMainComponent } from './employee-main/employee-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'home',component:PageHomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'employee',component:EmployeeMainComponent},
    {path:'**',component:PageNotFoundComponent}
];
