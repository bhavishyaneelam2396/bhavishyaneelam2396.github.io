import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBaseComponent } from './page-base/page-base.component';
import {AngularMaterialModule} from '../angular.material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageBaseComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule, // added for router-outlet
  ]
})
export class CoreModule { }
