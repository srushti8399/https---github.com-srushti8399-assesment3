import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { ViewComponent } from '../view/view.component';
import { EditComponent } from '../edit/edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeeComponent, ViewComponent,EditComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports:[EmployeeComponent, ViewComponent, EditComponent]
})
export class EmployeeModule { }
