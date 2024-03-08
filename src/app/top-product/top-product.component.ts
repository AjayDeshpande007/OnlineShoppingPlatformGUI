import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.css']
})
export class TopProductComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  categoryList:any;
  loadCategory=false;

  loadProduct=false;
  productCategory:any;
  productList:any;  

  product:any;
  productBY:any
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


productChange(productId:any) {
  
}

getList(productBy:any) {
debugger;
console.log(productBy);
console.log(this.product);
    

}


}

