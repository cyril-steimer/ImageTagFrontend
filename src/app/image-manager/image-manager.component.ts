import { Component, OnInit } from '@angular/core';

import { ImageService } from '../image.service'
import { Image, ImageQuery } from '../image';
import { Paginator } from '../paginator';

@Component({
  selector: 'app-image-manager',
  templateUrl: './image-manager.component.html',
  styleUrls: ['./image-manager.component.css']
})
export class ImageManagerComponent implements OnInit {

  pageSize = 5
  pageSizeOptions = [5, 10, 20, 50, 100]

  query: ImageQuery

  paginator: Paginator

  images: Image[]

  constructor(private imageService: ImageService) { 
    this.paginator = new Paginator(
      this.pageSize,
      imageService,
      images => this.images = images,
      () => this.query)
    }

  ngOnInit() {
    this.paginator.loadImages()
  }

  search(query: ImageQuery) {
    this.query = query
    this.paginator.loadImages()
  }

  handlePagingEvent(event: any) {
    this.paginator.setPageSize(event.pageSize)
    this.paginator.loadPage(event.pageIndex)
  }
}
