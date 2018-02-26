import {ChangeDetectionStrategy, Component, Input, OnInit,ChangeDetectorRef } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

import { DatePipe } from '@angular/common'

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  page: number=1;
  bsModalRef: BsModalRef;

  blogs: any;

  constructor(private modalService: BsModalService,public blogService:ProductService,private cd:ChangeDetectorRef) { 
   
  }

  ngOnInit() {
    this.blogService.getAllBlog().subscribe((res)=>{
      this.blogs=res.data;
      this.cd.markForCheck();
      console.log(res);
    });
  }

 

  public openModalWithRegisterComponent() {
    this.bsModalRef = this.modalService.show(RegisterComponent);
    }

public openModalWithLoginComponent() {
  this.bsModalRef = this.modalService.show(LoginComponent);
  }

}
