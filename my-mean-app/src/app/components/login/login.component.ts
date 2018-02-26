import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username:string;
  password:string;

  constructor(private router:Router,private auth:AuthService,private flashMessage:FlashMessagesService,public bsModalRef: BsModalRef) { }

  ngOnInit() {
    
    
  }



  onSubmit(){
    const user = {
      username:this.username,
      password:this.password
    };

    this.auth.authenticateUser(user).subscribe(res=>{
      if(res.success){
        this.flashMessage.show('You are logged in',{cssClass:'alert-success',timeOut:1500});
       setTimeout(()=>{
        this.auth.storeData(res.token,res.user);
        this.bsModalRef.hide();
        this.router.navigate(['/dashboard']);
       },2000);
        
      }
      if(!res.success)
      {
        this.flashMessage.show('Login Failed',{cssClass:'alert-danger',timeOut:5000});
      }
    });

  }

}
