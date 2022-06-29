import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  productsUrl = environment.PRODUCTS;
  specialUrl = environment.HIGHLIGHTS;
  private productsOnCart = new BehaviorSubject<any>([]);
  public getProductsOnCart = this.productsOnCart.asObservable();

  constructor(private htpp: HttpClient) {}

  getProducts = (): Observable<any> => {
    return this.htpp.get(`${this.productsUrl}?populate=*`);
  };
  getProduct = (id: any) : Observable<any> => {
    return this.htpp.get(`${this.productsUrl}/${id}?populate=*`);
  }
  getProductsOnSpecial = (): Observable<any> => {
    return this.htpp.get(this.specialUrl);
  }
  AddProductToCart(products: any) {
    this.productsOnCart.next(this.productsOnCart.getValue().concat(products));
  }
  removeProductsOnCart(data: any) {
   const products: any[] = this.productsOnCart.getValue();
   products.forEach((item: any, index: any) => {
    if (item === data) {
      products.splice(index, 1);
    }
   });
   this.productsOnCart.next(products);
  }
}

