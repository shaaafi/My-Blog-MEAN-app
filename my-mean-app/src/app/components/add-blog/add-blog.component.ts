import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})

export class AddBlogComponent implements OnInit {

  @ViewChild('avatar') avatar:ElementRef;
  title:string;
  catagory:string;
  content:string;
  auther:string;
  auther_id:string;

  constructor(public blog:ProductService,public flashMessage:FlashMessagesService,public route:ActivatedRoute,public location:Location) { }

  
  ngOnInit():void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
        this.auther_id = params.get('id');
    })
  }

  upload() {
    //locate the file element meant for the file upload.
   
        let inputEl:HTMLInputElement = this.avatar.nativeElement;
    //get the total amount of files attached to the file input.
        let fileCount: number = inputEl.files.length;
    //create a new fromdata instance
        let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
        if (fileCount > 0) { // a file was selected
            //append the key name 'photo' with the first file in the element
                formData.append('avatar', inputEl.files[0]);
                formData.append('title', this.title);
                formData.append('catagory', this.catagory);
                formData.append('content', this.content);
                formData.append('auther', this.auther_id);
            //call the angular http method
           
          }else{
            formData.append('title', this.title);
            formData.append('catagory', this.catagory);
            formData.append('content', this.content);
            formData.append('auther', this.auther_id);
          }
      
          this.blog.addBlog(formData).subscribe((res)=>{
            console.log(res);
              if(res.success){
                this.flashMessage.show('Your product uploaded successfully!!!',{cssClass:'alert-success',timeOut:5000});
              }
          })
      
        }

        goBack(){
          this.location.back();
        }


}
