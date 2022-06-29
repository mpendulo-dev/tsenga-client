import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../service/content/content.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[] = [];
  total: number = 0;
  numberOfProductsInCart: number = 0;
  
  constructor( private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getProductsOnCart.subscribe(data => {
      this.cart = data;
     this.numberOfProductsInCart = this.cart.length;      
    });
  }
  removeProduct(product: any) {
    this.contentService.removeProductsOnCart(product);
  }

}
