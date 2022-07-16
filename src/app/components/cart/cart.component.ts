import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ContentService } from '../../service/content/content.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cart: any[] = [];
  total: number = 0;
  numberOfProductsInCart: number = 0;
  totalOfCartItems: number = 0;
  newSubscription: Subscription | undefined;
  
  constructor( private contentService: ContentService) { }

  ngOnInit(): void {
    this.newSubscription = this.contentService.getProductsOnCart.subscribe(data => {
      this.cart = data;      
     this.numberOfProductsInCart = this.cart.length;      
    });
    this.getTotalCost();
  }

  getTotalCost() {
    for(let i = 0; i < this.cart.length; i++) {
      this.totalOfCartItems += this.cart[i].price;
    }
  }
  removeProduct(product: any) {
    this.totalOfCartItems -= product.price;
    this.contentService.removeProductsOnCart(product);
   
  }
  ngOnDestroy() {
    this.newSubscription?.unsubscribe();
  }

}
