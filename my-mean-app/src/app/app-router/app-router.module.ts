import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { RegisterComponent } from '../components/register/register.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AddBlogComponent } from '../components/add-blog/add-blog.component';
import { DetailBlogComponent } from '../components/detail-blog/detail-blog.component';
import { UpdateBlogComponent } from '../components/update-blog/update-blog.component';

import { AppGuard } from '../guard/app.guard';

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AppGuard] },
  {path: 'profile' ,component:ProfileComponent, canActivate:[AppGuard]},
  {path: 'addBlog/:id' , component:AddBlogComponent },
  {path:'detailBlog/:id' , component:DetailBlogComponent},
  {path:'login',component:LoginComponent},
  {path:'rester',component:RegisterComponent},
  {path:'updateBlog/:id',component:UpdateBlogComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRouterModule { }
