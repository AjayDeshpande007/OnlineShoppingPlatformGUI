import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = 'http://localhost:8080/admin';

   

  constructor(private httpClient: HttpClient) { }

  

  getUserList() {
    return this.httpClient.get(this.url+"/seeAllUserList");
  }

  getCategoryList() {
    return this.httpClient.get(this.url+"/getCategoryList");
  }

  getProductListByCategoryId(categoryId:any) {
    return this.httpClient.get(this.url+"/getProductListByCategoryId?categoryId="+categoryId);
  }

  addNewProduct(product:any) {
    return this.httpClient.post(this.url+"/addNewProduct",product);
  }

  updateProductPrice(productId:any,productPrice:any) {
    return this.httpClient.get(this.url+"/updateProductPrice?productId="+productId+"&productPrice="+productPrice);
  }

  updateProductQuantity(productId:any,productQuantity:any){
    return this.httpClient.get(this.url+"/updateProductQuantity?productId="+productId+"&productQuantity="+productQuantity);
  }

  updateProduct(product:any) {
    return this.httpClient.post(this.url+"/updateProduct",product);
  }  

  deleteProduct(productId:any) {
    return this.httpClient.get(this.url+"/deleteProduct?productId="+productId);
  }  

  enableDisableProduct(productId:any,productStatus:boolean ) {
    return this.httpClient.get(this.url+"/enableDisableProduct?productId="+productId+"&productStatus="+productStatus);
  }  

 
  topTenUserByQuantity() {
    return this.httpClient.get(this.url+"/topTenUserByQuantity");
  }

  topTenUserByPurchase() {
    return this.httpClient.get(this.url+"/topTenUserByPurchase");
  }

  topTenCategoryByQuantity() {
    return this.httpClient.get(this.url+"/topTenCategoryByQuantity");
  }

  topTenCategoryByPurchase() {
    return this.httpClient.get(this.url+"/topTenCategoryByPurchase");
  }

  getAllCommentsByProductId(productId:any) {
    return this.httpClient.get(this.url+"/getAllCommentsByProductId?productId="+productId);
  }

  getAllCommentsByCategory() {
    return this.httpClient.get(this.url+"/getAllCommentsByCategory");
  }

  enableDisableCommets(commentId:any,isEnabled:any) {
    return this.httpClient.get(this.url+"/enableDisableCommets?commentId="+commentId+"&isEnabled="+isEnabled);
  }

  updateCommets(commentId:any,updatedComment:any) {
    return this.httpClient.get(this.url+"/updateCommets?commentId="+commentId+"&updatedComment="+updatedComment);
  }

  deleteComments(commentId:any) {
    return this.httpClient.get(this.url+"/deleteComments?commentId="+commentId);

  }

  viewOffers(productId:any) {
    return this.httpClient.get(this.url+"/viewOffers?productId="+productId);
  }

  addOffersForProducts(offers:any) {
    return this.httpClient.post(this.url+"/addProductOffer",offers);
  }

  updateOffers(offerId:any, updatedOffer:any) {
    return this.httpClient.get(this.url+"/updateOffers?offerId="+offerId+"&updatedOffer="+updatedOffer);
  }

  enableDisableOffers(offerId:any, isEnabled:boolean) {
    return this.httpClient.get(this.url+"/enableDisableOffers?offerId="+offerId+"&isEnabled="+isEnabled);
  }

  deleteOffers(offerId:any) {
    return this.httpClient.get(this.url+"/deleteOffers?offerId="+offerId);
  }

}
