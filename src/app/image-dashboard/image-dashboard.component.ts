import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Image, TagImageQuery } from '../image'
import { ImageService } from '../image.service'
import { Paginator } from '../paginator'

@Component({
  selector: 'app-image-dashboard',
  templateUrl: './image-dashboard.component.html',
  styleUrls: ['./image-dashboard.component.css']
})
export class ImageDashboardComponent implements OnInit {

  tag : string

  columns = 3
  pageSize = this.columns * 3
  pageSizeOptions = [this.pageSize, this.columns * 6]

  paginator: Paginator

  images: Image[] = []

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute) {
    
      this.paginator = new Paginator(
      this.pageSize,
      imageService,
      images => this.images = images,
      () => this.tag == null ? null : new TagImageQuery(this.tag));
  }

  ngOnInit() {
    this.tag = this.route.snapshot.paramMap.get('tag')
    this.paginator.loadImages()
  }

  handlePagingEvent(event: any) {
    this.paginator.setPageSize(event.pageSize)
    this.paginator.loadPage(event.pageIndex)
  }
}
