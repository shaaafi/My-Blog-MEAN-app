import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  constructor(private auth:AuthService,private router:Router,private flash:FlashMessagesService) { }

  ngOnInit() {
    this.auth.getProfile().subscribe((res)=>{
      this.user=res.user;
      console.log(this.user);
    });
  }

  
  

}
