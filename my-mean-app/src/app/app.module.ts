import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router/app-router.module';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'

import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgxPaginationModule} from 'ngx-pagination'; 


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

import { ValidationService } from './services/validation.service';
import { AuthService } from './services/auth.service';
import { AppGuard } from './guard/app.guard';
import { ProductService } from './services/product.service';
import { DetailBlogComponent } from './components/detail-blog/detail-blog.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { UpdateBlogComponent } from './components/update-blog/update-blog.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    DetailBlogComponent,
    AddBlogComponent,
    UpdateBlogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    CommonModule,
    FlashMessagesModule,
    HttpModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [ValidationService,AuthService,AppGuard,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
