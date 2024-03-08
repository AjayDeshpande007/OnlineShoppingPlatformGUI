import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/user';

   

  constructor(private httpClient: HttpClient) { }

  

  getUserList(){

    return this.httpClient.get(this.url);

  }

  getProductListByCategoryIdForUser(categoryId:any) {
    return this.httpClient.get(this.url+"/getProductListByCategoryIdForUser?categoryId="+categoryId);
  }

  getAllItemFromCart(userId:any) {
    return this.httpClient.get(this.url+"/getAllItemFromCart?userId="+userId);
  }

  buyItemFromCart(userCart:any) {
    return this.httpClient.post(this.url+"/buyItemFromCart",userCart);
  }

  addNewItemIntoCart(userCart:any) {
    return this.httpClient.post(this.url+"/addNewItemIntoCart",userCart);
  }

  updateProductQuantityFromCart(userId:any,productId:any,quantity:any) {
    return this.httpClient.get(this.url+"/updateProductQuantityFromCart?userId="+userId+"&productId="+productId+"&quantity="+quantity);
  }

  deleteItemFromCart(userId:any,productId:any) {
    return this.httpClient.get(this.url+"/deleteItemFromCart?userId="+userId+"&productId="+productId);
  }

  viewAllPreviouslyPurchasedItem(userId:any) {
    return this.httpClient.get(this.url+"/viewAllPreviouslyPurchasedItem?userId="+userId);
  }

  topTenSellingItemByPrice() {
    return this.httpClient.get(this.url+"/topTenSellingItemByPrice");
  }

  viewOffers() {
    return this.httpClient.get(this.url+"/viewOffersForUser");
  }

  addCommentsForProducts(productCommets:any) {
    return this.httpClient.post(this.url+"/addCommentsForProducts",productCommets);
  }

  getAllCommentsByProductIdForUser(productId:any) {
    return this.httpClient.get(this.url+"/getAllCommentsByProductIdForUser?productId="+productId);
  }


}
