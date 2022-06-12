import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ContentService {
  productsUrl = environment.PRODUCTS;
  specialUrl = environment.HIGHLIGHTS;
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
}
// .img.data[0].attributes.url
