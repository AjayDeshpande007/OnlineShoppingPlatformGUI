import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  categoryList:any;
  loadCategory=false;

  loadProduct=false;
  productCategory:any;
  productList:any;  

  productBY:any
  productComment:any;
  addProductCommentForm:any;
  constructor(private adminService:AdminService,private userService:UserService,private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.addProductCommentForm = this.fb.group ({
      productId: ['', []],
      productCategoryId: ['', []],
      comments: ['', []]
      });

    this.adminService.getCategoryList().subscribe(resp=>{
      this.categoryList=resp;
    });
  }
  
  productChangeAction(productCategoryId:any) {
  this.adminService.getProductListByCategoryId(productCategoryId).subscribe(resp=>{
    this.productList=resp;
    this.loadProduct=true;
  });
}

productChange(productCategoryId:any) {
 

}

addProductComment() {
    let productCommets={
      'productId':this.addProductCommentForm.value.productId,
      'comments':this.addProductCommentForm.value.productComment,
      'userId':1
    }
     this.userService.addCommentsForProducts(this.addProductCommentForm.value).subscribe(resp=>{
      alert("Comment added successfully");
     });
    
  }
}