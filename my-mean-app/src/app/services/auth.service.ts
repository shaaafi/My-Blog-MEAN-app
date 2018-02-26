import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  user:any;
  token:any;

  constructor(private http:Http) { }

  registerUser(data:any):Observable<any>{
    return this.http.post('http://localhost:2344/users/register',data)
    .map(res=>res.json());
  }

  authenticateUser(data:any):Observable<any>{
    let headers = new Headers({'content-type':'application/json'});
    return this.http.post('http://localhost:2344/users/authenticate',data,{headers:headers})
    .map(res=>res.json());
  }

  getProfile():Observable<any>{
    let headers:Headers = new Headers();
    this.getToken();
    headers.append('Authorization',this.token);
    headers.append('Content-type','application/json');
    return this.http.get('http://localhost:2344/users/profile',{headers:headers})
    .map(res=>res.json());
  }

  getToken(){
    this.token = localStorage.getItem('id_token');
  }

  storeData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.token = token;
    this.user = user; 
  }

  logout(){
    localStorage.clear();
    this.token=null;
    this.user=null;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

}
