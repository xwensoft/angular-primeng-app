import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',   // 初始路由重定向[写在第一个]
    redirectTo: 'list',
    pathMatch: 'full'  // 必须要设置
  },
  {
    path: 'list',
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcqdOrderRoutingModule { }
