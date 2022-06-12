import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../service/content/content.service';
@Component({
  selector: 'app-highlight-item',
  templateUrl: './highlight-item.component.html',
  styleUrls: ['./highlight-item.component.css']
})
export class HighlightItemComponent implements OnInit {

  highlights: any[] =[];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getProductsOnSpecial().subscribe((data) => {

      this.highlights = data.data;
    })
  }

}
