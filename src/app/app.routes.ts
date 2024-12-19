import { Routes } from '@angular/router';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path:'',
        component:EmployeelistComponent
    },
    {
        path:'',
        component:EmployeelistComponent
    },
    {
        path:'add-employee',
        component:EmployeeFormComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'edit-employee/:id',
        component:EmployeeFormComponent
    }
];
