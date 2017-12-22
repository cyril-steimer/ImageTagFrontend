import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ImageService } from '../image.service';
import { Image } from '../image';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  image: Image

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.imageService.getImageById(id)
      .subscribe(image => this.image = image)
  }

  deleteTag(index: number): void {
    this.image.tags.splice(index, 1)
  }

  addTag(tag: string): void {
    this.image.tags.push(tag)
  }

  update(): void {
    this.imageService.updateImage(this.image)
      .subscribe(() => this.back())
  }

  back(): void {
    this.location.back()
  }

  trackByIndex(index: number, image: Image): number {
    return index
  }
}
