import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.css']
})
export class AddOffersComponent implements OnInit {


  categoryList:any;
  loadCategory=false;

  loadProduct=false;
  productCategory:any;
  productList:any;  

  productBY:any
  productOffer:any;
  addProductOfferForm:any;
  constructor(private adminService:AdminService,private userService:UserService,private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.addProductOfferForm = this.fb.group ({
      productId: ['', []],
      productCategoryId: ['', []],
      offer: ['', []]
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

addProductOffer() {
    let productCommets={
      'productId':this.addProductOfferForm.value.productId,
      'offer':this.addProductOfferForm.value.offer,
    }
     this.adminService.addOffersForProducts(this.addProductOfferForm.value).subscribe(resp=>{
      alert("offer added successfully");
     });
    
  }
}
