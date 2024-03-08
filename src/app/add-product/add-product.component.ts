import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormBuilder } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm : any ;
  constructor(private router: Router,private eventService:EventService,private fb: FormBuilder,private adminService:AdminService) { }
  productDTO:any;
  categoryList:any;
  ngOnInit(): void {
    this.addProductForm = this.fb.group ({
      productName: ['', []],
      productPrice: ['', []],
      productQuantity: ['', []],
      paymentmode: ['', []],
      categoryId: ['', []],
      });

      this.adminService.getCategoryList().subscribe(resp=>{
        this.categoryList=resp;
      });

  }

  addProduct() {
    debugger;
    this.adminService.addNewProduct(this.addProductForm.value).subscribe((resp)=>{
      alert("product added successfully");
    });
  }

}
