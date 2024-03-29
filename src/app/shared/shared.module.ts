import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular5-data-table';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgxImageZoomModule } from 'ngx-image-zoom';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { MarketingComponent } from 'shared/components/marketing/marketing.component';
import { ProductFilterComponent } from 'app/shopping/components/products/product-filter/product-filter.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    DataTableModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxGalleryModule,
    NgbModule.forRoot(),
    NgxImageZoomModule.forRoot(),
    RouterModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    MarketingComponent,
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    FormsModule,
    DataTableModule,
    NgxImageZoomModule.forRoot().ngModule,
    MarketingComponent,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxGalleryModule,
    NgbModule.forRoot().ngModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
