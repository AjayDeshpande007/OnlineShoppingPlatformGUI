import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  loadUserCartTable=false;
  cartList:any=[];
  dataSource:any;
  displayedColumns: string[] = [
    'productName',
    'productPrice',
    'quantity',
    'totalPrice',
    'addDate',
    'buyProduct',
    'changeQuantity',
    'delete'
  ];



  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllItemFromCart(1);
  }

  buyProduct(product:any) {
    debugger;
    let userCart={
      'userId':1,
      'productId':product.productId,
      'quantity':product.quantity
    }
    debugger;
    this.userService.buyItemFromCart(userCart).subscribe(resp=>{
      alert("thanks for shopping");
      this.getAllItemFromCart(1);
    });

  }

  getAllItemFromCart(userId:any) {
  this.userService.getAllItemFromCart(userId).subscribe(resp=>{
    this.cartList=resp;
    this.dataSource=this.cartList;
    this.loadUserCartTable=true;
  });
}

changeProductQuantity(product:any) {
  let newQuantity=prompt('Enter the quantity');
  this.userService.updateProductQuantityFromCart(1,product.productId,newQuantity).subscribe(resp=>{
    alert(product.productName+" quantity updated successfully");
    this.getAllItemFromCart(1); 
   });
   
}

deleteProductFromCart(product:any) {
  this.userService.deleteItemFromCart(1,product.productId).subscribe(resp=>{
   alert(product.productName+" deleted successfully from cart");
   this.getAllItemFromCart(1); 
  });
}

}

