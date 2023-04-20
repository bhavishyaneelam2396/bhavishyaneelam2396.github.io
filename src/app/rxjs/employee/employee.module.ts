import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';


@NgModule({
  declarations: [
    EmployeePageComponent,
    EmployeeTableComponent,
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class EmployeeModule { }
