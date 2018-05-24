import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteguardService } from './routeguard.service';

const routes: Routes = [
  {
      path: '',   // 初始路由重定向[写在第一个]
      redirectTo: 'workspace',
      pathMatch: 'full'  // 必须要设置
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'workspace',
      loadChildren: './workspace/workspace.module#WorkspaceModule',
      canActivate: [RouteguardService]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
