import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';  
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import {  MatPaginatorModule } from '@angular/material/paginator';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DisaleProductComponent } from './disale-product/disale-product.component';
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
import { AddOffersComponent } from './add-offers/add-offers.component';
import { ViewOffersAdminComponent } from './view-offers-admin/view-offers-admin.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HeaderComponent,
    AdminComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    DisaleProductComponent,
    DisableProductComponent,
    UserListComponent,
    TopProductComponent,
    ProductCommentComponent,
    ProductCommentActionComponent,
    UserCartComponent,
    AddToCartComponent,
    BuyFromCartComponent,
    ViewAllProductComponent,
    ViewAllPurchaseItemComponent,
    TopSellingItemComponent,
    ViewOffersComponent,
    AddCommentComponent,
    TestComponent,
    AddOffersComponent,
    ViewOffersAdminComponent
  ],
  imports: [ BrowserModule,AppRoutingModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatToolbarModule,MatInputModule,MatCardModule,
    MatTableModule,MatPaginatorModule,MatSlideToggleModule,MatSelectModule,MatMenuModule,MatButtonModule,MatSidenavModule,MatIconModule,HttpClientModule,
  ],
 schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
