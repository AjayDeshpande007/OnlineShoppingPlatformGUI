import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit,AfterViewInit {

  constructor(private adminService:AdminService) { }
  productCategoryId=1;
  loadProductTable=false;
  categoryList:any=[];
  productCategory:any;
  prouctList:any=[];
  dataSource:any;
  displayedColumns: string[] = [
    'productName',
    'productPrice',
    'productQuantity',
    'paymentmode',
    'editPrice',
    'editQuantity',
    'isEnabled',
    'delete'
  ];

  ngOnInit(): void {
  //  this.dataSource=new MatTableDataSource(this.prouctList);
    this.adminService.getCategoryList().subscribe(resp=>{
      this.categoryList=resp;
    });
    this.productChangeAction(this.productCategoryId);
  }

  ngAfterViewInit(){
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;

  } 

  productChangeAction(productCategoryId:any) {
    this.productCategoryId=productCategoryId;
    this.adminService.getProductListByCategoryId(productCategoryId).subscribe(resp=>{
      this.prouctList=resp;
    //  this.dataSource=new MatTableDataSource(this.prouctList);
    this.dataSource=new MatTableDataSource(this.prouctList);
      this.loadProductTable=true;
      console.log(this.prouctList);
      
    });
  }

  editProductPrice(product:any) {
    let updatedPrice=prompt("enter new updated price");
    this.adminService.updateProductPrice(product.productId,updatedPrice).subscribe(resp=>{
      alert(product.productName+" price updated successfully")
      this.productChangeAction(this.productCategoryId);
    });
  }

  editProductQuantity(product:any) {
    let updatedQuantity=prompt("enter new updated quantity");
    this.adminService.updateProductQuantity(product.productId,updatedQuantity).subscribe(resp=>{
      alert(product.productName+" quantity updated successfully")
      this.productChangeAction(this.productCategoryId);
    });

  }

  enableDisableProduct(product:any) {
    this.adminService.enableDisableProduct(product.productId,product.productEnabled).subscribe(resp=>{
      alert(product.productName+" status changed successfully")
      this.productChangeAction(this.productCategoryId);
    }); 
  }

  deleteProduct(productId:any) {
    this.adminService.deleteProduct(productId).subscribe(resp=>{
      alert("product deleted successfully")
      this.productChangeAction(this.productCategoryId);
    });
  }

}
