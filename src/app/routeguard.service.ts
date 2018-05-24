import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from "@angular/router";

@Injectable()
export class RouteguardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
    // 当前路由名称
    var path = route.routeConfig.path;
    console.log(path);
    let accessToken = sessionStorage.getItem('accessToken');
    // nextRoute: 设置需要路由守卫的路由集合
    const nextRoute = ['home', 'good-list', 'good-detail', 'workspace', 'profile'];
    let isLogin = accessToken != null && accessToken.length > 0 ? true : false;  // 是否登录
    // 当前路由是nextRoute指定页时
    if (nextRoute.indexOf(path) >= 0) {
      if (!isLogin) {
        // 未登录，跳转到login
        this.router.navigate(['login']);
        return false;
      } else {
        // 已登录，跳转到当前路由
        return true;
      }
    }
    // 当前路由是login时 
    if (path === 'login') {
      if (!isLogin) {
        // 未登录，跳转到当前路由
        return true;
      } else {
        // 已登录，跳转到home
        this.router.navigate(['workspace']);
        return false;
      }
    }
  }
}
