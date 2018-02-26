import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class ProductService {

  constructor(public http:Http) { }

  addBlog(formData){
    return this.http.post('http://localhost:2344/api/addBlog', formData)
    .map((res:Response) => res.json());
  }

  getAllBlog(){
    return this.http.get('http://localhost:2344/api/getAll')
    .map((res:Response) => res.json());
  }

  getOneBlog(id){
    return this.http.get(`http://localhost:2344/api/getOne?id=${id}`)
    .map((res:Response)=> res.json());
  }

  getDashboardBlog(id){
    return this.http.get(`http://localhost:2344/api/getDashboardAll?id=${id}`)
    .map((res:Response)=> res.json());
  }

}

