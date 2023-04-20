import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FastFoodCentreComponent } from './fast-food-centre/fast-food-centre.component';
import { RxjsRountingModule } from './rxjs-rounting.module';
import { AngularMaterialModule } from '../angular.material.module';
import { OperatorsComponent } from './operators/operators.component';



@NgModule({
  declarations: [
    FastFoodCentreComponent,
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    RxjsRountingModule,
    AngularMaterialModule
  ]
})
export class RxjslearningModule { }
