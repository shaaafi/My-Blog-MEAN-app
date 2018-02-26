import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from '../../services/validation.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  @ViewChild('avatar') avatar:ElementRef;


  name:string;
  email:string;
  username:string;
  password:string;
  passwordMatch:string;

  constructor(public router:Router,public validate:ValidationService,public flashMessage:FlashMessagesService,private auth:AuthService,public bsModalRef: BsModalRef,private modalService: BsModalService) { }

  ngOnInit() {
  }

  public openModalWithLoginComponent() {
    this.bsModalRef = this.modalService.show(LoginComponent);
    
    }

  onSubmit(){
    //this.router.navigate(['/profile'])
    let user = {
      name:this.name,
      email:this.email,
      username:this.username,
      password:this.password
    }

   

    if(!this.validate.validateForm(user)){
      this.flashMessage.show('please validate user defining all mentioned parameters',{cssClass:'alert-danger',timeOut:5000});
      console.log('please validate user defining all mentioned parameters');
      return false;
    }

    if(!this.validate.validateEmail(user.email)){
      this.flashMessage.show('please give a valid email address',{cssClass:'alert-danger',timeOut:5000});
      console.log('please give a valid email address');
      return false;
    }

    if(this.password != this.passwordMatch){
      this.flashMessage.show('Password does not matched.Please Try again !!!',{cssClass:'alert-danger',timeOut:5000});
      return false;
    }

    let image:HTMLInputElement = this.avatar.nativeElement;
    let fileCount:number = image.files.length;
    
    if(fileCount>0){
      let formData = new FormData();
      formData.append('avatar',image.files[0]);
      formData.append('name',this.name);
      formData.append('email',this.email);
      formData.append('username',this.username);
      formData.append('password',this.password);

      this.auth.registerUser(formData).subscribe(res=>{
        if(!res.success){
          this.flashMessage.show('You are not registered',{cssClass:'alert-danger',timeOut:5000});
          //this.router.navigate(['/register']);
        }else{
          this.flashMessage.show('You are successfully registered',{cssClass:'alert-success',timeOut:5000});
          //this.router.navigate(['/login']);
          
        
          setTimeout(()=>{
            this.bsModalRef.hide();
            this.openModalWithLoginComponent();
          },5000);
        }
      });

    }
 
  }

}
