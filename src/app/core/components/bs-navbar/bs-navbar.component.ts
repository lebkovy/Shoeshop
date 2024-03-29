import { ShoppingCart } from 'shared/models/shopping-cart';
import { Observable } from 'rxjs/internal/Observable';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { AppUser } from 'shared/models/app-user';
import { AuthService } from 'shared/services/auth.service';
import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  providers: [NgbDropdownConfig]
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  navbarColor = false;
  scrollNum;
  windowNum;
  collapsed;

  constructor(
    private auth: AuthService,
    private cartService: ShoppingCartService,
    config: NgbDropdownConfig,
    public el: ElementRef) {
    config.placement = 'bottom-right';
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.cartService.getCart();
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      this.scrollNum = window.pageYOffset
      this.windowNum = window.screen.width;

      if(this.windowNum > 370 && this.windowNum < 767) {
        if (this.scrollNum >= 20) {
          this.navbarColor = true
        } else {
          this.navbarColor = false
        }
      }
      else {
        if (this.scrollNum >= 450) {
          this.navbarColor = true
        } else {
          this.navbarColor = false
        }
      }
}
         
}
