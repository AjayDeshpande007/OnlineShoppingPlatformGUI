import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-comment-action',
  templateUrl: './product-comment-action.component.html',
  styleUrls: ['./product-comment-action.component.css']
})
export class ProductCommentActionComponent implements OnInit {

  constructor(private adminService:AdminService,private userService:UserService) { }
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
    'commentsDate'
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
  this.userService.getAllCommentsByProductIdForUser(productCategoryId).subscribe(resp=>{
    this.commetList=resp;
    this.dataSource=this.commetList;
    this.loadCommentTable=true;
  });
}


}
