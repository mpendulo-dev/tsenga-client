import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ContentService } from '../../service/content/content.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  product: any;

  constructor(private route: ActivatedRoute, private contentService: ContentService) {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
     this.getProduct()
  }
  getProduct() {
    if(this.id) {
      this.contentService.getProduct(this.id).subscribe((data) => {
        this.product = data.data.attributes;
      })
    }
  }
}
