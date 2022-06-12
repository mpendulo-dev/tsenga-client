import { ContentService } from './../../service/content/content.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  products: any[] = [];
  numberOfProducts: number = 6;
  images: any[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getProducts().subscribe((data) => {
      this.products = data.data;
      console.log("collection=>", data.data);
    });
  }
  changeNumberOfProductsViewed () {
    this.numberOfProducts += 3;
  }
}
