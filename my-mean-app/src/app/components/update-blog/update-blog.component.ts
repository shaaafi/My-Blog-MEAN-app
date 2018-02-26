import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {
  @ViewChild('avatar') avatar:ElementRef;
  title:string;
  catagory:string;
  content:string;
  auther:string;
  
  

  constructor(public blog:ProductService,public flashMessage:FlashMessagesService,public location:Location) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
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
                formData.append('category', this.catagory);
                formData.append('content', this.content);
                formData.append('auther', this.auther);
            //call the angular http method
            
          }else{
            formData.append('title', this.title);
            formData.append('category', this.catagory);
            formData.append('content', this.content);
            formData.append('auther', this.auther);
          }
       
          this.blog.addBlog(formData).subscribe((res)=>{
            console.log(res);
              if(res.success){
                this.flashMessage.show('Your product uploaded successfully!!!',{cssClass:'alert-success',timeOut:5000});
              }
          })
       
        }

}
