import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('ob') ob:ElementRef;
  bsModalRef: BsModalRef;
  public isCollapsed:boolean = true;
  
    constructor(public auth:AuthService,private router:Router,public flash:FlashMessagesService,private modalService: BsModalService){}
    
    public openModalWithRegisterComponent() {
      this.bsModalRef = this.modalService.show(RegisterComponent);
      
      }

  public openModalWithLoginComponent() {
    this.bsModalRef = this.modalService.show(LoginComponent);
    
    }

    
     
      public collapsed(event:any):void {
        console.log(event);
      }
     
      public expanded(event:any):void {
        console.log(event);
      }
  

    ngOnInit() {
    }
    
    onLogout(){
     
     // this.flash.show('You are successfully logout',{cssClass:'alert-success',timeOut:3000});
     this.flash.show("You are successfully logout",{cssClass:'alert-success',timeOut:3000});
      setTimeout(()=>{
        this.auth.logout();
        this.router.navigate(['/home']);
        this.openModalWithLoginComponent();
      },5000);
    }
  
    openNav(){
      this.ob.nativeElement.style.width='250px';
    }
  
    closeNav(){
      this.ob.nativeElement.style.width='0px';
    }

}
