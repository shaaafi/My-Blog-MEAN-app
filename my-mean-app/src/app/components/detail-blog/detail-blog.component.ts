import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ProductService } from '../../services/product.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-blog',
  templateUrl: './detail-blog.component.html',
  styleUrls: ['./detail-blog.component.css']
})
export class DetailBlogComponent implements OnInit {
  blog:any;
  constructor(public route:ActivatedRoute,public blogService:ProductService) { }

  ngOnInit():void {
    this.route.paramMap.switchMap((params:ParamMap)=>
      this.blogService.getOneBlog(params.get('id'))
    ).subscribe(res=> this.blog=res.data);
  }

}
