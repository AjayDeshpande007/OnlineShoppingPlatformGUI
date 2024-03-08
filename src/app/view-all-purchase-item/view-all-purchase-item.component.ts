import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-all-purchase-item',
  templateUrl: './view-all-purchase-item.component.html',
  styleUrls: ['./view-all-purchase-item.component.css']
})
export class ViewAllPurchaseItemComponent implements OnInit {

  prouctPurchaseList:any;
  dataSource:any;
  loadProductPurchaseTable=false;
  displayedColumns: string[] = [
    'productName',
    'productQuantity',
    'price',
    'totalPrice',
    'purchaseDate'
  ];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.viewAllPreviouslyPurchasedItem(1).subscribe(resp=>{
      this.prouctPurchaseList=resp;
      debugger;
      this.dataSource=this.prouctPurchaseList;
      this.loadProductPurchaseTable=true;
    }) 
  }

}
