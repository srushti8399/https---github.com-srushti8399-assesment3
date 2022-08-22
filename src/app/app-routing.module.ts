import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  {path:"employee",component:EmployeeComponent},
  {path:"employee/:id",component:ViewComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"",redirectTo:"employee",pathMatch:'full'},
  {path:"**",component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
