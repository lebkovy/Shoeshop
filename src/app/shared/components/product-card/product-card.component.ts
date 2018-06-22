import { GalleryService } from './../../services/gallery.service';
import { Category } from './../../models/category';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';
import { CategoryService } from 'shared/services/category.service';
import { ProductService } from 'shared/services/product.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-image') showImage = true;
  @Input('show-actions') showActions = true;
  @Input('show-details') showDetails = true;
  @Input('show-gallery') showGallery = false;
  @Input('category') category: Category;

  @Input('shopping-cart') shoppingCart: ShoppingCart;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  zoomedImg = "https://i.imgur.com/M6RIJsw.jpg";

  category$;
  products$;

  constructor(
    private cartService: ShoppingCartService,
    private categoryService: CategoryService,
    private productService: ProductService,
    private galleryService: GalleryService
  ) {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  async loadGallery(product) {
    this.galleryService.loadGallery(product);
    this.galleryOptions = this.galleryService.getOptions();
    this.galleryImages = this.galleryService.getImages();
  }

  ngOnInit() {
    this.category$ = this.categoryService.getCategory(this.product.category);
    this.products$ = this.productService.getAll();
    this.loadGallery(this.product);
  }
}