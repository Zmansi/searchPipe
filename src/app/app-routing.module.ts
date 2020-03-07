import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

const routes: Routes = [
  {path:'', component:EmployeeListComponent},
  {path:'employees', component:EmployeeListComponent},
  {path:'emp-detail', component:EmpDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
