import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBaseComponent } from './core/page-base/page-base.component';
import { RxjslearningModule } from './rxjs/rxjs-learning.module'

const routes: Routes = [{
  path: 'angular-app', component: PageBaseComponent,
  children: [
    {
      path: 'rxjs-learning',
      loadChildren: () => import('./rxjs/rxjs-learning.module').then(m => m.RxjslearningModule),
    },
  ]
},
{ path: '', redirectTo: 'angular-app', pathMatch: 'full' },
{ path: '**', redirectTo: 'angular-app', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
