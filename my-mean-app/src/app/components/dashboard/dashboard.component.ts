import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public blogs:any;
  public id:string;

  constructor(public router:Router,public blogService:ProductService) { }

  ngOnInit() {
    const user:any = localStorage.getItem('user');
    const userOb:any = JSON.parse(user);
    console.log(userOb);
    this.id = userOb.id;
    this.blogService.getDashboardBlog(this.id).subscribe(res=>{
      this.blogs = res.data;
    });
  }

  goToEdit(){
    this.router.navigate(['/updateBlog',this.id]);
  }

  goToAdd():void{
    this.router.navigate(['/addBlog',this.id]);
  }

 
 
}
