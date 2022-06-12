import { ContentService } from './../../service/content/content.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  products: any[] = [];
  numberOfProducts: number = 6;
  images: any[] = [];

  constructor(private contentService: ContentService, private router: Router) {}

  ngOnInit(): void {
    this.contentService.getProducts().subscribe((data) => {
      this.products = data.data;
    });
  }
  changeNumberOfProductsViewed () {
    this.numberOfProducts += 3;
  }
  viewProductDetails(id: number) {
    this.router.navigate(['/product/' + id]);
  }
}
