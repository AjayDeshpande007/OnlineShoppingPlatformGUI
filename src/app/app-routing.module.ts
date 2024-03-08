import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DisableProductComponent } from './disable-product/disable-product.component';
import { UserListComponent } from './user-list/user-list.component';
import { TopProductComponent } from './top-product/top-product.component';
import { ProductCommentComponent } from './product-comment/product-comment.component';
import { ProductCommentActionComponent } from './product-comment-action/product-comment-action.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { BuyFromCartComponent } from './buy-from-cart/buy-from-cart.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllPurchaseItemComponent } from './view-all-purchase-item/view-all-purchase-item.component';
import { TopSellingItemComponent } from './top-selling-item/top-selling-item.component';
import { ViewOffersComponent } from './view-offers/view-offers.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { TestComponent } from './test/test.component';
import { ViewOffersAdminComponent } from './view-offers-admin/view-offers-admin.component';
import { AddOffersComponent } from './add-offers/add-offers.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'delete-product', component: DeleteProductComponent },
  { path: 'disable-product', component: DisableProductComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'top-product', component: TopProductComponent },
  { path: 'product-comment', component: ProductCommentComponent },
  { path: 'view-comment', component: ProductCommentActionComponent },
  { path: 'view-offers-admin', component: ViewOffersAdminComponent },
  { path: 'add-offers', component: AddOffersComponent },
  

  { path: 'user-cart', component: UserCartComponent },
  { path: 'add-to-cart', component: AddToCartComponent },
  { path: 'buy-from-cart', component: BuyFromCartComponent },
  { path: 'view-all-product', component: ViewAllProductComponent },
  { path: 'view-all-purchase-item', component: ViewAllPurchaseItemComponent },
  { path: 'top-selling-item', component: TopSellingItemComponent },
  { path: 'view-offers', component: ViewOffersComponent },
  { path: 'add-comment', component: AddCommentComponent },
  { path: 'test', component: TestComponent },
  
 
  


  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
