import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(public auth:AuthService,private router:Router){}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
