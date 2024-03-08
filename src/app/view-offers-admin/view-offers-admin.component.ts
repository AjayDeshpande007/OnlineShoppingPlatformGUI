import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-offers-admin',
  templateUrl: './view-offers-admin.component.html',
  styleUrls: ['./view-offers-admin.component.css']
})
export class ViewOffersAdminComponent implements OnInit {

  constructor(private adminService:AdminService,private userService:UserService) { }
  categoryList:any;
  loadCategory=false;

  loadProduct=false;
  productCategory:any;
  productList:any;  
  productId:any;

  productBY:any
  prouctOfferList:any;

  loadProductOfferTable=false;
  commetList:any=[];
  dataSource:any;
  displayedColumns: string[] = [
    'productName',
    'productPrice',
    'productOffer',
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
  this.adminService.viewOffers(productCategoryId).subscribe(resp=>{
    this.prouctOfferList=resp;
    debugger;
    this.dataSource=this.prouctOfferList;
    this.loadProductOfferTable=true;
  });
}


editOffer(product:any) {
  let updatedComment=prompt(product.offerOffer)
  this.adminService.updateOffers(product.offerId,updatedComment).subscribe(resp=>{
    alert("offer updated successfully")
    this.productChange(this.productId);
  });
 
}


enableDisableOffer(product:any) {
  debugger;
  this.adminService.enableDisableOffers(product.offerId,product.enabled).subscribe(resp=>{
    alert("offer action done successfully")
    this.productChange(this.productId);
  });

}

deleteOffer(offerId:any) {
  this.adminService.deleteOffers(offerId).subscribe(resp=>{
    alert("offer deleted successfully")
    this.productChange(this.productId);
  });

}

}
