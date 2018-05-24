import { Injectable } from '@angular/core';
import { Http, Headers, Request, Response, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from '../user';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getBooks(username: string, password: string) {
    const url = 'http://58.87.90.126:5123/api/Authorize/';
    // return this.http.get(url)
    //        .toPromise()
    //        .then(res => res.json())
    //        .catch(this.handleError);

    return this.http.post(url, { user: username, password: password })
      .toPromise()
      // .then(res => res.json())
      .catch(this.handleError);
  }

  login(user: User): Observable<User> {
    console.log("Angular2---------UserLoginService.login");

    let body = JSON.stringify(user);
    console.log(body);
    return this.http.post("http://58.87.90.126:5123/api/Authorize/", user)
      .map((response: Response) => {
        console.log("response");
        let userResponseJson = new User();
        userResponseJson = response.json();
        //微信公众号(Subject)更新
        // this.subject.next(Object.assign({}, userResponseJson));

        //localStorage.setItem("currentUser",JSON.stringify(userResponseJson));

        if (userResponseJson && !userResponseJson.user) {
          console.log("Angular2---------UserLoginService.login SUCCESSED");
        } else {
          console.log("Angular2---------UserLoginService.login FAILED");
        }
        return userResponseJson;
      })
      .catch(error => {
        return Observable.throw(error.json());
      });

  }

  private handleError(error: any): Promise<any> {

    // Handle error
    var data = error.data;
    var status = error.status;
    var statusText = error.statusText;
    var headers = error.headers;
    var config = error.config;

    // console.error('An error occurred', error); // for demo purposes only

    return Promise.reject(error.message || error);
  }

  private handleObservableError(error: any) {
    // 我们的服务处理器(handleError)把响应对象记录到控制台中
    // 把错误转换成对用户友好的消息，并且通过Observable.throw来
    // 把这个消息放进一个新的、用于表示“失败”的可观察对象
    console.error(error); // 输出异常信息
    return Observable.throw(error);
  }

}
