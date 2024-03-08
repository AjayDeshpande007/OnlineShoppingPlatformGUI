import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  productCategory:any;
  categoryList:any;

  prouctList:any;
  dataSource:any;
  loadProductTable=false;
  displayedColumns: string[] = [
    'productName',
    'productPrice',
    'productQuantity',
    'paymentmode',
    'addToCart'
  ];

  constructor(private adminService:AdminService,private userService:UserService) { }

  ngOnInit(): void {
    this.adminService.getCategoryList().subscribe(resp=>{
      this.categoryList=resp;
    });
  }

  productChangeAction(categoryId:any) {
    this.userService.getProductListByCategoryIdForUser(categoryId).subscribe(resp=>{
      this.prouctList=resp;
      this.dataSource=new MatTableDataSource(this.prouctList);
      this.loadProductTable=true;
      
    });


  }

  buyProduct(productId:any) {

  
  }

  addToCartProduct(product:any) {
    let quantity=prompt('Enter the no of quantity');
    let userCart={
      'userId':1,
      'productId':product.productId,
      'quantity':quantity
    }
    if(quantity) {
    if(product.productQuantity<quantity) {
      alert("you cannot buy product because available quantity is less the purcase quantity");
    } else {
      this.userService.addNewItemIntoCart(userCart).subscribe(resp=>{
        alert("product added successfully into cart");
      })
    } 
  }
  }

}
