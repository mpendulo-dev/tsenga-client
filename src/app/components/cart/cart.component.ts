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
    });
    this.getTotalCost();
    this.numberOfItemsInCart();
    localStorage.setItem('total', JSON.stringify(this.numberOfProductsInCart));
   
  }
  
  numberOfItemsInCart(): number {
     return this.numberOfProductsInCart = this.cart.length;      
    
  }
  getTotalCost() {
    for(let i = 0; i < this.cart.length; i++) {
      this.totalOfCartItems += this.cart[i].price;
    }
  }
  removeProduct(product: any) {
    this.totalOfCartItems -= product.price;
    this.numberOfProductsInCart -= 1;
    this.contentService.removeProductsOnCart(product);
    localStorage.setItem('total', JSON.stringify(this.numberOfProductsInCart));

  
  }
  ngOnDestroy() {
    this.newSubscription?.unsubscribe();
  }

}
