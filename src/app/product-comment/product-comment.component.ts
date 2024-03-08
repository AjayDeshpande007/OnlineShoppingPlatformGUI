import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.css']
})
export class ProductCommentComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  categoryList:any;
  loadCategory=false;

  loadProduct=false;
  productCategory:any;
  productList:any;  
  productId:any;

  productBY:any

  loadCommentTable=false;
  commetList:any=[];
  dataSource:any;
  displayedColumns: string[] = [
    'comments',
    'commentsDate',
    'isEnabled',
    'edit',
    'delete'
  ];


  ngOnInit(): void {
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
  this.productId=productCategoryId;
  this.adminService.getAllCommentsByProductId(productCategoryId).subscribe(resp=>{
    this.commetList=resp;
    this.dataSource=this.commetList;
    this.loadCommentTable=true;
  });
}


editComment(product:any) {
  let updatedComment=prompt(product.comments)
  this.adminService.updateCommets(product.commetId,updatedComment).subscribe(resp=>{
    alert("comment updated successfully")
    this.productChange(this.productId);
  });
 
}


enableDisableComment(product:any) {
  debugger;
  this.adminService.enableDisableCommets(product.commetId,product.enabled).subscribe(resp=>{
    alert("comment action done successfully")
    this.productChange(this.productId);
  });

}

deleteComment(commetId:any) {
  this.adminService.deleteComments(commetId).subscribe(resp=>{
    alert("comment deleted successfully")
    this.productChange(this.productId);
  });

}

}
