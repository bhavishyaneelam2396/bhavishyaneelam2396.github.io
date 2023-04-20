import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FastFoodCentreComponent } from './fast-food-centre/fast-food-centre.component'
import { OperatorsComponent } from './operators/operators.component';
import { EmployeePageComponent } from './employee/employee-page/employee-page.component'

const routes: Routes = [
  { path: 'fast-food-centre', component: FastFoodCentreComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: 'employee-details', component: EmployeePageComponent }];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRountingModule { }
